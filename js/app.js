const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

const lineWidth = document.getElementById("line-width");
const color = document.getElementById("color");

const colorOptions = Array.from(document.getElementsByClassName("color-option"));

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

ctx.lineWidth = lineWidth.value;
ctx.lineCap = "round";

let isPainting = false;

// 선 그리기
function onMove(event) {
    if(isPainting) {
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.moveTo(event.offsetX, event.offsetY);
}

function startPaintint() {
    isPainting = true;
}

function cancelPainting() {
    ctx.beginPath();
    isPainting = false;
}

// 선 굵기.
function onLineWidthChange(event) {
    ctx.lineWidth = event.target.value;
}

// 색 설정.
function onColorChange(event) {
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
}

// 색 팔레트.
function onColorClick(event) {
    const colorValue = event.target.dataset.color;
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    color.value = colorValue;
}

// 선 그리기.
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPaintint);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
// 선 굵기.
lineWidth.addEventListener("change", onLineWidthChange);
// 색 설정.
color.addEventListener("change", onColorChange);
// 색 팔레트.
colorOptions.forEach((color) => color.addEventListener("click", onColorClick));
 