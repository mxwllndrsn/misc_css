// animation.js

let currAngle = 0;
const speed = 0.05;

const terms = 'hello';
const rotationElement= document.getElementById('rotation');

const createElement = (char) => {
    const div = document.createElement('div');
    
    div.innerText = char;
    div.classList.add('char');
    
    return div;
}

terms.split('').forEach((c) => {
    rotationElement.append(createElement(c));
});

const updateTransform = () => {
    const chars = rotationElement.querySelectorAll('.char');
    const angleInc = (360 / chars.length) * speed;

    chars.forEach((c, i) => {
        const angle = currAngle + angleInc * i;
        const translateY = Math.sin(angle * Math.PI / 180) * 100;
        const scale = Math.cos(angle * Math.PI / 180) * 0.5 + 0.5;

        c.style.transform = `translateY(${translateY}px) scale(${scale})`;
    });

    currAngle += angleInc;
    if (currAngle >= 360) currAngle -= 360;
    console.log(chars.length, angleInc, currAngle);

    requestAnimationFrame(updateTransform);
}

updateTransform();