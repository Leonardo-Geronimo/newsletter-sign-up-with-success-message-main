const registroDeInput = document.querySelectorAll(".input")
const clickBotao = document.querySelector('.submit')
const cardOne = document.querySelector('.container')
const cardTwo = document.querySelector('.card-2')
const success = document.querySelector('.user-email')
const err = document.getElementById('error');
const error = document.getElementById('email');

clickBotao.addEventListener('click', (e)=> {
    e.preventDefault()
    const emailInput = document.querySelector("#email");
    const email = emailInput.value.trim();

    registroDeInput.forEach((input) => {
    if (validateEmail(email)) {
        cardOne.classList.add("hide");
        cardTwo.classList.remove("hide");
        success.innerText = input.value;
    } else {
        err.innerText = "Valid Email Required";
        input.classList.add("error")
    }
    })
})

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
 }