const theme = {
  defaultFontSize: "1.6rem", // 페이지마다 붙일 기본 폰트 사이즈

  primaryText: "rgb(38, 38, 38)", // 사용자 ID, 본문, 메뉴 버튼 
  secondaryText: "rgb(142, 142, 142)", // 시간, 이름
  tertiaryText: "rgb(199, 199, 199)", // footer, 모달 메뉴 구분선
  buttonColor: "#b3dbff", // 팔로우 버튼 - 비활성화 blue-2
  buttonOnColor: "#0095f6", // 팔로우 버튼 - 활성화 blue-5
  errorColor: "rgb(237, 73, 86)", // error 컬러(red) --ig-error-or-destructive
  
  primaryBackground: "rgb(255, 255, 255)", // article 배경
  elevatedSeparator: "rgb(219, 219, 219)", // article border

  modalBackground: "rgba(0, 0, 0, 0.65)", // modal, login 배경 // --overlay-alpha-80
  
  postWidth: "60rem", // 게시물 가로 길이
  articlePadding: "0.8rem 1rem 0.8rem 0.5rem", // 게시물 패딩
  sidebarPadding: "1rem 0", // 사이드바 패딩
  fontBold: "600",
  commentInputWidth: "54rem", // 댓글 입력창 가로 길이

  // 모달
  borderRadius: "3%", // 모달창 border-radius
  modalWidth: "40rem", // 모달창 가로 길이
  modalRowHeight: "5rem", // 모달창 세로 길이
  modalPadding: "2rem", // 모달창 패딩
  modalHeight: "70rem", // 회원가입 세로 길이
}

export default theme;