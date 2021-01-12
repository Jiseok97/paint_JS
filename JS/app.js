const canvas = document.getElementById("jsCanvas");

// mouse가 mousedown 되었을 때, ture 값 적용
let painting = false;

function stopPainting() {
  painting = false;
}

// 좌표(x, y) 값만 가져오기 위해 offsetX/Y 변수 생성
function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
}

function onMouseDown(event) {
  painting = ture;
}

// 다시 mouseup하면 false 값 적용
function onMouseUp(event) {
  stopPainting();
}

// mousedown은 클릭했을 때 발생하는 이벤트
if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", onMouseUp);
  canvas.addEventListener("mouseleave", stopPainting);
}
