let show = true 
const menucontent = document.querySelector('.content')
const menutoggle = menucontent.querySelector ('.menu-toggle')

menutoggle.addEventListener('click',() => {
    menucontent.classList.toggle('on', show)
    show =!show
})
