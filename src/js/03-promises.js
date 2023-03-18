import Notiflix from 'notiflix';

let form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const formInput = {
    delay: Number(form.delay.value),
    step: Number(form.step.value),
    amount: Number(form.amount.value),
  };
  for (let i = 1; i <= formInput.amount; i++) {
    createPromise(i, formInput.delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    formInput.delay += formInput.step;
  }
})

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const newPromise = new Promise(callback);

  function callback(resolve, reject) {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  }
  return newPromise;
}