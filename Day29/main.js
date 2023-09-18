var list = document.querySelector(".list")
var listItems = list.querySelectorAll(".list-item")


listItems.forEach(function(item,index) {
    item.addEventListener("dragstart", function() {
        item.classList.add("dragging")

    })
    item.addEventListener("dragend", function() {
        item.classList.remove("dragging")
    })
    // let itemIndex = 0
    // let moduleIdex = 0
    // let title ="Bài "
    // if(item.classList.contains("module")){
    //     title = "Module "
    //     moduleIdex++
    // }else{
    //     itemIndex++
    // }

    // if(!item.children.length){

    // }
    
})

var initSortList = function(e) {
    e.preventDefault()
    var draggingItem =list.querySelector(".dragging")
    var siblings =[...list.querySelectorAll(".list-item:not(.dragging)")]
    let nextSibling = siblings.find(function(sibling) {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight /2 + sibling.offsetHeight /4
    })
    list.insertBefore(draggingItem,nextSibling)
}
list.addEventListener("dragover",initSortList)
