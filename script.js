const reg=document.getElementById("register")
const popupLog=document.getElementById("popreg")
const close=document.getElementById("close")

close.addEventListener('click',()=>{
  popupLog.style.display="none"
})

reg.addEventListener('click', () => {
  popupLog.style.display = "flex";
});



