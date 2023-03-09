document.body.onclick = (event) => {
  const elem = event.target;
  if (elem.classList.contains('footerbtn')) {
    console.log(elem);
    navigator.clipboard.writeText(elem.innerHTML);
  }
};
