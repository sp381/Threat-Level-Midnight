async function commentInput(event) { 
    event.preventDefault();

    //const comment_text = document.querySelector('textarea[name="comment-box"]').value.trim();
    console.log("button clicked");

};

document.querySelector('#first-movie').addEventListener('click', commentInput);