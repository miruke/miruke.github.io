import { Canvg } from "https://cdn.skypack.dev/canvg@^4.0.0";

const drawChord = async (chordName) => {
  let v = window.canvgInst;
  v && v.stop();

  const chord = Chordify.get(chordName),
    entryName = Chordify.getEntry(chord),
    displayName = Chordify.getDisplay(chord);

  const canvas = document.querySelector("canvas"),
    ctx = canvas.getContext("2d"),
    url = `./svg/${window.theme}/${encodeURIComponent(entryName)}.svg`,
    offsetY = 50,
    fontSize = 30,
    bgColor = theme === "dark" ? "black" : "white",
    fgColor = theme === "dark" ? "white" : "black",
    w = 300,
    h = 300 + offsetY;

  console.log(url);
  v = await Canvg.from(ctx, url, { offsetY: offsetY });
  window.canvgInst = v;
  v.resize(w, h);
  v.start();

  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, w, offsetY);
  ctx.fillStyle = fgColor;
  ctx.font = `${fontSize}px chordfont`;
  ctx.textAlign = "center";
  ctx.fillText(displayName, w / 2, offsetY);

  const img = document.getElementById("chord-img-L");
  img.src = canvas.toDataURL("image/png");
  img.style.width = w + "px";
  img.style.height = h + "px";
};

window.onload = async () => {
  const theme = "dark",
    chordName = "Em";
  window.theme = theme;
  drawChord(chordName);
};

window.onbeforeunload = () => {
  window.canvgInst.stop();
};

window.onhashchange = () => {
  const entry = (window.location.hash || "").replace(/^#/, ""),
    chord = Chordify.getByEntry(entry);
  console.log("Going to: ", entry, chord);
  if (!chord) return;
  drawChord(chord.name, theme);
};
