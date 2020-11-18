document.addEventListener("DOMContentLoaded", () => {
    // ===> DOM elements <=== //

    const $imagesContainer = document.getElementById('images-container');
    const $lightbox = document.getElementById('lightbox');

    // ===> Event listeners and triggers <=== //

    // Show lightbox 
    $imagesContainer.addEventListener('click', e => {
        const imageWrapper = e.target.closest('.image-wrapper');
        if (imageWrapper) {
            const image = imageWrapper.querySelector('img');
            if (image) {
                $lightbox.innerHTML = '<div class="close-lightbox"></div>' + image.outerHTML;
                $lightbox.classList.add('show');
            }
        }
    });

    // Hide Lightbox
    $lightbox.addEventListener('click', (e) => {
        if (!e.target.hasAttribute('src')) {
            $lightbox.classList.remove('show');
        }
    });

    // Loading...
    setTimeout(() =>
        $imagesContainer.classList.remove('loading')
        , 1500);

});
