import "@scss/styles.scss";
import { noteStorage } from "./Storage";

import { domElements } from "./helper";

const { addNoteButton, addNoteInput } = domElements;

addNoteButton.addEventListener("click", () => {
  const note = addNoteInput.value;
  if (note) {
    noteStorage.emit("addItem", note);
    addNoteInput.value = "";
  }
});

noteContainer.addEventListener("click", () => {
  const id = 0;
  noteStorage.emit("removeItem", id);
});
