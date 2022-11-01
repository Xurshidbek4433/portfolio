document.getElementById("left__link2").addEventListener("click", () => {
  document.getElementById("parag").innerText = "Lorem, ipsum.";
  document.getElementById("item__text").innerText = "oktyabr";
});
document.getElementById("left__link3").addEventListener("click", () => {
  document.getElementById("parag").innerText = " Lorem, ipsum dolor.";
  document.getElementById("item__text").innerText = "sentabr";
});

document.getElementById("left__link1").addEventListener("click", () => {
  document.getElementById("parag").innerText = "Software Engineer @WezaProsoft";
});

const skils = document.getElementById('public__container')

const left = document.getElementById('left');
const right = document.getElementById('right');

right.addEventListener('click', ()  => {
function scrollRight () {
  skils.scrollLeft += 365; 
}
scrollRight()
})


left.addEventListener('click', ()  => {
  function scrollLeft () {
    skils.scrollLeft -= 365; 
  }
    scrollLeft()
  })
  