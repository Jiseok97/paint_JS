const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");

// 픽셀 사이즈를 줘야 그릴 수 있음
canvas.width = 700;
canvas.height = 700;

ctx.strockStyle = "#2c2c2c"; // 그리는 색이 삽입
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
  // path를 만들고 거기에 색을 채우는 것!!
  if (!painting) {
    // painting = True
    // 마우스 클릭을 안했을 때, 마우스의 path를 계속 만듬
    ctx.beginPath(); // path를 만들기 위해 선의 시작점을 생성
    ctx.moveTo(x, y); // 그 시작점을 x,y로 이동시킴
  } else {
    // 마우스를 클릭했을 때, line을 생성
    // moveTo -> lineTo 까지
    ctx.lineTo(x, y); // lineTo는 첫 시작점과 마지막 점을 연결하는 선을 생성
    ctx.stroke(); // 현재의 stroke style 로 현재의 sub-path에 획을 긋는다
  }
}

function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  // 색 값을 여기서 건네줌
  ctx.strokeStyle = color;
}

// mousedown은 클릭했을 때 발생하는 이벤트
if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}

// Array.from 메소드는 object로부터 array를 만듬
// 여기서 color은 각 배열의 원소 변수
Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColorClick)
);
