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

const clickedElement = document.getElementById('href')
const articleSelector = document.getElementById('href')
console.log(articleSelector)

  /* find the correct article using the selector (value of 'href' attribute) */

  const targetArticle = document.querySelector('href')
  
  /* add class 'active' to the correct article */


const links = document.querySelectorAll('.titles a');


for(let link of links){
  link.addEventListener('click', titleClickHandler);
  }

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){

  /* remove contents of titleList */

const titleList = document.querySelectorAll(optTitleListSelector);

function clearMessages(){
  document.getElementById('messages').innerHTML = titleList;
}

  /* for each article */

  const articles 
  optArticleSelector = articles
  for(let article of articles) {
    console.log(article)
  }

    /* get the article id */

    const article = document.getElementById(id)
const articleSelector = document.getElementById(id)
console.log(articleSelector)

    /* find the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* get the title from the title element */

    /* create HTML of the link */

    /* insert link into titleList */

}

generateTitleLinks();