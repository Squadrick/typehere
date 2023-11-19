document.addEventListener('DOMContentLoaded', () => {
    const typingCanvas = document.getElementById('typingCanvas');

    typingCanvas.value = localStorage.getItem('storedText') || '';

    typingCanvas.addEventListener('input', () => {
        localStorage.setItem('storedText', typingCanvas.value);
    });
});

