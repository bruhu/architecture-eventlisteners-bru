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
  renderNotes(noteStorage.data)
})

const renderNotes = notes => {
  noteContainer.innerHTML = notes
    .map(note => {
      return `
        <div class="note col-lg-4">
          ${note}
        </div>
      `
    })
    .join("")
}

renderNotes(noteStorage.data)
