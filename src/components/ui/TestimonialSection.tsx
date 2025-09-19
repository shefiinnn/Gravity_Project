import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import logo2 from "@/assets/logo/binance@2x.png";
import logo3 from "@/assets/logo/bitbank@2x.png";
import logo4 from "@/assets/logo/bitfinex@2x.png";
import { ArrowLeft, ArrowRight } from 'lucide-react';
const testimonials = [
    {
        text: "Since 2019, Gravity team has been an astounding market maker for Bitkub. They have proven themselves to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven to be a very reliable and trustworthy partner. We strongly advocate Gravity Team as they have been an...",
        author: "Atthakrit Chimplapibul",
        title: "Co-founder & CEO of Bitkub",
        logo: logo2,
    },
    {
        text: "Gravity Team is a key partner for Bitso, and their professionalism has been instrumental in deploying our liquidity strategy and expansion ambitions across Latin America. Gravity Team’s vast market expertise and flexibility to support our business requirements in lightning speed have permitted us to catch up with our product debt, list new tokens in record time, and offer attractive spreads for our end users. We are grateful to partner with Gravity Team and excited to continue working together in making crypto useful.",
        author: "Alberto Sanchez",
        title: "CEO of Bitso",
        logo: logo3,
    },
    {
        text: "Gravity Team has been a supportive partner that has provided many opportunities to our business at an early stage of growth, be it in financing, networking, or marketing. We are extremely happy with our choice of Gravity as a business partner and can highly recommend to other crypto projects.",
        author: "Szymon Jankowski",
        title: "Founder of Valr",
        logo: logo4,
    },
];

export function TestimonialsSlider() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (

        <div className="bg-[#111111] py-16 sm:py-20 px-4 text-center">
            <div className="container mx-auto max-w-screen-lg">

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                    We are in a good company
                </h2>

                <p className="mt-4 text-gray-400 text-sm sm:text-base md:text-lg">
                    Our partnerships have delivered great value to our projects and we're happy to share some of their feedback below
                </p>

                <div className="flex justify-center my-8 space-x-4">
                    <button
                        onClick={scrollPrev}
                        className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-to-br from-blue-400 to-yellow-500/50 text-white flex items-center justify-center transition-transform hover:scale-105"
                        aria-label="Scroll Previous"
                    >
                        <ArrowLeft className="h-6 w-6 sm:h-7 sm:w-7" />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-to-br from-blue-400 to-yellow-500/50 text-white flex items-center justify-center transition-transform hover:scale-105"
                        aria-label="Scroll Next"
                    >
                        <ArrowRight className="h-6 w-6 sm:h-7 sm:w-7" />
                    </button>
                </div>

                <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
                    <div className="flex">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="flex-[0_0_100%] min-w-0 px-2 sm:px-4">

                                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-300 leading-relaxed max-w-4xl mx-auto">
                                    "{testimonial.text}"
                                </p>

                                <div className="mt-8 flex items-center justify-center space-x-4">
                                    <img src={testimonial.logo} alt={testimonial.author} className="h-12 w-12 rounded-full object-cover" />
                                    <div>
                                        <p className="font-bold text-white">{testimonial.author}</p>
                                        <p className="text-gray-500">{testimonial.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}