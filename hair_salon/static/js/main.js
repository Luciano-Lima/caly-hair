const current = document.getElementById('current')
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.5;

// Setting opacity to first img
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
    //Reset img opacity
    imgs.forEach(img => (img.style.opacity = 1))
    //change current img 
    current.src = e.target.src
    // Add fade-in class
    current.classList.add('fade-in');
    //Remove fade-in class setting timeout
    setTimeout(()=> current.classList.remove('fade-in'),500);
    //Change img opacticy setting to the variable opacity
    e.target.style.opacity = opacity;
}


    


//calculate the nav heigh
let navbarHeight = $('.navbar').outerHeight();

$('.slide-section').click(function(e){
    let linkHref = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(linkHref).offset().top - navbarHeight
    });
    e.preventDefault();
});