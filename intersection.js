
const skills = document.querySelectorAll(".skill")
const fadeinRight = document.querySelectorAll(".fadein-right")
const fadeinLeft = document.querySelectorAll(".fadein-left")


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)

        if (entry.isIntersecting) { observer.unobserve(entry.target) }
    },)
    //console.log(entries)
}, {
    threshold: 0.1
})

skills.forEach(skill => {
    observer.observe(skill)
})

fadeinRight.forEach(fade => {
    observer.observe(fade)
})
fadeinLeft.forEach(fade => {
    observer.observe(fade)
})

fadeinLeft.forEach(fade => {
    observer.observe(fade)
})



