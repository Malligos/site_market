(function(){
    const openningBtn = document.querySelector('.sidebar__hamburger');

    const closingBtn = document.querySelector('.sidebar__close');
    
    const sidebar = document.querySelector('.sidebar');
    
    
    openningBtn.addEventListener("click", function() {
        sidebar.classList.add('sidebar--opend');
    });
    
    closingBtn.addEventListener("click", function() {
        sidebar.classList.remove('sidebar--opend');
    });
}());

