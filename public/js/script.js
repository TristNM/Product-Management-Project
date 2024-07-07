document.addEventListener('DOMContentLoaded', (event) => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Load theme from localStorage
    const currentTheme = localStorage.getItem( 'theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
    } else {
        body.classList.add('light-mode');
    }

    // Toggle theme
    themeToggleBtn.addEventListener('click', () => {
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    });
});


// script.js
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-btn');
    const sider = document.querySelector('.sider');
    const main = document.querySelector('.main');

    toggleButton.addEventListener('click', function() {
        sider.classList.toggle('show');
        main.classList.toggle('shift');
    });
});
