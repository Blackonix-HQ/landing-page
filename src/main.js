import './style.css';

const form = document.querySelector('#contact-form');
const status = document.querySelector('#form-status');
const destination = 'support@blackonix.org';
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const get = (key) => String(data.get(key) || '').trim();
  const body = [
    `Name: ${get('name')}`,
    `Company: ${get('company')}`,
    `Email: ${get('email')}`,
    ...(get('phone') ? [`Phone: ${get('phone')}`] : []),
    '',
    'The work we keep repeating:',
    get('message'),
    '',
    'I would like to discuss a free test with an old bid package.',
  ].join('\n');
  const subject = `Bid package test: ${get('company')}`;
  const mailto = `mailto:${destination}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
  status.replaceChildren();
  status.append('Your email app should open with a draft. If it doesn’t, email ');
  const fallback = document.createElement('a');
  fallback.href = `mailto:${destination}`;
  fallback.textContent = destination;
  status.append(fallback, ' directly. Nothing has been sent from this page.');
});

// Enable submission only after the local draft handler is installed.
form.querySelector('[type=submit]').disabled = false;

document.querySelector('#year').textContent = String(new Date().getFullYear());
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const specimen = document.querySelector('.specimen');
  const observer = new IntersectionObserver((entries) => {
    if (entries.some((entry) => entry.isIntersecting)) {
      specimen.classList.add('reveal');
      observer.disconnect();
    }
  }, { threshold: 0.2 });
  observer.observe(specimen);
}
