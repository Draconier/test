// game.js

// Note handling
class Note {
    constructor(type, position) {
        this.type = type;       // Type of note (e.g., tap, hold)
        this.position = position; // Position on the chart
    }
}

class NoteHandler {
    constructor() {
        this.notes = []; // Array to hold notes
    }

    addNote(type, position) {
        const note = new Note(type, position);
        this.notes.push(note);
    }

    getNotes() {
        return this.notes;
    }
}

// Scoring System
class ScoringSystem {
    constructor() {
        this.score = 0;
        this.combo = 0;
    }

    increaseScore(points) {
        this.score += points;
        this.combo++;
    }

    resetCombo() {
        this.combo = 0;
    }

    getScore() {
        return this.score;
    }

    getCombo() {
        return this.combo;
    }
}

// Combo System
class ComboSystem {
    constructor() {
        this.currentCombo = 0;
    }

    resetCombo() {
        this.currentCombo = 0;
    }

    increaseCombo() {
        this.currentCombo++;
    }

    getCurrentCombo() {
        return this.currentCombo;
    }
}

// Chart Editor
class ChartEditor {
    constructor() {
        this.songs = {}; // Object to hold songs
    }

    addSong(name, chart) {
        this.songs[name] = chart;
    }

    getSong(name) {
        return this.songs[name];
    }
}

// Sample Songs
const sampleSongs = {
    "Song1": [
        { type: "tap", position: 1 },
        { type: "hold", position: 2 },
    ],
    "Song2": [
        { type: "tap", position: 3 },
        { type: "tap", position: 4 },
    ],
};

// Exporting functionality
export { NoteHandler, ScoringSystem, ComboSystem, ChartEditor, sampleSongs };