if(document.getElementById('burger')) {
    const btn = document.querySelector('.burger-menu');
    const menu = document.querySelector('.mobile-menu');
    const switchKey = document.querySelector('.dark-key__container');

        btn.onclick = function() {
        menu.classList.toggle("mobile-menu--active");
        switchKey.classList.toggle('key-hide');
    }
}