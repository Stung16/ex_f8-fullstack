const imgNightLight = document.querySelector(".nightlight");
const shadow_box = document.querySelector(".shadow_box");
const mirror = document.querySelector(".mirror");
const box_img = document.querySelector(".box-img");
var ismove = false

box_img.addEventListener("mousemove", function (e) {
    ismove = true
  let imgWidth = this.offsetWidth;
  let imgHeight = this.offsetHeight;

  let percentBorderX = ((e.pageX - this.offsetLeft) / imgWidth) * 100;
  let percentBorderY = ((e.pageY - this.offsetTop) / imgHeight) * 100;

// console.log(e.clientX,e.clientY,e.pageX,e.pageY);
  if(e.clientX + 50 < )

  shadow_box.style.display = "block";
  shadow_box.style.left = `${e.clientX }px`
  shadow_box.style.top = `${e.clientY}px`
  


  mirror.style.visibility = "visible";
  mirror.style.backgroundPosition = `${percentBorderX}% ${percentBorderY}%`;
});

box_img.addEventListener("mouseout", function () {
  mirror.style.visibility = "hidden";
  shadow_box.style.display = "none";
});
