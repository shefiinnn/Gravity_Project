import logo1 from "@/assets/logo/9CCjJYuc_400x400.png";
import logo2 from "@/assets/logo/binance@2x.png";
import logo3 from "@/assets/logo/bitbank@2x.png";
import logo4 from "@/assets/logo/bitfinex@2x.png";
import logo5 from "@/assets/logo/Bitkub-Logo-Square.png";
import logo6 from "@/assets/logo/bitso@2x.png";
import logo7 from "@/assets/logo/Cryptocom.jpg";
import logo8 from "@/assets/logo/bitstamp@2x.png";
import logo9 from "@/assets/logo/kranken@2x.png";
const column1 = [
    { name: "Bit", logo: logo1 },
    { name: "Bitoasis", logo: logo2 },
    { name: "Bitkub", logo: logo5 },
    { name: "Bitso", logo: logo6 },


];

const column2 = [
    { name: "Bitfinex", logo: logo3 },
    { name: "Valr", logo: logo4 },
    { name: "Crypto", logo: logo7 },
    { name: "Bitstamp", logo: logo8 },
    { name: "Kraken", logo: logo9 },

];

const ScrollingColumn = ({ items, animationClass }: { items: { name: string; logo: string }[]; animationClass: string }) => (
    <div className={animationClass}>

        {[...items, ...items].map((item, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-800/50 rounded-lg flex flex-col items-center justify-center h-28 w-36 md:h-32 md:w-48">
                <img src={item.logo} alt={item.name} className="h-10 md:h-12" />
                <p className="mt-2 text-white text-xs md:text-sm text-center">{item.name}</p>
            </div>
        ))}
    </div>
);
export function PartnersSection() {
    return (
        <div className="bg-[#111111] py-20 px-4">
            <div className="container mx-auto flex flex-col md:flex-row items-center">


                <div className="md:w-1/3 text-center md:text-left mb-10 md:mb-0">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Our Partners &<br />Friends
                    </h2>
                </div>
                <div className="w-full md:w-2/3 flex flex-row justify-center gap-4 overflow-hidden h-80 md:h-96">
                    <ScrollingColumn items={column1} animationClass="scroll-up" />
                    <ScrollingColumn items={column2} animationClass="scroll-down" />
                </div>

            </div>
        </div>
    );
}
