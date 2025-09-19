
import video from "@/assets/hero-animation.mp4";
import { HeroButton } from "@/components/ui/GetButton";

export default function TopSection() {
    return (
        <div className="relative flex items-center justify-center h-[calc(100vh-80px)] overflow-hidden">
            <div className="relative z-10 text-center text-white p-4">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                    Balancing
                    <br />
                    Crypto Markets
                </h1>
                <p className="mt-4 max-w-xl mx-auto text-lg text-gray-300">
                    Our fully automated proprietary quantitative trading software provides 24/7 liquidity to 350+ digital assets across 30+ centralized spot and derivative crypto exchanges.
                </p>
                <HeroButton>
                    Get In Touch
                </HeroButton>
                </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0" />
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

        </div>
    );
}
