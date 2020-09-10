//calculate the nav heigh
let navbarHeight = $('.navbar').outerHeight();

$('.slide-section').click(function(e){
    let linkHref = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(linkHref).offset().top - navbarHeight
    });
    e.preventDefault();
});