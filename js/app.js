const videoblocks = document.querySelectorAll(".vid-block");
console.log(videoblocks);

for (let content in videoblocks) {
    let vid = videoblocks[content];
    console.log(vid);
    const para = vid.children[0];
    const cont = vid.children[1];
    cont.style.top = '-430px';
    console.log(cont);
    para.addEventListener("click", ()=> {
            if (cont.style.top < "0") {
            cont.style.top = "30px";
            para.style.backgroundColor = "#00000000";
            para.style.color = "black";
            vid.style.height = '430px';
        } else {
            cont.style.top = "-430px";
            para.style.backgroundColor = "#232A6A";
            para.style.color = "white";
            vid.style.height = '30px';
        }
    })
}