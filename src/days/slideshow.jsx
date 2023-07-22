import React, { Component } from 'react';

class Slideshow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            const { currentSlide } = this.state;
            this.setState({ currentSlide: (currentSlide + 1) % this.props.images.length });
        }, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { images } = this.props;
        const { currentSlide } = this.state;

        return (
            <div className="slideshow-container">
                <div className="slideshow">
                    <div
                        className="slides"
                        style={{
                            transform: `translateX(-${currentSlide * 100}%)`,
                            transition: 'transform 0.5s ease-in-out'
                        }}
                    >
                        {images.map((image, index) => (
                            <div key={index} className="slide">
                                <img src={image} alt={`Image ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="line"></div>
            </div>
        );
    }
}

export default Slideshow;
