const form = document.querySelector('.auth-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const formElements = form.querySelectorAll('.auth-form__input');

  let isValid = true;
  for (let element of formElements) {
    hideErrors(element);

    if (!requiredValidation(element.value)) {
      isValid = false;

      showErrors(element);
      setEventHandler(element);
    }
  }

  if (!isValid) {
    return;
  }

  const passwordInputs = form.querySelectorAll('.auth-form__input_password');
  if (passwordInputs.length === 2 && passwordInputs[0].value === passwordInputs[1].value) {
    showModalWindow(true);
    return;
  }

  showModalWindow(false);
});

function setEventHandler(element) {
  element.addEventListener('input', event => {
    if (requiredValidation(element.value)) {
      hideErrors(element);
      return;
    }

    showErrors(element);
  });
}

function showModalWindow(isSuccess) {
  const modal = document.querySelector('.modal');
  modal.style.display = 'flex';

  const modalText = document.querySelector('.modal-content__text');
  const passwordInputs = form.querySelectorAll('.auth-form__input_password');

  if (isSuccess) {
    modalText.textContent = 'Данные успешно отправлены!';
    modalText.classList.remove('error-text');

    passwordInputs.forEach(element => hideErrors(element));
  } else {
    modalText.textContent = 'Пароли не совпадают!';
    modalText.classList.add('error-text');

    passwordInputs.forEach(element => showErrors(element));
  }

  const closeSpan = document.querySelector('.modal-content__close');
  closeSpan.onclick = function () {
    modal.style.display = 'none';
  };
}

function hideErrors(element) {
  element.classList.remove('error');
}

function showErrors(element) {
  element.classList.add('error');
}

function requiredValidation(value) {
  return value.trim().length !== 0;
}
