import { Canvg } from "https://cdn.skypack.dev/canvg@^4.0.0";

const defaultChordName = "Em",
  getDefaultChord = () => Chordify.getByName(defaultChordName);

const drawChord = async (chord) => {
  window.canvgInst && window.canvgInst.stop();

  chord = chord || getDefaultChord();
  const canvas = document.querySelector("canvas"),
    ctx = canvas.getContext("2d"),
    offsetY = 50,
    fontSize = 30,
    bgColor = theme === "dark" ? "black" : "white",
    fgColor = theme === "dark" ? "white" : "black",
    w = 300,
    h = 300 + offsetY,
    { entry, display } = Chordify.escape(chord),
    url = `./svg/${window.theme}/${entry}.svg`;

  console.log("URL =>", url);
  const v = await Canvg.from(ctx, url, { offsetY: offsetY });
  window.canvgInst = v;
  v.resize(w, h);
  v.start();

  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, w, offsetY);
  ctx.fillStyle = fgColor;
  ctx.font = `${fontSize}px chordfont`;
  ctx.textAlign = "center";
  ctx.fillText(display, w / 2, offsetY);

  const img = document.getElementById("chord-img-L");
  img.src = canvas.toDataURL("image/png");
  img.style.width = w + "px";
  img.style.height = h + "px";
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
  console.log("Going to: ", entry, chord);
  if (!chord) return;
  drawChord(chord);
};
