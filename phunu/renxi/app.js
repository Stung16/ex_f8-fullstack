var boxgift = document.querySelector('.box-gift')
var Close = document.querySelector('.fa-xmark')
var boxContent = document.querySelector('.box-content')
var content =document.querySelector('.content')

boxgift.onclick = function(){
    boxgift.classList.toggle('active')
    boxContent.classList.add('active')
}
content.onclick = function(){
    boxContent.classList.add('active')
}
Close.onclick = function(){
    boxContent.classList.remove('active')
}

// document.getElementById('playButton').addEventListener('click', function() {
//     var audio = document.getElementById('myAudio');
//     audio.play();
// });
document.addEventListener('DOMContentLoaded', function() {
    var hiddenDiv = document.getElementById('hiddenDiv');
    var audio = document.getElementById('myAudio');

    // Bắt sự kiện click trên toàn bộ trang
    document.addEventListener('click', function() {
        // Kiểm tra xem âm thanh đã được phát chưa
        if (audio.paused) {
            // Phát âm thanh
            audio.play();
            // Ẩn div sau khi âm thanh đã được phát
            hiddenDiv.style.display = 'none';
        }
    });
});