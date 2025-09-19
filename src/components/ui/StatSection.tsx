const stats = [
  { value: "~$500 billion", label: "cumulative trading volume to date" },
  { value: "1%", label: "of the global crypto spot trading volume" },
  { value: "~60", label: "Gravity Teammates (& growing)" },
  { value: "30+", label: "leading global and local crypto exchanges" },
  { value: "2017", label: "start, crypto-natives" },
  { value: "1,400+", label: "crypto-asset pairs" },
  { value: "24/7", label: "liquidity" },
  { value: "~400 mil", label: "trades done to date" },
];
export function StatSection() {

  const customGradient = 'linear-gradient(135deg, #665DCD 0%, #5FA4E6 44.76%, #D2AB67 100%)';
  return (
    <div className="relative -mt-40 bg-[#111111] py-20 px-4">
      <div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-[1px] gap-[1px]"
        style={{ backgroundImage: customGradient }}
      >        
        {stats.map((stat, index) => (
          <div
            key={index}
            className="relative group bg-[#1C1C1C] transition-colors duration-300 ease-in-out hover:bg-transparent"
          >
            <div className="relative p-10 flex flex-col justify-center items-center text-center h-full">
              <p className="text-4xl font-bold text-white">{stat.value}</p>
              <p className="mt-2 text-white">{stat.label}</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
