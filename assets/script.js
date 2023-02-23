
// grabbed all the elements I need
const bio = document.querySelector('.bio');
const projects = document.querySelector('.projects');
const contact = document.querySelector('.contact');
const tab1 = document.querySelector('.tab1');
const tab2 = document.querySelector('.tab2');
const tab3 = document.querySelector('.tab3');
const bioContent = document.querySelector('.bioContent');
const projectsContent = document.querySelector('.projectsContent');
const contactContent = document.querySelector('.contactContent');

// event listener for the bio tab adds/removes classes to show/hide content as needed
bio.addEventListener('click', () => {   
    bioContent.classList.remove('hide');
    tab1.classList.add('tabActive');
    projectsContent.classList.add('hide');
    tab2.classList.remove('tabActive');
    contactContent.classList.add('hide');
    tab3.classList.remove('tabActive');
});

// event listener for the projects tab adds/removes classes to show/hide content as needed
projects.addEventListener('click', () => {
    projectsContent.classList.remove('hide');
    tab2.classList.add('tabActive');
    bioContent.classList.add('hide');
    tab1.classList.remove('tabActive')
    contactContent.classList.add('hide');
    tab3.classList.remove('tabActive');
});

// event listener for the contact tab adds/removes classes to show/hide content as needed
contact.addEventListener('click', () => {
    contactContent.classList.remove('hide');
    tab3.classList.add('tabActive');
    bioContent.classList.add('hide');
    tab1.classList.remove('tabActive');
    projectsContent.classList.add('hide');
    tab2.classList.remove('tabActive');
});