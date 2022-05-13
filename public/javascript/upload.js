
async function addPost(event) {
    event.preventDefault();

    const title = document.querySelector('#post-title').value;
    const post_text = document.querySelector('#post-text').value;

    const response = await fetch(`/api/movies`, {
        method: 'post',
        body: JSON.stringify({
            title,
            post_text
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/movies');
    } else {
        alert(response.statusText)
    }
}

document.querySelector('#add-post').addEventListener('submit', addPost)

