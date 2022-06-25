let cats;

async function layMeo() {
    let kQ = await fetch("https://api.thecatapi.com/v1/breeds");
    console.log(kQ);
    let kQJson = await kQ.json();
    console.log(kQJson);
    cats = kQJson;
    inRa(cats);
}

layMeo();

function inRa(mangMeo) {
    let list = document.getElementById("list");
    for (let i = 0; i < mangMeo.length; i++) {
        let conMeoMoi = document.createElement("p");
        conMeoMoi.innerHTML = mangMeo[i].name;
        list.appendChild(conMeoMoi);
        let hinhMeo = document.createElement("img");
        hinhMeo.src = mangMeo[i].image.url;
        hinhMeo.width = 500;
        list.appendChild(hinhMeo);
    }
};