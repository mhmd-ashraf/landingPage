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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navMenu = document.getElementById('navbar__list');
const sections = Array.from(document.querySelectorAll('section'));
const topBtn = document.querySelector(".to-top");
const linksNav = document.querySelectorAll("li a");
const menuLink = document.querySelectorAll('.menu__link');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function secViewPort(e) {
    let secPostion = e.getBoundingClientRect();

    return (secPostion.top >= 0 && secPostion.top <= window.innerHeight && secPostion.top <= 300);
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav() {
    navMenu.innerHTML = "";
    
    for (sec of sections) {
        
        const anitem =   `<li><a href='#${sec.getAttribute('id')}' class='menu__link'>${sec.dataset.nav}</a><li>`

        navMenu.insertAdjacentHTML("beforeend", anitem);
    }
}


// Add class 'active' to section when near top of viewport

function addActiveClass() {
    window.addEventListener('scroll', () => {
        for (sec of sections) {

            if (secViewPort(sec)) {
                
                sec.classList.toggle('your-active-class');
                
                // const nnn = document.querySelector(sec.getAttribute('id'));
                // nnn.classList.add('active');


                // if (sec.classList.contains('your-active-class')) 
                //     sec.classList.remove('your-active-class');

                // else
                //     sec.classList.add('your-active-class');
                
            }
        }
    });
    
}


function addActiveNav() {
    const loc = location.href;
    links = document.querySelectorAll(".navbar__menu ul a");
    links.forEach(link => {
        link.onclick = function () {
            reset();
            link.classList.add('active');
        }
    })

    function reset() {
        links.forEach(link => {
            link.classList.remove('active');
        })
    }
}





// Scroll to anchor ID using scrollTO event
function scrollToSection() {
    let links = document.querySelectorAll('a[href^="#"]');
    links.forEach(anchor => {
        anchor.addEventListener('click', function (e) {

            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
        });
    });
}



// Scroll to top button
function toTop() {
    window.onscroll =  () => {
        if (this.scrollY > 300) {
            topBtn.classList.add("show");
        }
        else {
            topBtn.classList.remove("show");
        }
    };

    topBtn.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu
buildNav();

// Scroll to section on link click
scrollToSection();

// Set sections as active
addActiveClass();

// Scroll to top button
toTop();

addActiveNav();