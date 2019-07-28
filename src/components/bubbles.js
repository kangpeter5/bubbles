
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./bubbles.css"

export default function Bubbles() {

    // CONTROLS
    const bubbliness = 8; // Recommended between 1 and 10
    let motionResistance = 3; // Recommended between 1 and 10

    // Create layers
    /*const layer3 = `
        <div class="layer layer3"></div>
    `;
    const layer4 = `
        <div class="layer layer4"></div>
    `;
    document.body.innerHTML = layer3;
    document.body.innerHTML = layer4;*/

    // Create bubbles
    const mdBubbles = bubbliness * 3;
    const lgBubbles = bubbliness * 2;

    // Fill layer 3
    for (let i = 0; i < mdBubbles; i++) {
        let topPos = (Math.random() * 100) + '%'
        let leftPos = (Math.random() * 100) + '%'
        let bubbleMd = `
            <div class="bubble bubble-md"></div>
        `;
        let layer = document.getElementsByClassName('layer3')

        console.log(`bubbleMd: ${typeof bubbleMd}`);

        layer.appendChild(bubbleMd).setAttribute(
            'style',`top: ${topPos}; left: ${leftPos};`
        );
    }
    // Fill layer 4
    for (let i = 0; i < lgBubbles; i++) {
        let topPos = (Math.random() * 100) + '%';
        let leftPos = (Math.random() * 100) + '%';
        let bubbleLg = `
            <div class="bubble bubble-lg"></div>
        `;

        document.getElementsByClassName('layer4').innerHTML(bubbleLg).setAttribute(
            'style', `top: ${topPos}; left: ${leftPos};`
        );
    }

    motionResistance = motionResistance *= -1; // Reverse direction

    // Mouse-parallax function
    // body size is not the same as window size, which is the desired width
    let windowWidth = window.innerWidth || document.body.clientWidth

    if (windowWidth > 1024) {

        window.mousemove(function (event) {

            // Get centre of layer
            let centerX = window.innerWidth / 2;
            let centerY = window.innerWidth / 2;

            // Get mouse coordinates
            let mouseX = event.clientX
            let mouseY = event.clientY

            let layer3X = (mouseX - centerX) / (motionResistance / 0.5)
            let layer3Y = (mouseY - centerY) / (motionResistance / 0.5)

            let layer4X = (mouseX - centerX) / (motionResistance / 0.75)
            let layer4Y = (mouseY - centerY) / (motionResistance / 0.75)

            document.getElementsByClassName('layer3').setAttribute(
                'style', `top: ${layer3Y}; left: ${layer3X};`
            );
            document.getElementsByClassName('layer4').setAttribute(
                'style', `top: ${layer4Y}; left: ${layer4X};`
            );
        });

    } // end if


    // Pop function
    if (windowWidth > 1024) { // Desktop

        document.getElementsByClassName('bubble').mouseover(function () {

            if (this.classList.contains('bubble-wobble')) {
                let thisBubble = this;
                thisBubble.classList.add('bubble-pop');

                setTimeout(() => {
                    thisBubble.hidden = true;
                }, 500);
            } else {
                this.classList.add('bubble-wobble');
            }
        });

    } else { // Mobile

        document.getElementsByClassName('bubble').click(function () {
            let thisBubble = this;

            thisBubble.classList.add('bubble-pop');
            setTimeout(function () {
                thisBubble.hidden = true;
            }, 500);
        });
    }

    return (
        <>
            <div class="layer layer3"></div>
            <div class="layer layer4"></div>
        </>
    )
}
