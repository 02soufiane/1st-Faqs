let btns = document.querySelectorAll('.fa-solid.fa-plus');

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    const text = btn.parentElement.nextElementSibling;

    if (text.style.display === 'none' || text.style.display === '') {
      text.style.display = 'block';
      btn.classList.remove('fa-solid', 'fa-plus');
      btn.classList.add('fa-solid', 'fa-minus');
    } else {
      text.style.display = 'none';
      btn.classList.remove('fa-solid', 'fa-minus');
      btn.classList.add('fa-solid', 'fa-plus');
    }
  });
});
