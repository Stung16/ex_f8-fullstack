var overlay = document.querySelector('.overlay')
var bodyForm =document.querySelector('.bodyForm')
var btn =document.querySelector('.btn')
var form_user = document.querySelector('.form-user')
var tab_register =document.querySelector('.tab-register')
var tab_login =document.querySelector('.tab-login')
var title_header=document.querySelector('.title-header')
var box_login=document.querySelector('.box-login')
var box_register=document.querySelector('.box-register')
var text_input =document.querySelector('.text-input')
var title =document.querySelector('.title')


var text_onblur = text_input.onblur = function(){
    title.innerHTML =`<p class ="warring_title ">Vui lòng nhập thông tin</p>`
}
var text_focus = text_input.onfocus = function(){
    title.innerHTML ='';
}

btn.addEventListener('click',function(){
    form_user.classList.add('active')
    overlay.classList.add('active')
    tab_login.classList.add('title-active')
    tab_register.classList.remove('title-active')
    box_login.classList.add('active')


})
overlay.addEventListener('click',function(){
    overlay.classList.remove('active')
    form_user.classList.remove('active')
    box_register.classList.remove('active')
    box_login.classList.remove('active')

})
tab_login.addEventListener('click',function(){
    tab_login.classList.add('title-active')
    tab_register.classList.remove('title-active')
    box_login.classList.add('active')
    box_register.classList.remove('active')
    if(tab_login.className ==='title-active'){
        if(text_focus){
            text_onblur();
        }

    }
})
tab_register.addEventListener('click',function(){
    tab_register.classList.add('title-active')
    tab_login.classList.remove('title-active')
    box_register.classList.add('active')
    box_login.classList.remove('active')
})


