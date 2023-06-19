const form = document.querySelector('.BlogForm');
const titleInput = form.querySelector('#blogTitle');
const textInput = form.querySelector('#blogText');
const blogTitleSpan = document.getElementById('blogTitleSpan');
const subBtn = document.getElementById('SubBtn');
const blogTextSpan = document.getElementById('blogTextSpan');



subBtn.addEventListener('click', (event) => {
    const title = titleInput.value.trim();
    const text = textInput.value.trim();
    
    console.log('executed');
    if (title === '' || text === ''){
        if (title === '') {
            blogTitleSpan.style.display = 'block';
            blogTextSpan.style.display = 'none';
        } else {
            blogTitleSpan.style.display = 'none';
            blogTextSpan.style.display = 'block';
        }

        event.preventDefault();
    } 
    else {
        blogTitleSpan.style.display = 'none';
        blogTextSpan.style.display = 'none';
    }
});