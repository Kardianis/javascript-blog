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

  const articles = document.querySelectorAll(optArticleSelector);
  console.log(articles);
  
    let html = '';


    /* get the article id */
  for(let article of articles){
    console.log(article);
    let articleId = article.id;
    
    /* find the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* get the title from the title element */

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log;

    /* create HTML of the link */

   titleList.innerHTML = titleList.innerHTML + linkHTML;

    /* insert link into titleList */
    html = html + linkHTML;
}
 titleList.innerHTML = html;
}

generateTitleLinks();