const subBtn=document.querySelector(".subBtn");
subBtn.addEventListener("click",function(){
    if (!subBtn.classList.contains("toggle")) {
        subBtn.classList.add("toggle");
        backVideo.pause();
    } else {
    subBtn.classList.remove("toggle")
    backVideo.play();
    }
});
let backVideo=document.querySelector(".backVideo");
