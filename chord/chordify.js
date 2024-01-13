$(document).ready(function () {
  const last = { scale: " ", accidental: " " };

  const isAppleMobile = ((a) => /ip(hone|ad)/i.test(a))(
    navigator.userAgent || navigator.vendor || window.opera
  );

  $("button.toggle").on("click", () => {
    const dark = (window.theme || "dark") === "dark";
    $(this)
      .toggleClass("active", dark)
      .find(".fa-regular")
      .toggleClass("fa-moon", !dark)
      .toggleClass("fa-sun", dark);
    $("body").toggleClass("light", dark);

    window.theme = dark ? "light" : "dark";

    window.onhashchange();
    console.log("toggle active", $(this));
  });

  $("#copy-button")
    .toggle(!isAppleMobile)
    .on("click", () => {
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

  $(".chord-sel").on("click", (e) => {
    const button = $(e.target),
      entry = button.attr("data-entry"),
      chords = Chordify.getByScale(entry),
      list = $("#chord-list").empty();
    // Add chord selection button to the list
    for (const chord of chords) {
      const { display } = Chordify.escape(chord);
      list.append(
        $("<a></a>")
          .attr({
            class: "chord-btn",
            href: `#${chord.entry}`,
          })
          .text(display)
      );
    }
    // Select default chord
    const dbg = list.find(">a:first-child");
    list.find(">a:first-child")[0].click();
    console.log(" =>>", entry, dbg);
    $("#chord-selector").find(".chord-sel").not(button).removeClass("active");
    button.addClass("active");
  });

  // Add list for download
  Chordify.chords.forEach((chord, i) => {
    return;
    const getAccidental = (name) => {
      const accidental = chord.name.charAt(1) || " ";
      if ("#|b".includes(accidental)) return accidental;
      return " ";
    };

    // When enabled, the links work as SVG download links
    // Otherwise will change the displayed chord
    const downloadSvg = false;

    const text = chord.display || chord.name,
      url = downloadSvg ? Chordify.getUrl(chord) : `#${chord.entry}`,
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
  });
});
