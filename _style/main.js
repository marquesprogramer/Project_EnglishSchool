$(function(){
    $('.main-header-content-menu-mobile-icon').on('click', function(){
        $('.main-header-content-menu-mobile-sub').toggleClass('ds-nome');
        $(this).toggleClass('main-header-content-menu-mobile-icon-active');
    });
});