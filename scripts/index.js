import { navbar } from "./components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

const track = document.getElementById("track");

function duplicateSlides() {
    const slides = Array.from(track.children);

    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        track.appendChild(clone);
    });
}

duplicateSlides();