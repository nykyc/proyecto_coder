window.onload = function() {  
    var btn_menu = document.querySelector('.btn_menu') 
    if (btn_menu) { 
        btn_menu.addEventListener('click', () => { 
            var menu_items = document.querySelector('#navegacion') 
            navegacion.classList.toggle('show')
        }) 
    } 
}