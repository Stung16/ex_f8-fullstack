// var list = document.querySelector(".list")
// var listItems = list.querySelectorAll(".list-item")

// listItems.forEach(function(item,index) {
//     item.addEventListener("dragstart", function() {
//         item.classList.add("dragging")

//     })
//     item.addEventListener("dragend", function() {
//         item.classList.remove("dragging")
//     })
//     // let itemIndex = 0
//     // let moduleIdex = 0
//     // let title ="Bài "
//     // if(item.classList.contains("module")){
//     //     title = "Module "
//     //     moduleIdex++
//     // }else{
//     //     itemIndex++
//     // }

//     // if(!item.children.length){

//     // }

// })

// var initSortList = function(e) {
//     e.preventDefault()
//     var draggingItem =list.querySelector(".dragging")
//     var siblings =[...list.querySelectorAll(".list-item:not(.dragging)")]
//     let nextSibling = siblings.find(function(sibling) {
//         return e.clientY <= sibling.offsetTop + sibling.offsetHeight /2 + sibling.offsetHeight /4
//     })
//     list.insertBefore(draggingItem,nextSibling)
// }
// list.addEventListener("dragover",initSortList)

var list = document.querySelector(".list");
const listTable = [
  {
    module: "Nhập môn lập trình web",
    lessons: [
      "Giới thiệu Khóa học HTML-CSS",
      "Nhập môn lập trình web - Phần 1",
      "Nhập môn lập trình web - Phần 2",
      "Nhập môn lập trình web - Phần 3",
      "Nhập môn lập trình web - Phần 4",
      "Nhập môn lập trình web - Phần 5",
      "Nhập môn lập trình web - Phần 6",
      "Nhập môn lập trình web - Phần 7",
      "Nhập môn lập trình web - Phần 8",
      "Nhập môn lập trình web - Phần 9",
      "Nhập môn lập trình web - Phần 10",
    ],
  },
  {
    module: "Ngôn ngữ HTML",
    lessons: [
      "Công cụ - Phần mềm cần chuẩn bị",
      "Ngôn ngữ HTML",
      "Thuộc tính Float trong CSS",
      "Nhập môn lập trình web - Phần 11",
      "Nhập môn lập trình web - Phần 12",
      "Nhập môn lập trình web - Phần 13",
      "Nhập môn lập trình web - Phần 14",
      "Nhập môn lập trình web - Phần 15",
      "Nhập môn lập trình web - Phần 16",
      "Nhập môn lập trình web - Phần 17",
      "Nhập môn lập trình web - Phần 18",
      "Nhập môn lập trình web - Phần 19",
      "Nhập môn lập trình web - Phần 20",
      "Nhập môn lập trình web - Phần 21",
      "Nhập môn lập trình web - Phần 22",
    ],
  },
  {
    module: "Ngôn ngữ CSS",
    lessons: [
      "Thuộc tính Position trong CSS",
      "Tích hợp font-awesome và kỹ thuật liên quan",
      "Tạo bộ đếm (Counter) trong CSS",
      "Nhập môn lập trình web - Phần 23",
      "Nhập môn lập trình web - Phần 24",
      "Nhập môn lập trình web - Phần 25",
      "Nhập môn lập trình web - Phần 26",
      "Nhập môn lập trình web - Phần 27",
    ],
  },
];

// listTable.forEach((topic, indexTopic) => {
//     topic.lessons.forEach(function(item,index) {
//         console.log(item,index);
//     })
// })
const result = listTable
  .map(
    (list, index) =>
      ` <div class="list-item module" draggable="true">
        <span>Module ${index + 1}:</span>
        ${list.module}
      </div>
      ${list.lessons
        .map(
          (item, index) =>
            `<div class="list-item" draggable="true">
        <span>Bài ${index + 1}:</span>
          ${item}
        </div>`
        )
        .join("")}`
  )
  .join("");
list.innerHTML = result;
var listItems = list.querySelectorAll(".list-item");
listItems.forEach(function (item, index) {
  item.addEventListener("dragstart", function () {
    item.classList.add("dragging");
  });
  item.addEventListener("dragend", function () {
    item.classList.remove("dragging");
  });
});
var initSortList = function (e) {
  e.preventDefault();
  var draggingItem = list.querySelector(".dragging");
  var siblings = [...list.querySelectorAll(".list-item:not(.dragging)")];
  let nextSibling = siblings.find(function (sibling) {
    return (
      e.clientY <=
      sibling.offsetTop + sibling.offsetHeight / 2 + sibling.offsetHeight / 4
    );
  });
  list.insertBefore(draggingItem, nextSibling);
};
list.addEventListener("dragover", initSortList);

list.addEventListener("dragend", function () {
  const listItem = document.querySelectorAll(".list-item:not(.module) span");
  const listModule = document.querySelectorAll(".list-item.module span");
  listItem.forEach((item, index) => {
    index++
    item.innerHTML = `Bài ${index}:`;
  });
  listModule.forEach((module, index) => {
    index++
    module.innerHTML = `Module ${index}:`;
  });
});
