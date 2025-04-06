const tempCommentary = document.getElementById("template-commentary");
const tempReply = document.getElementById("template-reply");
const btnComment = document.getElementById("btn-comment");
const main = document.querySelector("main");

btnComment.addEventListener("click", () => {
  const cloneCommentary = tempCommentary.content.cloneNode(true);
  const commentary = cloneCommentary.querySelector(".Commentary");
  const btnSave = cloneCommentary.querySelector(".btn-save");
  const inputComment = cloneCommentary.querySelector(".comment-text");
  const btnReply = cloneCommentary.querySelector(".btn-reply");

  // Botón Save/Edit del comentario
  btnSave.addEventListener("click", () => {
    inputComment.disabled = !inputComment.disabled;
    btnSave.textContent = inputComment.disabled ? "Edit" : "Save";
  });

  // Botón Reply
  btnReply.addEventListener("click", () => {
    const cloneReply = tempReply.content.cloneNode(true);
    const inputReply = cloneReply.querySelector(".reply-text");
    const btnSaveReply = cloneReply.querySelector(".btn-reply-save");

    // Botón Save/Edit de la respuesta
    btnSaveReply.addEventListener("click", () => {
      inputReply.disabled = !inputReply.disabled;
      btnSaveReply.textContent = inputReply.disabled ? "Edit" : "Save";
    });

    commentary.appendChild(cloneReply);
  });

  main.appendChild(cloneCommentary);
});