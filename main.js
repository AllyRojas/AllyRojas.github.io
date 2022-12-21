let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('¿Qué sería hoy del mundo sin programadores con sed de aprender? ')
  .pauseFor(1500)
  .deleteChars(10)
  .start();