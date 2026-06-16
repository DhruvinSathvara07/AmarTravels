import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero({ data }) {
  return (
    <section className="relative w-full bg-white overflow-hidden flex flex-col justify-center lg:h-[calc(100vh-80px)] mt-20 py-12 sm:py-16 lg:py-0">
      {/* Premium Ambient Background Accents */}
      <div 
        className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-radial from-slate-100 to-transparent opacity-60 blur-[120px] pointer-events-none -z-10" 
      />
      <div 
        className="absolute bottom-[-15%] right-[20%] w-[600px] h-[600px] rounded-full bg-radial from-[#DC241C]/[0.03] to-transparent opacity-50 blur-[130px] pointer-events-none -z-10" 
      />

      {/* Desktop Right Side Absolute Image - Spans flush to right edge, full height of section */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[50vw] xl:w-[53vw] z-10">
        <HeroImage isAbsolute={true} data={data} />
      </div>

      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-10 lg:px-12 xl:px-16 relative z-20">
        <div className="flex flex-col lg:flex-row lg:items-center">
          {/* Left Side Content - taking up ~46% on desktop */}
          <div className="w-full lg:w-[46%] xl:w-[42%] flex flex-col justify-center">
            <HeroContent data={data} />
          </div>
          
          {/* Mobile/Tablet Inline Image - hidden based on user request */}
          <div className="hidden w-full mt-10">
            <HeroImage isAbsolute={false} data={data} />
          </div>
        </div>
      </div>
    </section>
  );
}

