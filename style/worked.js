document.getElementById("left__link2").addEventListener("click", () => {
  document.getElementById("parag").innerText = "Lorem, ipsum.";
  document.getElementById("item__text").innerText = "oktyabr";
});
document.getElementById("left__link3").addEventListener("click", () => {
  document.getElementById("parag").innerText = " Lorem, ipsum dolor.";
  document.getElementById("item__text").innerText = "sentabr";
  document.getElementById('text__sub').style.borderBottom = "5px solid rgba(100, 255, 218, 0.2)"
});
document.getElementById("left__link4").addEventListener("click", () => {
  document.getElementById("parag").innerText = " Lorem, ipsum dolor.";
  document.getElementById("item__text").innerText = "yanvar";
  document.getElementById('text__sub3').style.color = "blue"
});
document.getElementById("left__link5").addEventListener("click", () => {
  document.getElementById("parag").innerText = " Lorem, ipsum dolor.";
  document.getElementById("item__text").innerText = "fevral";
  document.getElementById('text__sub2').style.border = "2px solid #a8b2d1"
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
  