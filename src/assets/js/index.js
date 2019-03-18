import "@scss/styles.scss"
import Storage from "./Storage"

const noteStorage = new Storage("myAwesomeNote")

// Helper
const $ = selector => document.querySelector(selector)

const addNoteInput = $("#add-note")
const addNoteButton = $("#add-note-button")
const noteContainer = $("#notes")

addNoteButton.addEventListener("click", () => {
  const note = addNoteInput.value
  noteStorage.addDataSet(note)
  renderNotes(note)
})

const renderNotes = note => {
  const templateOfNote = `
    <div class="note col-lg-4">
      ${note}
    </div>
  `
  noteContainer.innerHTML = templateOfNote
}

renderNotes(noteStorage.data)
