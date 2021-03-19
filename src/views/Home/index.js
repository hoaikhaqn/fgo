import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import introVideo from '../../assets/videos/intro.mp4';
export default function FirstScreen() {

    useEffect(() => {
        document.title = "Home | Fate Grand Order"
    }, [])
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {

    })
    return (
        <div id="HomeScreen">
            <div className="poster">
                <div className="poster__wrap">
                    <video autoPlay muted id="bg" src={introVideo}></video>
                </div>
            </div>
        </div>
    )
}
