import { Component } from "react";
import { Parallax } from 'react-parallax';


import './home.css'


export class Home extends Component {
    render() {
        return (
            <main>
                <Parallax 
                    blur = {{ min: -15, max: 15 }}
                    bgImage = { require("../img/1.jpg") }
                    strength = { -100 }
                >
                    <div className="title" >
                        <div className="quote">
                            <h2>Tales Of Lovers</h2>
                            <h2>URVASHI AND KETAN</h2>
                        </div>
                    </div>
                </Parallax>
                <div className="partition">| | |</div>
                <Parallax 
                    blur = {{ min: -15, max: 15 }}
                    bgImage = { require("../img/2.jpg") }
                    strength = { -100 }
                >
                    <div>
                        <div className="links">
                            <a href="/#/theproposal">The Proposal</a>
                            <a href="/#/felloveragain">Fell Over Again</a>
                            <a href="/#/firstdate">First Date</a>
                            <a href="/#/longtimenosee">Long Time No See</a>
                            <a href="/#/luckcalledher">Luck Called Her</a>
                            <a href="/#/urgetomeet">Urge To Meet</a>
                            <a href="/#/realproposal">Real Proposal</a>
                        </div>
                    </div>
                </Parallax>
            



                {/* <VerticalParallaxWithBlurAndImage
                    blurIntensity = { 0.005 }
                    speed = { .25 }
                    backgroundImage = { require('../img/1.jpg') }
                    className = "1"
                >
                        <div className="title" >
                            <div className="quote">
                                <h2>Tales Of Lovers</h2>
                                <h2>URVASHI AND KETAN</h2>
                            </div>
                        </div>
                </VerticalParallaxWithBlurAndImage>
                {/* <div className="partition">| | |</div> */}
                {/* <VerticalParallaxWithBlurAndImage
                    blurIntensity = { 0.005 }
                    speed = { .25 }
                    backgroundImage = { require('../img/2.jpg') }
                    className = "2"
                >
                </VerticalParallaxWithBlurAndImage> */} 
                {/* <Parallax
                    blur = {{ min: -15, max: 15 }}
                    bgImage = { require('../img/2.jpg') }
                    bgImageAlt = "Something"
                >
                </Parallax> */}
            </main>
        );
    }
}


export default Home