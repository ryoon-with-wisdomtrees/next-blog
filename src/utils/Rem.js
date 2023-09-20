// Utils.js

// px 값을 rem 값으로 변환하는 함수
export function pxToRem(pxValue, baseFontSize = 16) {
  return `${pxValue / baseFontSize}rem`;
}
