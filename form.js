let x = document.getElementById("login");
let y = document.getElementById("register");
let z = document.getElementById("btn");



function register() {
    x.style.left = "-400px";
    y.style.left = "0px";
    z.style.left = "50%";
}

function login() {
    x.style.left = "0px";
    y.style.left = "450px";
    z.style.left = "0px";
}


const form = document.querySelector('user-form');
const submitButton = document.getElementById('submit-btn');

let timeout = null;

let errors = {
  email: true,
  password: true,
};

const mailformatRegex = /^[^@]+@\w+(\.\w+)+\w$/;

document.querySelectorAll('.form-box').forEach((box) => {
  const boxInput = box.querySelector('input');

  boxInput.addEventListener('keydown', (event) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      console.log(`Input ${boxInput.name} value: `, boxInput.value);

      validation(box, boxInput);
    }, 300);
  });
});

validation = (box, boxInput) => {
  if (boxInput.value == '') {
    showError(true, box, boxInput);
  } else {
    showError(false, box, boxInput);
  }

  if (boxInput.name == 'email') {
    if (!boxInput.value.match(mailformatRegex)) {
      showError(true, box, boxInput);
    } else {
      showError(false, box, boxInput);
    }
  }

  if (boxInput.name == 'password') {
    if (boxInput.value.length <= 6) {
      showError(true, box, boxInput);
    } else {
      showError(false, box, boxInput);
    }
  }

  submitController();
};

showError = (check, box, boxInput) => {
  if (check) {
    box.classList.remove('form-success');
    box.classList.add('form-error');
    errors[boxInput.name] = true;
  } else {
    box.classList.remove('form-error');
    box.classList.add('form-success');
    errors[boxInput.name] = false;
  }
};

submitController = () => {
  console.log(errors);
  if (errors.email || errors.password) {
    submitButton.toggleAttribute('disabled', true);
  } else {
    submitButton.toggleAttribute('disabled', false);
  }
};


