// const menuToggle = document.querySelector('.menu-toggle');
// const navList = document.querySelector('nav ul');

// menuToggle.addEventListener('click', () => {
//   navList.classList.toggle('show');
// });

var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
  menuItem.forEach((item)=>
    item.classList.remove('ativo')
  )
  this.classList.add('ativo')
}

menuItem.forEach((item)=>
  item.addEventListener('click', selectLink)
)

//expandir menu
var btnExp = document.querySelector('#btnExp')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
  menuSide.classList.toggle('expandir')
})