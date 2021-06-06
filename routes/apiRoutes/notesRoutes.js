const router = require("express").Router();
const { createNewNote, validateNote,} = require("../../lib/notes");
const { notes } = require("../../data/db");
const { nanoid } = require('nanoid');


router.get("/notes", (req, res) => {
  res.json(notes);
});

router.post("/notes", (req, res) => {
  let newId = nanoid(5);
  // if any data in req.body is incorrect, send 400 error back
  if (!validateNote(req.body)) {
    res.status(400).send("The note is not properly formatted.");
  } else {
    req.body.id = newId
    const note = createNewNote(req.body, notes);
    res.json(note);
  }
});

module.exports = router;