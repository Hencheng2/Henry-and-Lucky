document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('togglePicturesBtn');
    const photoGallery = document.getElementById('photoGallery');

    toggleButton.addEventListener('click', function() {
        if (photoGallery.classList.contains('active')) {
            photoGallery.classList.remove('active');
            toggleButton.textContent = 'Show Our Photo Gallery!';
        } else {
            photoGallery.classList.add('active');
            toggleButton.textContent = 'Hide Our Photo Gallery!';
        }
    });
});
