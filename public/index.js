// const form = document.getElementById('blog-submit');

// form.addEventListener("submit", function(event){
//     const formData = new FormData(form);
//     var submitData = {};
//     formData.forEach(function(value, key){
//         submitData[key] = value;
//     });
//     var json = JSON.stringify(submitData);
//     event.preventDefault();
//     fetch('../api/blog', {
//         method: 'POST',
//         body: json
//     })
// })