window.addEventListener('load',function(){
    new Glider(document.querySelector('.carrusel-lista'), {
        slidesToShow: 1,
  dots: '.carrusel-indicador',
  draggable: false,
  arrows: {
    prev: '.anterior',
    next: '.siguiente'
  }
    });
})