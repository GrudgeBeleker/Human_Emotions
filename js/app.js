window.addEventListener('scroll', e => {
    document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
  });

  window.onscroll = function() {
    var scrolled = window.pageYOffset;
    console.log( 'Позиция скрола: '+scrolled  );
};