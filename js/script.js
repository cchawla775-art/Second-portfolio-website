console.log(typeof particlesJS);
const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    cursor2.style.left = e.clientX + "px";
    cursor2.style.top = e.clientY + "px";

});
if (typeof particlesJS !== "undefined") {

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

}
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

if (avatar) {

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

}

window.addEventListener("DOMContentLoaded", () => {

    const loader = document.getElementById("loader");
    const percent = document.getElementById("percent");
    const sound = document.getElementById("loadingSound");

    if (loader && percent) {

        // Sound Play
        if (sound) {
            sound.volume = 0.3;

            sound.play().catch(() => {
                console.log("Autoplay blocked");
            });
        }

        let value = 0;

        const interval = setInterval(() => {

            value += 10;

            percent.textContent = value + "%";

            if (value >= 100) {

                percent.textContent = "100%";

                clearInterval(interval);

                setTimeout(() => {

                    loader.classList.add("hide");

                    // Stop Sound
                    if (sound) {
                        sound.pause();
                        sound.currentTime = 0;
                    }

                }, 150);

            }

        }, 40);

    }

});