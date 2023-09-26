let crossOff = document.querySelectorAll('ol li')
let disappear = document.querySelectorAll('ul li')
let pictures = document.querySelectorAll('img')
let meteor = document.querySelector('button')

// for(let elem of crossOff){
//     elem.addEventListener('click', function(){
//         elem.style.textDecoration = 'line-through'
//     })
// }
crossOff.forEach(function(element){
    element.addEventListener('click', function(){
        element.style.textDecoration = 'line-through'
    })
})

// for(let elem of disappear){
//     elem.addEventListener('click', function(){
//         elem.style.opacity = 0
//     })
// }

disappear.forEach(function(element){
    element.addEventListener('click', function(){
        element.style.opacity = 0
    })
})

// for(let elem of pictures){
//     elem.addEventListener('click', function(){
//         elem.style.width = 0
//     })
// }

pictures.forEach(function(element){
    element.addEventListener('click', function(){
        element.style.width = 0
    })
})

meteor.addEventListener('click', function(){
    for(let elem of crossOff){
        elem.style.textDecoration = 'line-through'
    }
    for(let elem of disappear){
        elem.style.opacity = 0;
    }
    for(let elem of pictures){
        elem.style.width = 0
    }
})

