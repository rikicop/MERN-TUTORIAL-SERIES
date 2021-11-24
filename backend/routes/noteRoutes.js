const express = require("express");
const {
  createNote,
  getNoteById,
  getNotes,
  UpdateNote,
  DeleteNote,
} = require("../controllers/notesController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getNotes);

router.route("/create").post(protect, createNote);

//Update one single note
router
  .route("/:id")
  .get(getNoteById)
  .put(protect, UpdateNote)
  .delete(protect, DeleteNote);

module.exports = router;
