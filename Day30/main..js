var btn_file = document.querySelector(".btn-file")
var btn_drop= btn_file.nextElementSibling
var control_right=document.querySelector(".control-right")
var btnBold=control_right.querySelector(".btn-bold")
var btnItalic=control_right.querySelector(".btn-italic")
var btnUnderline=control_right.querySelector(".btn-underline")
var control_left=document.querySelector(".control-left")
var inputContent = document.querySelector(".content")
var inputTypeColor=control_right.querySelector(`input[type="color"]`)
var newBtn =btn_drop.querySelector("#new-btn")
var check =false








btn_file.addEventListener("click",function(e) {
    e.preventDefault();
        btn_drop.classList.add("active")
        check = true

})

document.addEventListener("click",function(e) {
    // if(e.target.nodeName === "BUTTON"){
    //     btn_drop.classList.add("active")
    //     check = true
    // }else{
    //     btn_drop.classList.remove("active")
    //     check = false
    // }
    console.log(btn_file.contains(e.target));
    })


function setBold() {
    document.execCommand("bold", false, null);
    btnBold.classList.toggle("overlay")
}

function setItalic() {
    document.execCommand("italic", false, null);
    btnItalic.classList.toggle("overlay")
}
function setUnderline() {
    document.execCommand("underline", false, null);
    btnUnderline.classList.toggle("overlay")
}
inputTypeColor.addEventListener("input", () => {
    document.execCommand("foreColor", false, inputTypeColor.value);
});

btnBold.addEventListener("click", setBold);
btnItalic.addEventListener("click", setItalic);
btnUnderline.addEventListener("click", setUnderline);



inputContent.addEventListener("input",function() {
    if (
        inputContent.innerText.length === 0 ||
        inputContent.innerText === "\n" ||
        inputContent.innerText.trim() === ""
    ) {
        document.querySelector(".index-char").innerText = "Số ký tự: 0";
        document.querySelector(".index-word").innerText = "Số từ: 0";
    }else{
        var cleanText = inputContent.innerText.replace(/\s+/g, " ");
        const countWords = cleanText.trim().split(" ").length;
        const countCharacters = inputContent.innerText.trim().length;
        document.querySelector(".index-word").innerText = `Số ký tự: ${countWords}`;
        document.querySelector(".index-char").innerText = ` Số từ: ${countCharacters}`;
    }

})

newBtn.addEventListener("click",function() {
    inputContent.innerText = "";
    document.querySelector(".index-char").innerText = "Số ký tự: 0";
    document.querySelector(".index-word").innerText = "Số từ: 0";
    document.querySelector(`input[type="text"]`).value = "untitled";
    btn_drop.classList.remove("active")
    check = false
})



window.addEventListener("load", function() {
    inputContent.focus()
    })