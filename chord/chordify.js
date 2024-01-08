$(document).ready(function () {
  const last = { scale: " ", accidental: " " };

  $("#copy-button").on("click", () => {
    const status = $("#status-text");
    status.text("Coping to clipboard...");
    $("#chord")[0].toBlob((blob) => {
      navigator.clipboard
        .write([
          new ClipboardItem(
            Object.defineProperty({}, blob.type, {
              value: blob,
              enumerable: true,
            })
          ),
        ])
        .then(
          () => {
            status
              .text("Copied to clipboard")
              .show()
              .delay(1000)
              .fadeOut("slow");
            console.log("Copied to clipboard");
          },
          (e) => {
            status.text(`Error: ${e}`);
          }
        );
    });
  });

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
