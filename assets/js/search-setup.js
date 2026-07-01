// 검색 버튼(onclick="openSearchModal()")에서 참조하므로 가장 먼저 전역에 노출한다.
// (아래 테마 계산이 실패하거나 스크립트 로드 순서가 바뀌어도 버튼은 항상 동작하도록)
window.openSearchModal = () => {
  // collapse navbarNav if expanded on mobile
  const $navbarNav = $("#navbarNav");
  if ($navbarNav.hasClass("show")) {
    $navbarNav.collapse("hide");
  }
  document.querySelector("ninja-keys").open();
};

// ninja-keys 테마 동기화. determineComputedTheme(theme.js)가 아직 로드되지 않았을
// 수 있으므로 방어적으로 처리한다.
try {
  const ninjaKeys = document.querySelector("ninja-keys");
  if (ninjaKeys && typeof determineComputedTheme === "function") {
    ninjaKeys.classList.toggle("dark", determineComputedTheme() === "dark");
  }
} catch (e) {
  /* 테마 동기화 실패는 무시 (버튼 동작에는 영향 없음) */
}
