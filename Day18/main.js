var contentText =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, et? Adipisci consectetur corporis assumenda cumque saepe! Quasi ipsum quamobcaecati piditate nulla harum, odit, debitis molestias fuga laborummagni sunt.";
var content = document.getElementById("content");

function changeNextColor(inner) {
  var text = inner.split(" ");

  text.forEach((item) => {
    let span = document.createElement("span");
    span.innerHTML = `${item} `;
    content.appendChild(span);
  });

  spans = document.querySelectorAll("span");
  let i = 0;

  function handle() {
    if (i >= spans.length) i = 0;
    spans[i].setAttribute("class", "red_color");
    setTimeout(() => {
      spans[i].setAttribute("class", "black_color");
      i++;
      handle();
    }, 500);
  }
  handle();
}

changeNextColor(contentText);
