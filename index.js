let formBtn = document.getElementById('close-form');
let form = document.querySelectorAll('.form');
let nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const emailList =[];
let formContainer =  document.querySelector('form-container');
let cart = document.createElement('div');
let main = document.querySelector('main');
let cartItems = 0;

const toggler = () => {
    formBtn.addEventListener('click', () => {
        form.classList.toggle('hide');
        if (formBtn.innerText === 'X'){
            formBtn.innerText = '+';
        } else if (formBtn.innerText !== 'X') {
            formBtn.innerText = 'X';
        }
    })
};

let validateForm = () => {
    if(nameInput.value === false && emailInput.value === false){
        nameInput.style.border = '2px solid red';
        emailInput.style.border = '2px solid red';
        alert('you must enter a name and an email address to subscribe!');
    } else if (nameInput.value === false) {
        alert('please enter a name to subscribe');
    } else if (emailInput.value === false) {
        alert('please enter an email address to subscribe')
    } else {
        emailList.push(nameInput.value, emailList.value);
        displayThankYou();
    }
};

form.addEventListener('submit', (function (event) {
    event.preventDefault();
    validateForm();
    }));

let displayThankYou = () => {
    formContainer.innerText = 'Thank you for subscribing!';
    setTimeout(function removeMessage () {
        formContainer.remove;
    }, 3000)
};

nameInput.addEventListener('change', (function (){
    nameInput.style.border = 'none';
}));

emailInput.addEventListener('change', (function (){
    emailInput.style.border = 'none';
}));

let addToCart =  () => {
    if (cartItems === 0){
        cartItems = 1;
        cart.setAttribute('.cart-display');
        cart.innerText = 'Your cart: 1 item';
        main.appendChild(cart);
    } else if (cartItems !== 0){
        cartItems = 2;
        cartItems.innerText = `Your cart: 2`
    }
};

