//calculate the nav heigh
let navbarHeight = $('.navbar').outerHeight();

$('.slide-section').click(function(e){
    let linkHref = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(linkHref).offset().top - navbarHeight
    });
    e.preventDefault();
});

//Gallery 
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


//Send Email
function sendMail(name, email, message) {
    emailjs.send("gmail", "calyhair", {
        "from_name": name.value,
        "from_email": email.value,
        "message": message.value
    })
    .then(
        function(response) {
            let form = document.getElementById('contactForm')
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    contactForm.reset();
    return false;  // To block from loading a new page
};
    
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const msg = document.getElementById('msg');
const sendAction = document.getElementById('sendMessageButton');

sendAction.addEventListener('click', function (e) {
	e.preventDefault();
	sendIt();
});

function sendIt(e) {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();
    const mailFormat = /([a-zA-Z0-9]+)([\_\.\-{1}])?([a-zA-Z0-9]+)\@([a-zA-Z0-9]+)([\.])([a-zA-Z\.]+)/g;
    
    if(nameValue === '' || emailValue === '' || messageValue === '') {
        // alert('Please fill in the fields')
        msg.className = 'alert alert-danger';
        msg.innerHTML = 'Please fill in all fields';
        return false;

    } else {
        if(nameValue.length < 3){
            msg.className = 'alert alert-danger';
            msg.innerHTML = 'Name must consist of at least three characters.';
            return false;
        } else {
            if (!emailValue.match(mailFormat)) {
                msg.className = 'alert alert-danger';
                msg.innerHTML = 'Incorrect email format.';
                return false;
            } else {
                if(messageValue.length < 10) {
                    msg.className = 'alert alert-danger';
                    msg.innerHTML = 'Message has to be at least 10 characters long.';
                    return false;
                }else {
                    msg.className = 'alert alert-success';
                    msg.innerHTML = nameValue + ' we have received your contact. Thanks!';
                }
            }
        }
        sendMail(nameValue, emailValue, messageValue);
    }
}
