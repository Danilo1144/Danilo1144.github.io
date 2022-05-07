const html = document.getElementById('html');
const css = document.getElementById('css');
const js = document.getElementById('js');
const links = document.getElementById('links');

const CargarImagen = (entradas) => {
    entradas.forEach( (entrada) => {
      if(entrada.isIntersecting){
          entrada.target.classList.add('visible')
      }
    });
}

const Observador = new IntersectionObserver(CargarImagen,{
    root: null,
    rootMargin:'0px 0px 0px 0px',
    threshold:0.5,
});

Observador.observe(html);
Observador.observe(css);
Observador.observe(js);
Observador.observe(links);