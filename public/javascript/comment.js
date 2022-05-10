async function commentInput(event) { 
    //console.log(event);
    event.preventDefault();
    const btn = event.target;
    const movieId = btn.dataset.movieId;
    //console.log(movieId);


    const comment_text = document.querySelector(`#comment-${movieId}`).value.trim();

    if(comment_text) {
        const response = await fetch("/api/comments", {
            method: "POST",
            body: JSON.stringify({
                movie_id: movieId,
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

document.querySelectorAll('.add-comment-button').forEach((btn) => {
    btn.addEventListener('click', commentInput);
});