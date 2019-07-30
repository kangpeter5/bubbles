
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./bubbles.css"

export default function Bubbles() {

    // CONTROLS
    const bubbliness = 8; // Recommended between 1 and 10
    let motionResistance = 3; // Recommended between 1 and 10

    // Create layers
    let layer3 = document.createElement('div')
    layer3.classList.add('layer','layer3')
    document.body.appendChild(layer3);

    let layer4 = document.createElement('div')
    layer4.classList.add('layer','layer4')
    document.body.appendChild(layer4);

    // Create bubbles
    const mdBubbles = bubbliness * 3;
    const lgBubbles = bubbliness * 2;

    // Fill layer 3
    for (let i = 0; i < mdBubbles; i++) {
        let topPos = (Math.random() * 100) + '%'
        let leftPos = (Math.random() * 100) + '%'
        let bubbleMd = document.createElement('div')

        bubbleMd.classList.add('bubble','bubble-md')
        bubbleMd.style = `top: ${topPos}; left: ${leftPos}`;

        bubbleMd.addEventListener("click", (e) => {

            e.target.classList.add('bubble-pop');
            setTimeout(function () {
                e.target.hidden = true;
            }, 500);
        });
        let layer = document.getElementsByClassName('layer3')[0]
        layer.appendChild(bubbleMd)
    }
    // Fill layer 4
    for (let i = 0; i < lgBubbles; i++) {
        let topPos = (Math.random() * 100) + '%';
        let leftPos = (Math.random() * 100) + '%';
        let bubbleLg = document.createElement('div')

        bubbleLg.classList.add('bubble','bubble-lg')
        bubbleLg.style = `top: ${topPos}; left: ${leftPos}`;
    
        bubbleLg.addEventListener("click", (e) => {

            e.target.classList.add('bubble-pop');
            setTimeout(function () {
                e.target.hidden = true;
            }, 500);
        });

        let layer = document.getElementsByClassName('layer4')[0]
        layer.appendChild(bubbleLg)
    }

    motionResistance = motionResistance *= -1; // Reverse direction

    // Mouse-parallax function
    // body size is not the same as window size, which is the desired width
    let windowWidth = window.innerWidth || document.body.clientWidth

    if (windowWidth > 1024) {

        window.addEventListener('mousemove', (e) => {

            // Get centre of layer
            let centerX = window.innerWidth / 2;
            let centerY = window.innerWidth / 2;

            // Get mouse coordinates
            let mouseX = e.clientX
            let mouseY = e.clientY

            let layer3X = (mouseX - centerX) / (motionResistance / 0.5)
            let layer3Y = (mouseY - centerY) / (motionResistance / 0.5)

            let layer4X = (mouseX - centerX) / (motionResistance / 0.75)
            let layer4Y = (mouseY - centerY) / (motionResistance / 0.75)

            document.body.getElementsByClassName('layer3').style = `top: ${layer3Y}; left: ${layer3X};`;
            document.body.getElementsByClassName('layer4').style = `top: ${layer4Y}; left: ${layer4X};`;
        });

        //Pop function
        /*document.body.getElementsByClassName('bubble').addEventListener("mouseover", (e) => {

            if (e.classList.contains('bubble-wobble')) {
                e.target.classList.add('bubble-pop');

                setTimeout(() => {
                    e.target.hidden = true;
                }, 500);
            } else {
                e.target.classList.add('bubble-wobble');
            }
        });*/

    } 
    // end if

    return (
        <>
            <div className="layer layer3"></div>
            <div className="layer layer4"></div>
        </>
    );
}
