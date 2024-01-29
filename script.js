const Slides = document.querySelectorAll('.slide');
const Preveous = document.querySelector('.left');
const Next = document.querySelector('.right');

let counter = 1;

Next.addEventListener('click', () => {
    if (counter < Slides.length) {
        Slides.forEach((image, index) => {
            image.style.transform = `translateX(-${counter * 100}%)`;
        });
        counter++;
    } else {
        Next.style.visibility = "hidden";
    }
});


Preveous.addEventListener('click', () => {
    if (counter < Slides.length) {
        Slides.forEach((image, index) => {
            image.style.transform = `translateX(-${(counter-2) * 100}%)`;
        });
        counter--;
    }
});

const getfirstslide = () =>{
    Slides.style.transform = `translateX(0px)`;
    counter = 1;
}
const getlastslide = () =>{
    Slides.style.transform = `translateX(-${(length-1)*100}%)`;
    counter = Slides.length;
}

Next.addEventListener('click',() =>{
    counter < Slides.length ? Next : getfirstslide();
})

Preveous.addEventListener('click',() =>{
    counter < Slides.length ? Preveous : getlastslide();
})



