async function commentInput(event) { 
    event.preventDefault();

    const comment_text = document.querySelector('textarea[name="comment-box1"]').value.trim();

    if(comment_text) {
        const response = await fetch("/api/comments", {
            method: "POST",
            body: JSON.stringify({
                comment_text
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        if(response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText)
        }
    }
};

document.querySelector('#first-movie').addEventListener('click', commentInput);