const drawChord = ({ name, string, finger }) => {
  console.log(">");
  const canvas = document.getElementById("mini-chord"),
    ctx = canvas.getContext("2d"),
    width = $(canvas).width(),
    height = $(canvas).height(),
    cols = 5,
    rows = 4,
    W = width * 0.8,
    w = W / cols,
    hwRatio = 1.3,
    h = w * hwRatio,
    x = (width - W) / 2,
    y = (height - h * rows) / 2;

  console.log(">>");
  canvas.width = width;
  canvas.height = height;

  console.log(">>>");
  const geom = {
    W,
    cols,
    rows,
    w,
    h,
    x,
    y,
    color: $(canvas).css("color"),
    fontFamily: $(canvas).css("font-family"),
  };
  geom.y += h;
  console.log("->", geom);

  drawGrid(ctx, geom);
  drawTitle(ctx, geom, name);
  drawDots(ctx, geom, string);
};

const drawGrid = (ctx, geom) => {
  const { rows, cols, x, y, w, W, h, color } = geom;
  console.log("=>", geom);
  ctx.strokeStyle = color;
  ctx.lineWidth = w / 10;
  ctx.lineCap = "square";

  for (let row = 0; row <= rows; row++) {
    ctx.moveTo(x, y + row * h);
    ctx.lineTo(x + W, y + row * h);
  }

  for (let col = 0; col <= cols; col++) {
    ctx.moveTo(x + w * col, y);
    ctx.lineTo(x + w * col, y + h * rows);
  }

  ctx.stroke();
};

const drawTitle = (ctx, geom, name) => {
  const fontSize = geom.w,
    y = geom.y - geom.h;
  ctx.font = `${fontSize}px ${geom.fontFamily}`; // Set the font size and type
  ctx.fillStyle = geom.color;

  const textWidth = ctx.measureText(name).width;
  // console.log("-> title", name);
  ctx.fillText(name, geom.x + (geom.W - textWidth) / 2, y - fontSize / 2);
};

const drawDots = (ctx, geom, string) => {
  const dots = [...string]; // e.g. x02210
  const x = geom.x,
    y = geom.y + geom.h / 2,
    dotRatio = 0.45,
    radius = geom.w * dotRatio;

  ctx.fillStyle = geom.color;
  dots.forEach((dot, stringIndex) => {
    if (dot !== "x" && dot !== "0") {
      const fret = parseInt(dot);
      ctx.beginPath();
      ctx.arc(
        x + stringIndex * geom.w,
        y + (fret - 1) * geom.h,
        radius,
        0,
        2 * Math.PI
      );
      ctx.fill();
      // ctx.endPath();
      console.log("==", dot, fret, stringIndex);
    }
  });
  // ctx.fill();
};

$(document).ready(function () {
  drawChord(chords[2]);
});
