// Sends the contact form to Web3Forms in the background and shows the result inline.
// Messages come from the form's data-* attributes so the same script serves every language.
const form = document.querySelector('.contact-form');

if (form) {
  const status = form.querySelector('.form-status');
  const button = form.querySelector('button[type="submit"]');
  const phoneCode = form.querySelector('.phone-field select');
  const phone = form.querySelector('.phone-field input');

  // National digits only: separators and a leading trunk 0 (e.g. 0981…) are dropped.
  const phoneDigits = () => phone.value.replace(/\D/g, '').replace(/^0+/, '');

  // Each country option carries its digit count ("9" or "10-11"); the message comes from data-invalid.
  const checkPhone = () => {
    const [min, max = min] = phoneCode.selectedOptions[0].dataset.digits.split('-').map(Number);
    const count = phoneDigits().length;
    phone.setCustomValidity(count === 0 || (count >= min && count <= max) ? '' : phone.dataset.invalid);
  };

  if (phone) {
    phone.addEventListener('input', checkPhone);
    phoneCode.addEventListener('change', checkPhone);
  }

  const showStatus = (text, isError) => {
    status.textContent = text;
    status.classList.toggle('is-error', isError);
    status.hidden = false;
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    button.disabled = true;
    showStatus(form.dataset.sending, false);

    const data = new FormData(form);
    // "Otro" has no code: the visitor typed it as part of the number.
    if (phone) data.set(phone.name, phoneCode.value ? `${phoneCode.value} ${phoneDigits()}` : `+${phoneDigits()}`);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
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
