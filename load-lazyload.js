(function(){
    var imgs = document.getElementsByTagName('imgs');
    var imgs_size = imgs.length;
    var url;

    for (var i = 0; i < imgs_size; i++) {
        var el = imgs[i];

        if (url = el.getAttribute('data-original')) {
            el.setAttribute('src', url);
        } else if (url = el.getAttribute('data-src')) {
            el.setAttribute('src', url);
        }
    }
})();
