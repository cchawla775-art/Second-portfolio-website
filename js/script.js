const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    cursor2.style.left = e.clientX + "px";
    cursor2.style.top = e.clientY + "px";

});
particlesJS("particles-js", {

    particles: {

        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 900
            }
        },

        color: {
            value: "#00d9ff"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: .6
        },

        size: {
            value: 3
        },

        line_linked: {
            enable: true,
            distance: 150,
            color: "#00d9ff",
            opacity: .3,
            width: 1
        },

        move: {
            enable: true,
            speed: 2
        }

    }

});
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;

        const revealTop = section.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            section.classList.add("active");

        }

    });

});

const avatar = document.querySelector(".center img");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", (e) => {

    mouseX = (e.clientX - window.innerWidth / 2) / 35;
    mouseY = (e.clientY - window.innerHeight / 2) / 35;

});

function animate() {

    currentX += (mouseX - currentX) * 0.08;
    currentY += (mouseY - currentY) * 0.08;

    avatar.style.transform =
        `translate(${-currentX}px, ${-currentY}px)`;

    requestAnimationFrame(animate);

}

animate();