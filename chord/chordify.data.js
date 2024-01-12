/**
 * Example URL
 * https://chordify.net/api/v2/diagrams/instruments/guitar/chords/E%3Amin
 *
 * C Cm Cmaj7 Cm7 C7 Csus4
 */

const Chordify = {
  chords: [
    {
      name: "C",
      entry: "C%3Amaj",
    },
    {
      name: "Cm",
      display: "C&#x2098;",
      entry: "C%3Amin",
    },
    {
      name: "Cmaj7",
      display: "C&#x1D50;&#x1D43;&#x2B2;&#x2077;",
      entry: "C%3Amaj7",
    },
    {
      name: "Cm7",
      display: "C&#x2098;&#x2077;",
      entry: "C%3Amin7",
    },
    {
      name: "C7",
      display: "C&#x2077;",
      entry: "C%3A7",
    },
    {
      name: "Csus4",
      display: "C&#x2E2;&#x1D58;&#x2E2;&#x2074;",
      entry: "C%3Asus4",
    },
    {
      name: "C/B",
      display: "C/B",
      entry: "C%3Amaj%252FB",
    },

    {
      name: "C#",
      display: "C♯",
      entry: "C%23%3Amaj",
    },
    {
      name: "C#m",
      display: "C&sharp;&#x2098;",
      entry: "C%23%3Amin",
    },
    {
      name: "C#maj7",
      display: "C&sharp;&#x1D50;&#x1D43;&#x2B2;&#x2077;",
      entry: "C%23%3Amaj7",
    },
    {
      name: "C#m7",
      display: "C&sharp;&#x2098;&#x2077;",
      entry: "C%23%3Amin7",
    },
    {
      name: "C#7",
      display: "C&sharp;&#x2077;",
      entry: "C%23%3A7",
    },
    {
      name: "C#sus4",
      display: "C&sharp;&#x2E2;&#x1D58;&#x2E2;&#x2074;",
      entry: "C%23%3Asus4",
    },
    {
      name: "Db",
      display: "D♭",
      entry: "Db%3Amaj",
    },
    {
      name: "Dbm",
      display: "D♭&#x2098;",
      entry: "Db%3Amin",
    },
    {
      name: "Dbmaj7",
      display: "D♭&#x1D50;&#x1D43;&#x2B2;&#x2077;",
      entry: "Db%3Amaj7",
    },
    {
      name: "Dbm7",
      display: "D♭&#x2098;&#x2077;",
      entry: "Db%3Amin7",
    },
    {
      name: "Db7",
      display: "D♭&#x2077;",
      entry: "Db%3A7",
    },
    {
      name: "Dbsus4",
      display: "D♭&#x2E2;&#x1D58;&#x2E2;&#x2074;",
      entry: "Db%3Asus4",
    },

    {
      name: "D",
      entry: "D%3Amaj",
    },
    {
      name: "Dm",
      display: "D&#x2098;",
      entry: "D%3Amin",
    },
    {
      name: "Dmaj7",
      display: "D&#x1D50;&#x1D43;&#x2B2;&#x2077;",
      entry: "D%3Amaj7",
    },
    {
      name: "Dm7",
      display: "D&#x2098;&#x2077;",
      entry: "D%3Amin7",
    },
    {
      name: "D7",
      display: "D&#x2077;",
      entry: "D%3A7",
    },
    {
      name: "Dsus4",
      display: "D&#x2E2;&#x1D58;&#x2E2;&#x2074;",
      entry: "D%3Asus4",
    },
    {
      name: "D/F#",
      display: "D/F&sharp;",
      entry: "D%3Amaj%252FF%23",
    },
    {
      name: "D#",
      display: "D&sharp;",
      entry: "D%23%3Amaj",
    },
    {
      name: "D#m",
      display: "D&sharp;&#x2098;",
      entry: "D%23%3Amin",
    },
    {
      name: "D#maj7",
      display: "D&sharp;&#x1D50;&#x1D43;&#x2B2;&#x2077;",
      entry: "D%23%3Amaj7",
    },
    {
      name: "D#m7",
      display: "D&sharp;&#x2098;&#x2077;",
      entry: "D%23%3Amin7",
    },
    {
      name: "D#7",
      display: "D&sharp;&#x2077;",
      entry: "D%23%3A7",
    },
    {
      name: "D#sus4",
      display: "D&sharp;&#x2E2;&#x1D58;&#x2E2;&#x2074;",
      entry: "D%23%3Asus4",
    },
    {
      name: "Eb",
      display: "E♭",
      entry: "Eb%3Amaj",
    },
    {
      name: "Ebm",
      display: "E♭&#x2098;",
      entry: "Eb%3Amin",
    },
    {
      name: "Ebmaj7",
      display: "E♭&#x1D50;&#x1D43;&#x2B2;&#x2077;",
      entry: "Eb%3Amaj7",
    },
    {
      name: "Ebm7",
      display: "E♭&#x2098;&#x2077;",
      entry: "Eb%3Amin7",
    },
    {
      name: "Eb7",
      display: "E♭&#x2077;",
      entry: "Eb%3A7",
    },
    {
      name: "Ebsus4",
      display: "E♭&#x2E2;&#x1D58;&#x2E2;&#x2074;",
      entry: "Eb%3Asus4",
    },

    {
      name: "E",
      entry: "E%3Amaj",
    },
    {
      name: "Em",
      display: "E&#x2098;",
      entry: "E%3Amin",
    },
    {
      name: "Emaj7",
      display: "E&#x1D50;&#x1D43;&#x2B2;&#x2077;",
      entry: "E%3Amaj7",
    },
    {
      name: "Em7",
      display: "E&#x2098;&#x2077;",
      entry: "E%3Amin7",
    },
    {
      name: "E7",
      display: "E&#x2077;",
      entry: "E%3A7",
    },
    {
      name: "Esus4",
      display: "E&#x2E2;&#x1D58;&#x2E2;&#x2074;",
      entry: "E%3Asus4",
    },

    {
      name: "F",
      entry: "F%3Amaj",
    },
    {
      name: "Fm",
      display: "F&#x2098;",
      entry: "F%3Amin",
    },
    {
      name: "Fmaj7",
      display: "F&#x1D50;&#x1D43;&#x2B2;&#x2077;",
      entry: "F%3Amaj7",
    },
    {
      name: "Fm7",
      display: "F&#x2098;&#x2077;",
      entry: "F%3Amin7",
    },
    {
      name: "F7",
      display: "F&#x2077;",
      entry: "F%3A7",
    },
    {
      name: "Fsus4",
      display: "F&#x2E2;&#x1D58;&#x2E2;&#x2074;",
      entry: "F%3Asus4",
    },
    {
      name: "F#",
      display: "F&sharp;",
      entry: "F%23%3Amaj",
    },
    {
      name: "F#m",
      display: "F&sharp;&#x2098;",
      entry: "F%23%3Amin",
    },
    {
      name: "F#maj7",
      display: "F&sharp;&#x1D50;&#x1D43;&#x2B2;&#x2077;",
      entry: "F%23%3Amaj7",
    },
    {
      name: "F#m7",
      display: "F&sharp;&#x2098;&#x2077;",
      entry: "F%23%3Amin7",
    },
    {
      name: "F#7",
      display: "F&sharp;&#x2077;",
      entry: "F%23%3A7",
    },
    {
      name: "F#sus4",
      display: "F&sharp;&#x2E2;&#x1D58;&#x2E2;&#x2074;",
      entry: "F%23%3Asus4",
    },
    {
      name: "Gb",
      display: "G♭",
      entry: "Gb%3Amaj",
    },
    {
      name: "Gbm",
      display: "G♭&#x2098;",
      entry: "Gb%3Amin",
    },
    {
      name: "Gbmaj7",
      display: "G♭&#x1D50;&#x1D43;&#x2B2;&#x2077;",
      entry: "Gb%3Amaj7",
    },
    {
      name: "Gbm7",
      display: "G♭&#x2098;&#x2077;",
      entry: "Gb%3Amin7",
    },
    {
      name: "Gb7",
      display: "G♭&#x2077;",
      entry: "Gb%3A7",
    },
    {
      name: "Gbsus4",
      display: "G♭&#x2E2;&#x1D58;&#x2E2;&#x2074;",
      entry: "Gb%3Asus4",
    },

    {
      name: "G",
      entry: "G%3Amaj",
    },
    {
      name: "Gm",
      display: "G&#x2098;",
      entry: "G%3Amin",
    },
    {
      name: "Gmaj7",
      display: "G&#x1D50;&#x1D43;&#x2B2;&#x2077;",
      entry: "G%3Amaj7",
    },
    {
      name: "Gm7",
      display: "G&#x2098;&#x2077;",
      entry: "G%3Amin7",
    },
    {
      name: "G7",
      display: "G&#x2077;",
      entry: "G%3A7",
    },
    {
      name: "Gsus4",
      display: "G&#x2E2;&#x1D58;&#x2E2;&#x2074;",
      entry: "G%3Asus4",
    },
    {
      name: "G#",
      display: "G&sharp;",
      entry: "G%23%3Amaj",
    },
    {
      name: "G#m",
      display: "G&sharp;&#x2098;",
      entry: "G%23%3Amin",
    },
    {
      name: "G#maj7",
      display: "G&sharp;&#x1D50;&#x1D43;&#x2B2;&#x2077;",
      entry: "G%23%3Amaj7",
    },
    {
      name: "G#m7",
      display: "G&sharp;&#x2098;&#x2077;",
      entry: "G%23%3Amin7",
    },
    {
      name: "G#7",
      display: "G&sharp;&#x2077;",
      entry: "G%23%3A7",
    },
    {
      name: "G#sus4",
      display: "G&sharp;&#x2E2;&#x1D58;&#x2E2;&#x2074;",
      entry: "G%23%3Asus4",
    },

    {
      name: "Ab",
      display: "A♭",
      entry: "Ab%3Amaj",
    },
    {
      name: "Abm",
      display: "A♭&#x2098;",
      entry: "Ab%3Amin",
    },
    {
      name: "Abmaj7",
      display: "A♭&#x1D50;&#x1D43;&#x2B2;&#x2077;",
      entry: "Ab%3Amaj7",
    },
    {
      name: "Abm7",
      display: "A♭&#x2098;&#x2077;",
      entry: "Ab%3Amin7",
    },
    {
      name: "Ab7",
      display: "A♭&#x2077;",
      entry: "Ab%3A7",
    },
    {
      name: "Absus4",
      display: "A♭&#x2E2;&#x1D58;&#x2E2;&#x2074;",
      entry: "Ab%3Asus4",
    },
    {
      name: "A",
      entry: "A%3Amaj",
    },
    {
      name: "Am",
      display: "A&#x2098;",
      entry: "A%3Amin",
    },
    {
      name: "Amaj7",
      display: "A&#x1D50;&#x1D43;&#x2B2;&#x2077;",
      entry: "A%3Amaj7",
    },
    {
      name: "Am7",
      display: "A&#x2098;&#x2077;",
      entry: "A%3Amin7",
    },
    {
      name: "A7",
      display: "A&#x2077;",
      entry: "A%3A7",
    },
    {
      name: "Asus4",
      display: "A&#x2E2;&#x1D58;&#x2E2;&#x2074;",
      entry: "A%3Asus4",
    },
    {
      name: "A#",
      display: "A&sharp;",
      entry: "A%23%3Amaj",
    },
    {
      name: "A#m",
      display: "A&sharp;&#x2098;",
      entry: "A%23%3Amin",
    },
    {
      name: "A#maj7",
      display: "A&sharp;&#x1D50;&#x1D43;&#x2B2;&#x2077;",
      entry: "A%23%3Amaj7",
    },
    {
      name: "A#m7",
      display: "A&sharp;&#x2098;&#x2077;",
      entry: "A%23%3Amin7",
    },
    {
      name: "A#7",
      display: "A&sharp;&#x2077;",
      entry: "A%23%3A7",
    },
    {
      name: "A#sus4",
      display: "A&sharp;&#x2E2;&#x1D58;&#x2E2;&#x2074;",
      entry: "A%23%3Asus4",
    },
    {
      name: "Bb",
      display: "B♭",
      entry: "Bb%3Amaj",
    },
    {
      name: "Bbm",
      display: "B♭&#x2098;",
      entry: "Bb%3Amin",
    },
    {
      name: "Bbmaj7",
      display: "B♭&#x1D50;&#x1D43;&#x2B2;&#x2077;",
      entry: "Bb%3Amaj7",
    },
    {
      name: "Bbm7",
      display: "B♭&#x2098;&#x2077;",
      entry: "Bb%3Amin7",
    },
    {
      name: "Bb7",
      display: "B♭&#x2077;",
      entry: "Bb%3A7",
    },
    {
      name: "Bbsus4",
      display: "B♭&#x2E2;&#x1D58;&#x2E2;&#x2074;",
      entry: "Bb%3Asus4",
    },

    {
      name: "B",
      entry: "B%3Amaj",
    },
    {
      name: "Bm",
      display: "B&#x2098;",
      entry: "B%3Amin",
    },
    {
      name: "Bmaj7",
      display: "B&#x1D50;&#x1D43;&#x2B2;&#x2077;",
      entry: "B%3Amaj7",
    },
    {
      name: "Bm7",
      display: "B&#x2098;&#x2077;",
      entry: "B%3Amin7",
    },
    {
      name: "B7",
      display: "B&#x2077;",
      entry: "B%3A7",
    },
    {
      name: "Bsus4",
      display: "B&#x2E2;&#x1D58;&#x2E2;&#x2074;",
      entry: "B%3Asus4",
    },
  ],
};

(() => {
  Chordify.get = (chordName) =>
    Chordify.chords.find((el) => el.name === chordName);

  Chordify.getByEntry = (entryName) =>
    Chordify.chords.find((el) => el.entry === entryName);

  Chordify.getUrl = (chord) => {
    const domain = "https://chordify.net",
      baseUrl = "/api/v2/diagrams/instruments/guitar/chords/",
      tail = "?handedness=right#chord";
    const c = Chordify.get(chord.name);
    if (!c) return;
    return `${domain}${baseUrl}${chord.entry}${tail}`;
  };

  const entryMapping = {
    "%3A": "_",
    "%23": "#",
    "&#x2E2;": "/",
  };

  const replaceEntry = (entry) => {
    return entryMapping[entry] || entry;
  };

  const escapeEntry = (str) => {
    const rx = Object.keys(entryMapping).join("|"),
      regex = new RegExp(rx, "g");
    return str.replace(regex, replaceEntry);
  };

  Chordify.getEntry = (chord) => {
    if (!chord) return "";
    return escapeEntry(chord.entry);
  };

  // B&#x1D50;&#x1D43;&#x2B2;&#x2077;
  // ♭ᵐᵃʲ⁷
  // C&#x2E2;&#x1D58;&#x2E2;&#x2074;
  // ˢᵘˢ⁴
  const displayMapping = {
    "&sharp;": "♯",
    "&#x2098;": "ₘ",
    "&#x1D50;": "ᵐ",
    "&#x1D43;": "ᵃ",
    "&#x2B2;": "ʲ",
    "&#x2E2;": "ˢ",
    "&#x1D58;": "ᵘ",
    "&#x2074;": "⁴",
    "&#x2077;": "⁷",
    "&#x2079;": "⁹",
    "&#x2571;": "╱",
  };
  const replaceDisplay = (display) => {
    return displayMapping[display] || display;
  };

  const escapeDisplay = (str) => {
    const rx = Object.keys(displayMapping).join("|"),
      regex = new RegExp(rx, "g");
    return str.replace(regex, replaceDisplay);
  };

  Chordify.getDisplay = (chord) => {
    if (!chord) return "";
    return escapeDisplay(chord.display || chord.name);
  };
})();
