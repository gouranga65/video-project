const subBtn=document.querySelector(".subBtn");
// subBtn.addEventListener("click",function(){
//   subBtn.classList.toggle("toggle")  
// });
let backVideo=document.querySelector(".backVideo");
function play(){
    if (backVideo.paused) {
        backVideo.play();
        subBtn.classList.add("toggle")
    }
    else{
        backVideo.paused();
        subBtn.classList.remove("toggle")
    }
}
