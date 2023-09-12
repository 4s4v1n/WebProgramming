window.onload = () => {
    document.getElementById("addCommentButton").addEventListener("click", addComment)
}

const addComment = () => {
    let name = document.getElementById("nameInput").value
    let message = document.getElementById("messageInput").value

    let newComment = document.createElement("P")
    newComment.innerHTML = "<u>" + name + "</u><br/>" + message

    let commentsBlock = document.getElementById("commentsBlock")
    commentsBlock.appendChild(newComment)
}

