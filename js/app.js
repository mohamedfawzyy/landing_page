/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/

const menu=document.getElementById('navbar__list');
let sectionslist=document.querySelectorAll('section');
const navbar=document.querySelector('.navbar__menu');
let button=document.getElementById('topBtn');


/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
function build_nav(){
  for(let i=0;i<sectionslist.length;i++){
    let section=sectionslist[i].getAttribute('id');
    let list=document.createElement('li');
    list.innerHTML=`<a href='#${section}'>${section}</a>`;
    list.style.float='left';
    menu.appendChild(list)
  }
}
//////////////////////////////////////////////////////////////////////////////////
//highlight selected section
function section_highlight(event){
    for (let section of sectionslist){
      section.classList.remove('your-active-class');
     }
     let id=event.target.textContent;
     let section=document.getElementById(id);
     section.classList='your-active-class';
}
///////////////////////////////////////////////////////
//scrolltosection
function scrolltosection(event){
  event.preventDefault();
  let element=document.getElementById(event.target.textContent)
  element.scrollIntoView({behavior: 'smooth'});
}
////////////////////////////////////////////////////////////
//scroll to the top
function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/
let t1=performance.now();
  document.addEventListener('DOMContentLoaded',build_nav());
  let t2=performance.now();
  let links =document.querySelectorAll('a');
  console.log('time complexity = %f milliseconds.',t2-t1);
  navbar.addEventListener('click',function(event){
    section_highlight(event);

  });
 menu.addEventListener('click',function(event){
    scrolltosection(event);
  });
window.addEventListener('scroll',function(event){
    let fromTop = window.scrollY;
    for (let link of links ){
      let section =document.querySelector(link.hash);
      if (section.offsetTop<=fromTop+10 && section.offsetTop+section.offsetHeight > fromTop+10){
        link.style.cssText='background:red';
        section.classList.add('your-active-class');

      }else{
        link.style.background='';
        section.classList.remove('your-active-class');
      }
      if(fromTop>20){

        button.style.display="block";
      }else{
        button.style.display="none";
      }
    }
});


// Build menu

// Scroll to section on link click

// Set sections as active
