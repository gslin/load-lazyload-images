(() => {
    'use strict';

    const imgs = document.getElementsByTagName('img');

    for (const img of imgs) {
        var url;

        if (img.getAttribute('lazyload')) {
            img.removeAttribute('lazyload');
        }

        if (url = img.getAttribute('data-original')) {
            img.setAttribute('src', url);
        } else if (url = img.getAttribute('data-src')) {
            img.setAttribute('src', url);
        } else if (url = img.getAttribute('file')) {
            img.setAttribute('src', url);
        }
    }
})();
