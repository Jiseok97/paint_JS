const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

ctx.strockStyle = "#2c2c2c";
ctx.lineWidth = 2.5; // lineWidth는 그려지는 linewidth를 말함

// mouse가 mousedown 되었을 때, ture 값 적용
let painting = false;

// mouseup && mouseleave 일 때
function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

// 좌표(x, y) 값만 가져오기 위해 offsetX/Y 변수 생성
function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    // painting = True
    ctx.beginPath(); // path를 만들기 위해 선의 시작점을 생성
    ctx.moveTo(x, y); // 그 시작점을 x,y로 이동시킴
  } else {
    ctx.lineTo(x, y); // lineTo는 첫 시작점과 마지막 점을 연결하는 선을 생성
    ctx.strock(); // 현재의 stroke style 로 현재의 sub-path에 획을 긋는다
  }
}

function onMouseDown(event) {
  painting = ture;
}

// mousedown은 클릭했을 때 발생하는 이벤트
if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}
