// animation.js

let currAngle = 0;
const speed = 0.05;

const terms = '..........................................';
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

const updateRotation= () => {
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

    requestAnimationFrame(updateRotation);
}

const updateWave = () => {
    const chars = rotationElement.querySelectorAll('.char');
    const totalChars = chars.length;

    chars.forEach((c, i) => {
        const progress = (currAngle + 360 * (i / totalChars)) % 360;
        const waveAmplitude = 20; // Height of the wave
        const translateY = Math.sin(progress * Math.PI / 180) * waveAmplitude;
        const translateX = (i / totalChars) * 500; // Spread along X-axis
  
        c.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`;
    });

    currAngle += 1; // Control speed here
    if (currAngle >= 360) currAngle -= 360;

    requestAnimationFrame(updateWave);
}

const updateFall = () => {
    const chars = rotationElement.querySelectorAll('.char');
    const totalChars = chars.length;

    chars.forEach((c, i) => {
        const progress = (currAngle + 360 * (i / totalChars)) % 360;
        const waveAmplitude = 100; // Height of the wave
        const translateY = Math.tan(progress * Math.PI / 180) * waveAmplitude;
        const translateX = (i / totalChars) * 50; // Spread along X-axis
  
        c.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`;
    });

    currAngle += 1; // Control speed here
    if (currAngle >= 360) currAngle -= 360;

    requestAnimationFrame(updateFall);
}

updateFall();