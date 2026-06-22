import Marquee from "react-fast-marquee";
import avax from "@/assets/market_logo/avax.svg";
import btc from "@/assets/market_logo/btc.svg";
import doge from "@/assets/market_logo/doge.svg";
import eth from "@/assets/market_logo/eth.svg";
import ftx from "@/assets/market_logo/ftx.svg";
import hbar from "@/assets/market_logo/hbar.svg";
import ksm from "@/assets/market_logo/ksm.svg";
import luna from "@/assets/market_logo/luna.svg";
import uni from "@/assets/market_logo/uni.svg";

const TickerItem = ({ icon, symbol, price }: { icon: string; symbol: string; price: string }) => (
  <div className="flex items-center space-x-2 mx-4">
    {icon && <img src={icon} alt={symbol} className="h-6 w-6" />}
    <div>
      <p className="font-bold">{price}</p>
      <p className="text-sm text-gray-500">{symbol}</p>
    </div>
  </div>
);

export function TradingMarquee() {
  const tickerData = [
    { symbol: "DOGE", price: "0.28106", icon: doge }, 
    { symbol: "MATIC", price: "$0.3794", icon: eth },
    { symbol: "BITCOIN", price: "$0.00001343", icon: btc },
    { symbol: "FTX", price: "$2.544", icon: ftx },
    { symbol: "LUNA", price: "$1.82", icon: luna },
    { symbol: "KSM", price: "$52.34", icon: ksm },
    { symbol: "AVAX", price: "$17.23", icon: avax },
    { symbol: "HBAR", price: "$0.0593", icon: hbar },
    { symbol: "UNI", price: "$5.43", icon: uni },

  ];

  return (
    <div className="relative -mt-13 bg-white border-t border-b border-gray-200 text-black">
      <div className="flex items-center divide-x divide-gray-200">

        <div className="px-8 py-4">
          <p className="font-bold text-lg">TRADING</p>
        </div>

        <div className="flex-1 overflow-hidden">
          <Marquee pauseOnHover={false} speed={50}>
            <div className="flex items-center">
              {[...tickerData, ...tickerData].map((item, index) => (
                <TickerItem key={index} icon={item.icon} price={item.price} symbol={item.symbol} />
              ))}
            </div>
          </Marquee>
        </div>
        
      </div>
    </div>
  );
}