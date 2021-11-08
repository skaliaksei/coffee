if(document.getElementById('burger')) {
    const btn = document.querySelector('.burger-menu');
    const menu = document.querySelector('.mobile-menu');

    btn.onclick = function() {
	menu.classList.toggle("mobile-menu--active");
}
}


