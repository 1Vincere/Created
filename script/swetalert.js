let copyBtn = document.getElementById('copybtn');
copyBtn.addEventListener('click', function () {
  swal({
    title: 'Copy!',
    icon: 'success',
    buttons: false,
  });
});
