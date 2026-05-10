const canvas = document.getElementById("noise");
const ctx = canvas.getContext("2d");

function resize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resize();
window.addEventListener("resize", resize);

function drawNoise(){
  const imageData = ctx.createImageData(
    canvas.width,
    canvas.height
  );

  const buffer = imageData.data;

  for(let i = 0; i < buffer.length; i += 4){
    const value = Math.random() * 255;

    // RGBを少しズラしてグリッチ感
    buffer[i] = value + Math.random() * 40;
    buffer[i + 1] = value;
    buffer[i + 2] = value + Math.random() * 80;
    buffer[i + 3] = 45;
  }

  ctx.putImageData(imageData, 0, 0);
  requestAnimationFrame(drawNoise);
}

drawNoise();