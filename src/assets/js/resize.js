const html = document.documentElement;
html.style.fontSize = html.clientWidth / 10 + 'px';

window.addEventListener('resize', function() {
    html.style.fontSize = html.clientWidth / 10 + 'px';
});
