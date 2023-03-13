const addComment = document.getElementById('submitComment');
const commentBody = document.getElementById('commentBody');

addComment.addEventListener('click', async (event) => {
    var textEntry = document.getElementById('commentBody').value;
    var blogId = event.target.dataset.blog;

    console.log(textEntry, blogId);
    
    const commentPost = await fetch('/api/comment', {
        method: "POST",
        body: {
            blog_id: blogId,
            comment: textEntry,
            user_id: 2,
        }
    })
    console.log(blogId);
});