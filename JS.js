setInterval(rotate,1500)

function rotate(){
    let rImg=document.getElementById("right-img").getAttribute("src")
    let lImg=document.getElementById("left-img").getAttribute("src")
    let fImg=document.getElementById("front-img").getAttribute("src")
    let bImg=document.getElementById("back-img").getAttribute("src")

    document.getElementById("right-img").setAttribute("src",fImg)
    document.getElementById("left-img").setAttribute("src",bImg)
    document.getElementById("front-img").setAttribute("src",lImg)
    document.getElementById("back-img").setAttribute("src",rImg)
}

function sparisce(id) {
    var x=document.getElementById(id);
    if (x.style.visibility==="visible") {
      x.style.visibility="hidden";
    } else {
      x.style.visibility="visible";
    }
}


