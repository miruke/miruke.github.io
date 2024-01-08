import { Canvg } from "https://cdn.skypack.dev/canvg@^4.0.0";

window.onload = async () => {
  const theme = "dark";
  const canvas = document.querySelector("canvas"),
    ctx = canvas.getContext("2d"),
    url = `./svg/${theme}/E_min.svg`,
    v = await Canvg.from(ctx, url),
    w = 300,
    h = 300;
  v.resize(w, h);
  v.start();

  document.getElementById("chord-img-L").src = canvas.toDataURL("image/png");

  window.onbeforeunload = () => {
    v.stop();
  };
};
