document.getElementById('getstarted').addEventListener('click', function (event) {
    event.preventDefault();
    var emailInput = document.getElementById('email');
    if (!emailInput.value) {
        emailInput.focus();
    } else {
        window.location.href = 'https://www.netflix.com/signup/password?locale=en-IN';
    }
});
document.getElementById('Getstarted').addEventListener('click', function (event) {
    event.preventDefault();
    var emailInput = document.getElementById('Email');
    if (!emailInput.value) {
        emailInput.focus();
    } else {
        window.location.href = 'https://www.netflix.com/signup/password?locale=en-IN';
    }
});

document.querySelectorAll('.toggle').forEach(item => {
    item.addEventListener('click', event => {
        const content = event.target.nextElementSibling;
        const box = content.parentElement;
        if (content.style.display === 'none') {
            content.style.display = 'block';
            event.target.textContent = '✖';
            box.style.maxHeight = content.clientHeight + '20px';
        } else {
            content.style.display = 'none';
            event.target.textContent = '+';
            box.style.maxHeight = '70px';
        }
    });
});


