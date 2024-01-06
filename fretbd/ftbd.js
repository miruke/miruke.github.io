const noteMap = {
  n10: "E",
  n11: "F",
  n12: "F#",
  n13: "G",
  n14: "G#",
  n15: "A",
  n16: "A#",
  n17: "B",
  n18: "C",
  n19: "C#",
  n1a: "D",
  n1b: "D#",
  n1c: "E",
  n1d: "F",
  n1e: "F#",
  n1f: "G",
  n1g: "G#",

  n20: "B",
  n21: "C",
  n22: "C#",
  n23: "D",
  n24: "D#",
  n25: "E",
  n26: "F",
  n27: "F#",
  n28: "G",
  n29: "G#",
  n2a: "A",
  n2b: "A#",
  n2c: "B",
  n2d: "C",
  n2e: "C#",
  n2f: "D",
  n2g: "D#",

  n30: "G",
  n31: "G#",
  n32: "A",
  n33: "A#",
  n34: "B",
  n35: "C",
  n36: "C#",
  n37: "D",
  n38: "D#",
  n39: "E",
  n3a: "F",
  n3b: "F#",
  n3c: "G",
  n3d: "G#",
  n3e: "A",
  n3f: "A#",
  n3g: "B",

  n40: "D",
  n41: "D#",
  n42: "E",
  n43: "F",
  n44: "F#",
  n45: "G",
  n46: "G#",
  n47: "A",
  n48: "A#",
  n49: "B",
  n4a: "C",
  n4b: "C#",
  n4c: "D",
  n4d: "D#",
  n4e: "E",
  n4f: "F",
  n4g: "F#",

  n50: "A",
  n51: "A#",
  n52: "B",
  n53: "C",
  n54: "C#",
  n55: "D",
  n56: "D#",
  n57: "E",
  n58: "F",
  n59: "F#",
  n5a: "G",
  n5b: "G#",
  n5c: "A",
  n5d: "A#",
  n5e: "B",
  n5f: "C",
  n5g: "C#",

  n60: "E",
  n61: "F",
  n62: "F#",
  n63: "G",
  n64: "G#",
  n65: "A",
  n66: "A#",
  n67: "B",
  n68: "C",
  n69: "C#",
  n6a: "D",
  n6b: "D#",
  n6c: "E",
  n6d: "F",
  n6e: "F#",
  n6f: "G",
  n6g: "G#",
};

$(document).ready(function () {
  const noteList = Object.entries(noteMap);
  let mode = "memory";
  const practiceMode = { note: { id: "", name: "" } };

  const timers = {
    answering: null,
    showingResult: null,
  };
  const duration = {
    answering: 5000,
    showingResult: 1000,
  };

  const getMode = () => {
    return mode;
  };

  const isTestMode = () => {
    return $("#board").hasClass("hidden");
  };

  const updateButtonText = () => {
    const text = isTestMode() ? "Reveal" : "Hide";
    $("#toggle").text(text);
  };

  const tempReveal = (el, duration = 1000) => {
    el.addClass("reveal");
    setTimeout(function () {
      el.removeClass("reveal");
    }, duration);
  };

  const getRandNote = () => {
    const note = noteList[Math.floor(Math.random() * noteList.length)];
    // const note = ['n10', 'E'];
    return { id: note[0], name: note[1] };
  };

  $(".note").on("click", function (e) {
    const id = e.target.id;
    const ans = noteMap[id];
    tempReveal($("#" + id));
    $("#answer").text(ans);
  });

  $("#toggle").on("click", function () {
    $("#board").toggleClass("hidden");
    updateButtonText();
  });

  $(".toggle-button").on("click", function () {
    $("#board").toggleClass("hidden");
    updateButtonText();
  });

  // highlight all notes with the same name
  const highlightAllNotes = (note) => {
    const highlight = $("#board")
      .removeClass("hidden")
      .toggleClass("highlight")
      .hasClass("highlight");
    if (!highlight) return $(".board .note").removeClass("highlight");
    $(".board .note." + note).addClass("highlight");
  };

  const highlightNote = (noteId) => {
    const highlight = $("#board")
      .removeClass("hidden")
      .toggleClass("highlight")
      .hasClass("highlight");
    if (!highlight) return $(".board .note").removeClass("highlight");
    $("#" + noteId).addClass("highlight");
  };

  const answerNote = (note) => {
    if (!timers.answering || !"ABCDEFG".includes(note)) return;
    console.log(" => answered", note);
    const result = {
      expected: practiceMode.note.name,
      answered: note,
      noteId: practiceMode.note.id,
    };
    showResult(result);
    clearTimeout(timers.answering);
    timers.answering = null;
  };

  $(".note-button").on("click", function (e) {
    const note = $(e.target).text();
    if (getMode() === "memory") {
      highlightAllNotes(note);
    } else if (getMode() === "practice") {
      // Answer!
      answerNote(note);
    }
  });

  const practiceNote = () => {
    let note;
    do {
      note = getRandNote();
    } while (!note || note.name.length !== 1); // exclude sharp notes
    highlightNote(note.id);
    return note;
  };

  const enablePracticeMode = () => {
    mode = "practice";
    $("#result-answered").removeClass("A B C D E F G").addClass("X");
    $("#result-status").text("Choose a correct answer");
    return $("#board")
      .removeClass("hidden")
      .removeClass("highlight")
      .addClass("practice")
      .hasClass("practice");
  };

  const removeResult = () => {
    console.log("clearing result");
    timers.showingResult = null;
    $(".note-answer-btn").removeClass("correct wrong lite");
    $("#result-note-answer").removeClass("correct wrong").addClass("hidden");
    $(".board .note").removeClass("highlight reveal");
  };

  const showResult = (result) => {
    const { expected, noteId, answered } = result;
    const isCorrect = expected === answered,
      status = isCorrect ? "correct" : "wrong";

    $("#result-timer").addClass("hidden");

    $(".note-answer-btn").removeClass("correct wrong lite");

    // Show note in answer
    if (!isCorrect) {
      $(`#note${expected}`).parent(".note-answer-btn").addClass("correct lite");
    }
    // Show right or wrong
    $(`#note${answered}`).parent(".note-answer-btn").addClass(status);

    $(`#${noteId}`).addClass("reveal");

    $("#result-note-answer")
      .removeClass("hidden correct wrong")
      .addClass(status);

    console.log("=>", noteId, status);

    $("#result-status").text("Press space");
  };

  const practiceQuestion = () => {
    removeResult();
    enablePracticeMode();

    const timerEl = $("#result-timer"),
      newTimerEl = timerEl.clone(true);
    timerEl.before(newTimerEl);
    newTimerEl.removeClass("hidden");

    // timed question
    const question = new Promise((resolve, reject) => {
      practiceMode.note = practiceNote();
      timers.answering = setTimeout(() => {
        resolve({
          expected: practiceMode.note.name,
          answered: $("#result-answer").text(),
          noteId: practiceMode.note.id,
        });
      }, duration.answering);
    });
    question.then((result) => {
      timers.answering = null;
      showResult(result);
    });
  };

  $("#practice").on("click", practiceQuestion);

  $("body").keypress(function (e) {
    const key = e.code.replace("Key", "");
    console.log(key, timers, getMode());

    if (!timers.showingResult && !timers.answering && key === "Space") {
      practiceQuestion();
    } else if (getMode() === "memory") {
      if (!"ABCDEFG".includes(key)) return;
      highlightAllNotes(key);
    } else if (getMode() === "practice") {
      answerNote(key);
    }
  });

  updateButtonText();
  removeResult();
  $("#result-note-answer").addClass("hidden");
  $("#result-timer").addClass("hidden");

  $("#answer").text(" ");
});
