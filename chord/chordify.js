$(document).ready(function () {
  const last = { scale: " ", accidental: " " };
  Chordify.chords.forEach((chord, i) => {
    const getAccidental = (name) => {
      const accidental = chord.name.charAt(1) || " ";
      if ("#|b".includes(accidental)) return accidental;
      return " ";
    };
    const text = chord.display || chord.name,
      url = Chordify.getUrl(chord),
      scale = chord.name.charAt(0),
      accidental = getAccidental(chord.name),
      scaleChange = last.scale !== scale,
      accidentalChange = last.accidental !== accidental;

    last.scale = scale;
    last.accidental = accidental;

    $("#links")
      .append(scaleChange ? "<br/><br/>" : " ")
      .append(
        !accidentalChange
          ? " "
          : (scaleChange ? "" : "<br/>") +
              ("#|b".includes(accidental) ? "&nbsp;&nbsp;" : "")
      )
      .append($("<a>").attr("href", url).html(text));
    console.log(text, last, scaleChange, accidentalChange);
  });
});