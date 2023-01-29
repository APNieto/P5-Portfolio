// ELEMENTS
// Navbar
const _navbar = document.getElementById('_navbar')
const navbarBrand = document.getElementsByClassName('navbar-brand')[0]
const navLinks = document.getElementsByClassName('nav-link')
// Portfolio
const projectsContainer = document.getElementById('_projects-container')
const projectBoxes = document.getElementsByClassName('_project-boxes')
// Form
const nameInput = document.getElementById('name')
const nameInputInvalidMsg = document.getElementById('_invalid-name')
const emailInput = document.getElementById('email')
const emailInputInvalidMsg = document.getElementById('_invalid-email')
const messageInput = document.getElementById('message')
const messageInputInvalidMsg = document.getElementById('_invalid-message')
const areInputsFilled = [false, false, false]
const submitButton = document.getElementById('_submit-button')
const thanksMessage = document.getElementById('_thanks-message')
// Social / footer
const copyright = document.getElementById('_copyright')     //TEST



// EVENT LISTENERS
// Diminishes/re-establishes navbar size on scroll
window.onscroll = function(event) {
    if(document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
        _navbar.style.padding = '0'
        navbarBrand.style.fontSize = '1.4rem'        
        for (let ele of navLinks) {ele.style.fontSize = '1.2rem'}
    } else {
        _navbar.style.padding = '20px 0'
        navbarBrand.style.fontSize = '1.8rem'
        for (let ele of navLinks) {ele.style.fontSize = '1.4rem'}
    }    
}

// Correct section scrolling to navbar's height; responsive
for (let navLink of navLinks) {
    navLink.addEventListener('click', (event) => {
        event.preventDefault()
        let targetElement = document.querySelector(navLink.hash)
        let navbarHeight
        if (window.innerWidth < 992) {navbarHeight = 186}
        else {navbarHeight = 45}
        window.scrollTo({top: targetElement.offsetTop - navbarHeight - 4, left: 0, behaviour: 'auto'})
    })
}


// Translates and fades in project boxes from the left side; responsive
const observerLargeScreen = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('_project-boxes-invisible')
        } else {
            entry.target.classList.add('_project-boxes-invisible')
        }})    
}, {root: null, rootMargin: '0px', threshold: 0.7})

const observerNarrowScreen = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            for (let i = 0; i < projectBoxes.length; i++) {
                console.log('Narrow screen intersecting projects container');
                projectBoxes[i].classList.remove('_project-boxes-invisible')
            }            
        } else {
            for (let i = 0; i < projectBoxes.length; i++) {
                projectBoxes[i].classList.add('_project-boxes-invisible')
            }            
        }})     
}, {root: null, rootMargin: '0px', threshold: 0.12})

if (window.innerWidth <= 575) {
    observerNarrowScreen.observe(projectsContainer)
} else {
    for (let box of projectBoxes) {observerLargeScreen.observe(box)}
}

// Shows thank you message after submitting the form
submitButton.addEventListener('click', () => {
    thanksMessage.classList.remove('invisible')
    nameInput.disabled = true
    emailInput.disabled = true
    messageInput.disabled = true
})

// Form validation: name and message input
nameInput.oninput = () => {
    if (nameInput.value.length > 0) {
        areInputsFilled[0] = true
        nameInput.classList.remove('_is-invalid')
        nameInputInvalidMsg.classList.add('invisible')
    } else {
        areInputsFilled[0] = false
        nameInput.classList.add('_is-invalid')
        nameInputInvalidMsg.classList.remove('invisible')
    }
    checkInputValidity()
}
nameInput.onblur = () => {
    if (nameInput.value.length == 0) {
        nameInput.classList.add('_is-invalid')
        nameInputInvalidMsg.classList.remove('invisible')
    }    
}
// Form validation: email input
const pattern = /[\w\.]+@\w+\.[a-z]{2,3}/i
emailInput.oninput = () => {
    if (emailInput.value.search(pattern) === 0) {
        areInputsFilled[1] = true
        emailInput.classList.remove('_is-invalid')
        emailInputInvalidMsg.classList.add('invisible')
    } 
    checkInputValidity()
}
emailInput.onblur = () => {
    if (emailInput.value.search(pattern) !== 0) {
        emailInput.classList.add('_is-invalid')
        emailInputInvalidMsg.classList.remove('invisible')
    }
}
// Form validation: message input
messageInput.oninput = () => {
    if (messageInput.value.length > 0) {
        areInputsFilled[2] = true
        messageInput.classList.remove('_is-invalid')
        messageInputInvalidMsg.classList.add('invisible')
    } else {
        areInputsFilled[2] = false
        messageInput.classList.add('_is-invalid')
        messageInputInvalidMsg.classList.remove('invisible')
    }
    checkInputValidity()
}
messageInput.onblur = () => {
    if (messageInput.value.length == 0) {
        messageInput.classList.add('_is-invalid')
        messageInputInvalidMsg.classList.remove('invisible')
    }
}



// FUNCTIONS
// Check if all inputs are valid; if so, enable submit button
function checkInputValidity() {
    submitButton.disabled = false
    for (let isInputFilled of areInputsFilled) {
        if (isInputFilled == false) {
            submitButton.disabled = true
        }
    }
}

