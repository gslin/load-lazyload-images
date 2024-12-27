(() => {
  'use strict';

  const clean = function(el){
    const imgs = el.querySelectorAll('img');

    for (const img of imgs) {
      var url;

      if (img.getAttribute('loading')) {
        img.removeAttribute('loading');
      }

      if (url = img.getAttribute('data-original')) {
        img.setAttribute('src', url);
      } else if (url = img.getAttribute('data-src')) {
        img.setAttribute('src', url);
      } else if (url = img.getAttribute('file')) {
        img.setAttribute('src', url);
      }
    }
  };

  // For new elements
  const ob = new window.MutationObserver(muts => {
    muts.forEach(mut => {
      if (mut.type !== "childList") {
        return;
      }
      clean(mut.target);
    });
  });
  ob.observe(document, {
    childList: true,
    subtree: true,
  });

  const imgs = document.getElementsByTagName('img');
  for (const img of imgs) {
    clean(img);
  }
})();
