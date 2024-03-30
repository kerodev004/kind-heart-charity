//--------------------------------------------loader

let preloader = document.querySelector(".preloader")

setTimeout(() => {
    preloader.classList.add('actloader')

}, 2000)
//===============================================
let links = document.querySelectorAll(".link")
links.forEach((link) => {
    link.addEventListener("click", leave)
    link.addEventListener("click" , clos)
})

function leave() {
    links.forEach((link) => {
        link.classList.remove('actlink')
        this.classList.add('actlink')
    })
}
//================================================ toggle menu
let bar = document.querySelector(".menu-bar")
let nav = document.querySelector(".nav")

bar.onclick = () => {
    nav.classList.toggle('actnav')
    bar.classList.toggle('actbar')
}
function clos() {
    nav.classList.remove('actnav')
    bar.classList.remove('actbar')
}
//===================================================== create pagination
let next = document.getElementById("next")
let prev = document.getElementById("prev")
let contents = document.querySelectorAll(".home-content")
let contentArray = Array.from(contents)
let pagination = 1
next.onclick = () => {
    if (pagination == contentArray.length) {
        return false
    }
    else {
        contentArray[pagination].classList.add("actcontent")
        pagination++
    }
}
prev.onclick = () => {
    if (pagination == 1) {
        return false
    }
    else {
        pagination--
        contentArray[pagination].classList.remove("actcontent")
    }
}
let interval = setInterval(() => {
    contentArray[pagination].classList.add("actcontent")
    pagination++
    if (pagination == contentArray.length) {
        clearInterval(interval)
    }
}, 3500)
//======================================== create counter
let nums = document.querySelectorAll(".num")
let about = document.getElementById("about")
let started = false
window.onscroll = () => {
    if (scrollY >= about.offsetTop - 300) {
        if (!started) {
            nums.forEach((num) => {
                count(num)
            })
        }
        started = true
    } 
}
function count(el) {
    let numb = el.dataset.num
    let incremeant =  setInterval(() => {
        el.textContent++
        if (el.textContent == numb) {
            clearInterval(incremeant)
        }
    }, 2000 / numb )
}

//=========================================== clear inputs
let submit = document.querySelector(".submit")
let inps = document.querySelectorAll(".inp")
let inum = document.querySelector(".inum")
submit.onclick = () => {
    inps.forEach((inp) => {
        inp.value = ''
    })
}
//-================================================ change tests
let tests = document.querySelectorAll(".testimonial-text")
let timgs = document.querySelectorAll(".test-img")

timgs.forEach((img) => {
    img.addEventListener("click", exchange)
    img.addEventListener("click" , dataPos)
})

function exchange() {
    timgs.forEach((img) => {
        img.classList.remove("actimg")
        this.classList.add("actimg")
    })
}

function dataPos() {
    tests.forEach((test) => {
        test.classList.remove("actest")
        
        document.querySelectorAll(this.dataset.pos).forEach((test) => {
            test.classList.add("actest")
        })
    })
}

//==================================done