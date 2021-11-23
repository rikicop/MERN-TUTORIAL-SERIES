const express = require("express");
const { getNotes } = require("../controllers/notesController");
const { createNote } = require("../controllers/notesController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getNotes);

router.route("/create").post(createNote);

//Update one single note
//router.route("/:id").get().put().delete();

module.exports = router;
