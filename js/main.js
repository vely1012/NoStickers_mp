document.addEventListener("DOMContentLoaded", function(event) {
    // функция гамбургера на мобильном
    document.getElementById("gamburger").addEventListener('click', phoneMenu)

    function phoneMenu(e) {
        if (e.target.classList.contains('active')) {
            e.target.classList.remove('active');
            document.querySelector('body').classList.remove('menu');
        }
        else {
            e.target.classList.add('active');
            document.querySelector('body').classList.add('menu');
        }
    }
});