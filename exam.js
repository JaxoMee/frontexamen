// function visibility() {
//     document.querySelector('.javafunction').style = 'visibility:visible'

//     // document.querySelector('.javafunction').classList.add('hide')

//     // document.querySelector('.javafunction').classList.add('hide')


// }
// function hidden() {
//     document.querySelector('.javafunction').classList.add('hide')

//     // document.querySelector('.javafunction').classList.remove('hide')
// }


let image = document.querySelector(".big")
let text = document.querySelector(".content")


image.addEventListener("mouseover", function () {
    console.log("text", text)
    text.style = 'display:block;'
})


image.addEventListener("mouseleave",function () {
    console.log(("text", text))
    text.style = 'display:none;'
})





// let small = document.querySelector(".smallimage")
// let content = document.querySelector(".content1")


// small.addEventListener("mouseover", function () {
//     console.log("text", text)
//     text.style = 'display:block;'
// })


// small.addEventListener("mouseleave",function () {
//     console.log(("text", text))  
//     text.style = 'display:none;'
// })




