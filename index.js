
// Redirecting to whatsapp for booking flights
const redirectFunction = function(e){
    window.location.href= 'https://wa.me/+254790721338'
}

const bookButton = document.querySelector("#bookbutton")
bookButton.addEventListener("click", redirectFunction)



//  Handling the form submission

const acceptForm = function(e){
    e.preventDefault()
    alert("We shall be in touch with you shortly ")
    e.target.reset()
}

const submittedForm = document.querySelector(".contactform")
submittedForm.addEventListener("submit", acceptForm)
