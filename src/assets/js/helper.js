// Helper
export const $ = selector => document.querySelector(selector);

export const domElements = {
  addNoteInput: $("#add-note"),
  addNoteButton: $("#add-note-button"),
  noteContainer: $("#notes")
};

export const renderNotes = notes => {
  domElements.noteContainer.innerHTML = notes
    .map((note, index) => {
      return `
        <div class="note col-lg-4" id=${index}>
          ${note}
        </div>
      `;
    })
    .join("");

  //Only if I have the notes I can target them and add the event listeners
  targetNotes();
};

const targetNotes = () => {
  const noteDiv = document.querySelectorAll(".note");
  console.log(noteDiv);
  if (noteDiv != null)
    noteDiv.forEach(oneDiv => {
      oneDiv.addEventListener("click", () => {
        console.log("Clicked a div ${oneDiv.id}");
      });
    });
};

//Check if we have a note and eventually attach an event listener
