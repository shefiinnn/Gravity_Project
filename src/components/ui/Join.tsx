export function Join() {
    return (
        <div className="bg-[#111111] text-white py-20 sm:py-24 lg:py-32 px-4">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                <div className="relative text-center md:text-left">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl -z-0" /> 
                    <h2 className="relative z-10 text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                        Join<br />Gravity Team
                    </h2>
                </div>
                <div className="flex flex-col gap-8 text-lg text-gray-300">
                    <p>
                        Join our community of innovators, problem solvers and owners who apply scientific discovery techniques to make crypto markets a better place for everyone.
                    </p>
                    <p>
                        As we emphasize it in our name — Gravity Team, we are a team. A team of bright, talented people, each masters of their specialty, curious about the world and eager to solve the new exciting cryptocurrency market problems, build cool stuff and have fun whilst doing so!
                    </p>
                    <a
                        href="#"
                        className="
              group inline-flex items-center gap-2 font-semibold text-slate-400
              bg-gradient-to-r from-blue-400 to-yellow-500
              bg-no-repeat [background-position:0_100%] [background-size:0%_2px]
              motion-safe:transition-all motion-safe:duration-300
              hover:[background-size:55%_2px]
            "
                    ><span className="bg-gradient-to-br from-blue-400 to-yellow-500 bg-clip-text text-transparent">
                        Learn more about working with us </span><span className="text-blue-400">→</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

