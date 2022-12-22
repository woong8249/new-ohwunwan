const hideInvalid = () => {
  document.addEventListener('invalid', (function () {
    return function (e) {
      e.preventDefault();
    };
  })(), true);
}

export default hideInvalid