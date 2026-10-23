// Sends the contact form to Web3Forms in the background and shows the result inline.
// Messages come from the form's data-* attributes so the same script serves every language.
const form = document.querySelector('.contact-form');

if (form) {
  const status = form.querySelector('.form-status');
  const button = form.querySelector('button[type="submit"]');

  const showStatus = (text, isError) => {
    status.textContent = text;
    status.classList.toggle('is-error', isError);
    status.hidden = false;
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    button.disabled = true;
    showStatus(form.dataset.sending, false);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      const result = await response.json();
      if (!result.success) throw new Error(result.message);

      status.classList.add('is-success');
      showStatus(form.dataset.success, false);
      form.replaceChildren(status);
    } catch {
      showStatus(form.dataset.error, true);
      button.disabled = false;
    }
  });
}
