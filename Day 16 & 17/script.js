function bgchange(color) {
  let colorarray = ["#C1E1C1", "#CDC1FF", "#AB886D", "#D2E0FB", "#F7B5CA"];
  document.body.style.background = colorarray[color];
}

var colorarray = ["#C1E1C1", "#CDC1FF", "#AB886D", "#D2E0FB", "#F7B5CA"];
var colorbox = document.getElementById("colorbox");

colorarray.forEach(function (color, index) {
  let span = document.createElement("span");
  span.style.backgroundColor = color;
  span.addEventListener("click", function () {
      bgchange(index);
  });
  colorbox.appendChild(span);
});
