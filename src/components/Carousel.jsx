import { useEffect, useState } from "react";
import { slides } from "../data/ImageData";



const Carousel = () => {

    const [current, setCurrent] = useState(0);
    const [isMouseActive, SetIsMouseActive] = useState(false);

    const prevSlide = () => {
        setCurrent((prev) => {
            return prev === 0 ? slides.length - 1 : prev - 1
        })
    }

    const nextSlide = () => {
        setCurrent((prev) => {
            return prev === slides.length - 1 ? 0 : prev + 1;
        })
    }

    useEffect(() => {
        if (isMouseActive) return;
        const autoSlide = setInterval(() => {
            setCurrent((prev) => {
                return prev === slides.length - 1 ? 0 : prev + 1
            });
        }, 3000);

        return () => clearInterval(autoSlide);
    }, [isMouseActive])

    return (
        <div className="carousel"
            onMouseEnter={() => SetIsMouseActive(true)}
            onMouseLeave={() => SetIsMouseActive(false)}
        >

            <div className="slide">

                <img src={slides[current].image} alt={slides[current].title} />

                <div className="overlay">
                    <div className="overlay-text">
                        {
                            current === 0 ?
                                <h3 className="greet-msg">Welcome to </h3> : null
                        }
                        <h2 className="title">{slides[current].title} </h2>
                        <p className="subtitle">{slides[current].subtitle}</p>

                        {
                            current === 0 ?
                                <div className="carousel-button">
                                    <button className="yellow-button"> {slides[current]?.btn1} </button>
                                    <button className="secondary-button"> {slides[current]?.btn2} </button>
                                </div>
                                : null
                        }

                    </div>

                </div>
                <div className="buttons">
                    <button onClick={nextSlide} className="next">
                        <svg style={{ width: "35px", height: "35px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
                        </svg>

                    </button>
                    <button onClick={prevSlide} className="prev">
                        <svg style={{ width: "35px", height: "35px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path d="M9.195 18.44c1.25.714 2.805-.189 2.805-1.629v-2.34l6.945 3.968c1.25.715 2.805-.188 2.805-1.628V8.69c0-1.44-1.555-2.343-2.805-1.628L12 11.029v-2.34c0-1.44-1.555-2.343-2.805-1.628l-7.108 4.061c-1.26.72-1.26 2.536 0 3.256l7.108 4.061Z" />
                        </svg>

                    </button>
                </div>
            </div>
        </div>
    )
}

export default Carousel;