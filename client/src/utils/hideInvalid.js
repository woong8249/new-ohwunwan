// form에 뜨는 pop-up 없애는 함수
const hideInvalid = () => {
  document.addEventListener('invalid', (function () {
    return function (e) {
      e.preventDefault();
    };
  })(), true);
}

export default hideInvalid