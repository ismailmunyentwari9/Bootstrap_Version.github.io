const navButton2 = document.querySelector('.nav-button2');
const navMenu = document.querySelector('.ul-nav');

navButton2.addEventListener('click', () => {
  navButton2.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('ul.ul-nav > li').forEach((n) => n.addEventListener('click', () => {
  navButton2.classList.remove('active');
  navMenu.classList.remove('active');
}));

const email = document.querySelector('#E_mail');
const error = document.querySelector('#Feed_back');
const form = document.querySelector('#Form');
const emailValidation = (input) => {
  if (input === input.toLowerCase()) {
    return true;
  }
  return false;
};
form.addEventListener('submit', (event) => {
  error.innerHTML = '';
  if (emailValidation(email.value)) {
    error.innerHTML = '';
  } else {
    event.preventDefault();
    error.innerHTML = 'Oh dear! Please Change Your E_mail to lower case! ☺️☺️';
  }
});

const localData = document.querySelectorAll('.inputs');
const localStoreData = {
  name: '',
  email: '',
  message: '',
};
localData.forEach((input) => {
  input.addEventListener('input', () => {
    localStoreData[input.name] = input.value;
    localStoreData[input.email] = input.value;
    localStoreData[input.message] = input.value;
    localStorage.setItem('information', JSON.stringify(localStoreData));
  });
});
const informationStored = JSON.parse(localStorage.getItem('information'));
if (informationStored) {
  localData.forEach((element) => {
    element.value = informationStored[element.name];
  });
}
