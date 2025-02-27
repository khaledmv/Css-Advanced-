
let body = document.querySelector('body');
let cursor = document.querySelector('.cursor');


body.onclick = function(){
    body.classList.toggle('dark');
}


for(let i = 0; i < 200; i++){
    let cercle = document.createElement('div');
    cercle.classList.add('cercle')
    cursor.appendChild(cercle);
}


// integrate gsap

document.body.addEventListener("mousemove", function(e){
    gsap.to(".cercle",  {
        x: e.clientX,
        y: e.clientY,
        stagger: -0.0025,
        scale: (i, target) => {
            return 1 + (i * (2 /200));
        }
    })
})