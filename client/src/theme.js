const theme = {
  defaultFontSize: "1.6rem", // 페이지마다 붙일 기본 폰트 사이즈

  primaryText: "rgb(38, 38, 38)", // 사용자 ID, 본문, 메뉴 버튼 
  secondaryText: "rgb(142, 142, 142)", // 시간, 이름
  tertiaryText: "rgb(199, 199, 199)", // footer, 모달 메뉴 구분선
  buttonColor: "#b3dbff", // 팔로우 버튼 - 비활성화 blue-2
  buttonSubmitColor: "#47afff", // 로그인 페이지 - submit 버튼 blue-4
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

  // 모달 로그인
  modalLoginHeight: "40rem", // 모달 로그인 세로 길이
  modalLoginSubject: "4rem", // 모달 로그인 제목 크기
  modalLoginSubjectPadding: "3rem", // 모달 로그인 제목 패딩
  modalLoginInputWidth: "30rem", // 모달 로그인 인풋 가로 길이
  modalLoginInputPadding: "1rem", // 모달 로그인 인풋 패딩
  modalLoginInputMargin: "0.5rem", // 모달 로그인 인풋 마진

  // 유효성 아이콘
  invalidIconWidth: "2rem", // 유효성 아이콘 가로, 세로 길이
  invalidIconMargin: "0.5rem", // 유효성 아이콘 오른쪽 마진
}

export default theme;