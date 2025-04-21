var animateButton = function (e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function () {
        e.target.classList.remove('animate');
    }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('mouseover', animateButton, false);
}


const $hamburger = document.querySelector('.cs-toggle')
const $bubbles = document.querySelector('.bubble-particles')

const buildBubbles = () => {
    const $fragment = document.createDocumentFragment()

    for (let i = 0; i < 100; i++) {
        const $el = document.createElement('div'), style = $el.style
        $el.classList.add('bubble')
        
        style.left = `${getRandom(0, 100)}%`
        style.animationDuration = `${getRandom(5000, 10000)}ms`
        style.animationDelay = `${getRandom(0, 10000)}ms`
        
        $fragment.appendChild($el)
    }
    
    $bubbles.appendChild($fragment)
}

const getRandom = (min, max) => (
    Math.random() * (max - min) + min
)

$hamburger.addEventListener('click', buildBubbles, {once: true})
$hamburger.addEventListener('click', function() {
    $bubbles.classList.toggle("active");
});
