const blogPost = document.getElementById('blog-list');

blogPost.addEventListener('click', async (event) => {
    console.log(event.target.parentElement.parentElement.dataset.link)
    const blogId = event.target.parentElement.parentElement.dataset.link;
    const fetchData = await fetch('/blog/' + blogId, {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
    })

    window.location.href = '/blog/' + blogId; 
    return fetchData;
})