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
 
// const clickedElement = document.getElementById('href')
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
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  optAuthorSelector = '.post-author';
 
function clearMessages(){
  document.getElementById('messages').innerHTML = titleList;
}
 
function generateTitleLinks(customSelector = ''){
 
  /* remove contents of titleList */
 
const titleList = document.querySelectorAll(optTitleListSelector);
 
 

/* for each article */
 
const articles = document.querySelectorAll(optArticleSelector + customSelector);
  console.log(articles);
  
    let html = '';
 
 
    /* get the article id */
  for(let article of articles){
    console.log(article);
    let articleId = article.id;
    
    /* find the title element */
 
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
 
    /* get the title from the title element */
 
    const linkHTML = '<li><a href="#' + articleId + '">' + articleTitle + '</a></li>';
    console.log(linkHTML);
 
    /* create HTML of the link */
 
   titleList.innerHTML = titleList.innerHTML + linkHTML;
 
    /* insert link into titleList */
    html = html + linkHTML;
  }
 
  titleList.innerHTML = html;
}
 
generateTitleLinks();
 
function generateTags(){
  /* find all articles */
 
  const articles = document.querySelectorAll(optArticleSelector);
 
  /* START LOOP: for every article: */
  for(let article of articles){
    console.log(article);
  
    /* find tags wrapper */
 
    const titleList = article.querySelector(optArticleTagsSelector);
 
    /* make html variable with empty string */
 
    let html = '';
    
       /* get tags from data-tags attribute */
 
     const articleTags = article.getAttribute('data-tags');
 
    /* split tags into array */
    if (typeof articleTags === 'string') {
      const articleTagsArray = articleTags.split(' ');
 
      /* START LOOP: for each tag */
      for(let tag of articleTagsArray){
 
        /* generate HTML of the link */
 
        const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
 
        /* add generated code to html variable */
 
        console.log(linkHTML);
 
        // titleList.innerHTML = titleList.innerHTML + linkHTML;
        html = html + linkHTML;
        /* END LOOP: for each tag */
      }
 
      /* insert HTML of all the links into the tags wrapper */
      titleList.innerHTML = html;
      /* END LOOP: for every article: */
    }
  }
}
 
generateTags();
 
function tagClickHandler(event){
  /* prevent default action for this event */

  event.preventDefault();
 
  /* make new constant named "clickedElement" and give it the value of "this" */
 
   const clickedElement = this

  /* make a new constant "href" and read the attribute "href" of the clicked element */

    const href = document.getElementById(clickedElement);
 
  /* make a new constant "tag" and extract tag from the "href" constant */

    const tag = href.replace('#tag-', '');
 
  /* find all tag links with class active */

  const activeTag = document.querySelectorAll('a.active[href^="#tag-"]');
 
  /* START LOOP: for each active tag link */

    for(let activeTag of activeTags ) {

    /* remove class active */
 
      const activeTag = document.getElementById("#tag-").classList.remove("active");

  /* END LOOP: for each active tag link */
    }
  /* find all tag links with "href" attribute equal to the "href" constant */
    
    const Tag = link.querySelectorAll('#tag');

  /* START LOOP: for each found tag link */
    for(let Tag of Tags){
    /* add class active */
      
    const activeTag = document.getElementById("#tag-").classList.add("active");

  /* END LOOP: for each found tag link */
    }
  /* execute function "generateTitleLinks" with article selector as argument */
  
  generateTitleLinks('[data-tags~="' + tag + '"]');
}
 
function addClickListenersToTags(){
  /* find all links to tags */

  const link = document.querySelectorAll('#tag');
 
  /* START LOOP: for each link */

  for(let link of links){
 
    /* add tagClickHandler as event listener for that link */

    link.addEventListener('click', titleClickHandler);
 
  /* END LOOP: for each link */
}
}
 
addClickListenersToTags();

function generateAuthors(){
  /* find all Authors */
 
  const Author = document.querySelectorAll(optArticleSelector);
   
    /* find tags wrapper */
 
    const AuthorList = document.querySelector(optAuthorSelector);
 
    /* make html variable with empty string */
 
    let html = '';
    
       /* get tags from data-tags attribute */
 
      const articleAuthors = document.getElementById('data-author');
 
      /* START LOOP: for each Author */
      for(let Author of Authors){
 
        /* generate HTML of the link */
 
        const linkHTML = '<p> Author </p>';
  
        // titleList.innerHTML = titleList.innerHTML + linkHTML;
        html = html + linkHTML;
        /* END LOOP: for each tag */
      }
 
      /* insert HTML of all the links into the tags wrapper */
      titleList.innerHTML = html;
      /* END LOOP: for every article: */
  
}
 
generateAuthors();