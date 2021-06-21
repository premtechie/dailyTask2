const menu = document.querySelector('#hamburger')

const sidebar = document.querySelector('.sidebar');

const close = document.querySelector('.close')

menu.addEventListener('click',()=>{
    sidebar.classList.toggle('active')
})

close.addEventListener('click',()=>{
    sidebar.classList.remove('active')
})
