import { HeroButton } from "@/components/ui/GetButton";

export function ContactSection() {
  return (
    <div className="relative -mt-18 bg-[#111111] text-white py-24 sm:py-32 px-4">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-48 bg-blue-600/30 rounded-full blur-3xl -z-0" />
      <div className="relative z-10 container mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
          Contact Us
        </h2>
        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          We are always open to discuss new value-adding partnerships. Do reach out if you are an exchange or a project looking for liquidity; an algorithmic trader or a software developer looking to improve the markets with us or just have a great idea you can't wait to share with us!
        </p>
        <div className="mb-20">
          <HeroButton>
            Get In Touch
          </HeroButton>
        </div>
      </div>
    </div>
  );
}
