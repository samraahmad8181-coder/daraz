import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import slide1 from '../assets/slidebar.png'
import slide2 from '../assets/2.png'
import slide3 from '../assets/3.png'
import slide4 from '../assets/4.png'
import slide5 from '../assets/5.png'
import slide6 from '../assets/6.png'
import slide7 from '../assets/7.png'
import slide8 from '../assets/8.png'
import slide9 from '../assets/9.png'
import slide10 from '../assets/10.png'
import slide11 from '../assets/11.png'
import slide12 from '../assets/12.png'
import slide13 from '../assets/13.png'
import slide14 from '../assets/14.png'

const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10, slide11, slide12, slide13, slide14]

function Hero() {
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const timer = window.setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % slides.length)
        }, 4000)

        return () => window.clearInterval(timer)
    }, [])

    const goToPrevious = () => {
        setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length)
    }

    const goToNext = () => {
        setActiveIndex((prev) => (prev + 1) % slides.length)
    }

    return (
        <section className="mx-auto mt-6 flex max-w-7xl flex-col items-center justify-center px-3 sm:px-6 lg:px-8">
            <div className="flex w-full items-center justify-center gap-2 sm:gap-4 lg:gap-6">
                <div className="relative flex-1 overflow-hidden rounded-[24px] bg-white shadow-xl">
                    <img
                        src={slides[activeIndex]}
                        alt={`Hero slide ${activeIndex + 1}`}
                        className="h-[220px] w-full object-cover object-center sm:h-[320px] lg:h-[420px]"
                    />

                    <button
                        type="button"
                        aria-label="Previous"
                        onClick={goToPrevious}
                        className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-md transition hover:bg-white sm:left-4"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>

                    <button
                        type="button"
                        aria-label="Next"
                        onClick={goToNext}
                        className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-md transition hover:bg-white sm:right-4"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>

                    <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2 sm:bottom-5">
                        {slides.map((slide, index) => (
                            <button
                                key={slide}
                                type="button"
                                aria-label={`Go to slide ${index + 1}`}
                                onClick={() => setActiveIndex(index)}
                                className={`h-2.5 w-2.5 rounded-full border border-white/80 transition ${activeIndex === index ? 'bg-white' : 'bg-white/50 hover:bg-white/80'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
