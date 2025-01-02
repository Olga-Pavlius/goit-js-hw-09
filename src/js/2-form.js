const inputForm = document.querySelector('input');
inputForm.classList.add('input-form-email');
const textareaForm = document.querySelector('textarea');
textareaForm.classList.add('textarea-form-message');
const buttonForm = document.querySelector('button');
buttonForm.classList.add('btn-form');

const feedbackFormEl = document.querySelector('.feedback-form');

const formData = {
  email: '',
  message: '',
};
form.addEventListener(
  'focus',
  event => {
    if (event.target.tagName === 'INPUT') {
      event.target.placeholder = event.target.type;
    }
    if (event.target.tagName === 'TEXTAREA') {
      event.target.placeholder = event.target.type;
    }
  },
  true
);
form.addEventListener(
  'blur',
  event => {
    if (event.target.tagName === 'INPUT') {
      event.target.placeholder = '';
    }
    if (event.target.tagName === 'TEXTAREA') {
      event.target.placeholder = '';
    }
  },
  true
);
form.addEventListener('input', () => {
  formData.email = input.value;
  formData.message = textArea.value;

  try {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  } catch (error) {
    console.log(error);
  }
});
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
  }
  console.log(formData);
  input.value = '';
  textArea.value = '';
  formData.email = '';
  formData.message = '';
  localStorage.clear();
});
const getValue = () => {
  try {
    const formLS = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (formLS.email !== null || formLS.message !== null) {
      input.value = formLS.email;
      textArea.value = formLS.message;
      formData.email = formLS.email;
      formData.message = formLS.message;
    }
  } catch (error) {
    console.log(error);
  }
};
getValue();