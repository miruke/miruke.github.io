import { Canvg } from "https://cdn.skypack.dev/canvg@^4.0.0";

const defaultChordName = "Em",
  getDefaultChord = () => Chordify.getByName(defaultChordName);

const drawChord = async (chord) => {
  window.canvgInst && window.canvgInst.stop();

  chord = chord || getDefaultChord();
  const canvas = document.querySelector("canvas"),
    ctx = canvas.getContext("2d"),
    chordCanvas = $("#chord-canvas"),
    w = chordCanvas.width(),
    h = chordCanvas.height(),
    offsetY = parseInt(chordCanvas.css("padding-top")),
    font = chordCanvas.css("font"),
    textAlign = chordCanvas.css("text-align"),
    bgColor = chordCanvas.css("background-color"),
    fgColor = chordCanvas.css("color"),
    { entry, display } = Chordify.escape(chord),
    url = `./svg/${window.theme}/${entry}.svg`;

  console.log("URL =>", url, w, h, offsetY);
  const v = await Canvg.from(ctx, url, { offsetY: offsetY });
  window.canvgInst = v;
  v.resize(w, h);
  v.start();

  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, w, offsetY);
  ctx.fillStyle = fgColor;
  ctx.font = font;
  ctx.textAlign = textAlign;
  ctx.fillText(display, w / 2, offsetY);

  $("#chord-img").attr("src", canvas.toDataURL("image/png"));
};

window.onload = async () => {
  window.theme = "dark";
  drawChord();
};

window.onbeforeunload = () => {
  window.canvgInst.stop();
};

window.onhashchange = () => {
  const entry = (window.location.hash || "").replace(/^#/, ""),
    chord = Chordify.getByEntry(entry) || getDefaultChord();
  console.log("Going to: ", entry, chord, window.location.hash);
  if (!chord) return;
  drawChord(chord);
};
