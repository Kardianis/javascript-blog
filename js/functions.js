'use strict';
 
function titleClickHandler(event){
  console.log('Link was clicked!', event);
 
  /* remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');
 
for(let activeLink of activeLinks){
  activeLink.classList.remove('active');
}
 
  /* add class 'active' to the clicked link */
 
  const clickedElement = event.target;
  clickedElement.classList.add('active');
   console.log('clickedElement:', clickedElement);
 
  /* remove class 'active' from all articles */
 
const activeArticle = document.querySelector('.post.active');
 
  activeArticle.classList.remove('active');
const clickedElementId = clickedElement.hash.replace('#','')
console.log(clickedElementId)
document.getElementById(clickedElementId).classList.add('active')
}