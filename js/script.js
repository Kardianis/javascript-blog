'use strict';

function titleClickHandler(event){
  console.log('Link was clicked!');

  /* remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

for(let activeLink of activeLinks){
  activeLink.classList.remove('active');
}

  /* add class 'active' to the clicked link */

   console.log('clickedElement:', clickedElement);

  /* remove class 'active' from all articles */

const activeArticles = document.querySelectorAll('.articles a.active');

for(let activeArticle of activeArticles){
  activeArticle.classList.remove('active');
}
}

/* get 'href' attribute from the clicked link */

const clickedElement = document.getElementById('hrev=')
const articleSelector = document.getElementById('href')
console.log(articleSelector, href)

  /* find the correct article using the selector (value of 'href' attribute) */

  const targetArticle = document.querySelector('href')
  
  /* add class 'active' to the correct article */


const links = document.querySelectorAll('.titles a');


for(let link of links){
  link.addEventListener('click', titleClickHandler);
  event.preventDefault();


}

const clickedElement = this;
if (activeArticle.classList.add('active'));