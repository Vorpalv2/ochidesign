function Marquee() {
  return (
    <div className="w-full h-[50vh] bg-[#004D43] py-10 ">
      <div className="text border-t-2 border-b-2 mt-[7vh] border-zinc-300 flex whitespace-nowrap gap-10 overflow-hidden">
        <h1 className="animate-left-to-right text-[16vw] -tracking-[20px] leading-none font-['Founders_Grotesk_X-Condensed] font-semibold uppercase -mb-[10]">
          We are ochi
        </h1>
        <h1 className="animate-left-to-right text-[16vw] -tracking-[20px] leading-none font-['Founders_Grotesk_X-Condensed] font-semibold uppercase -mb-[10]">
          We are ochi
        </h1>
        <h1 className="animate-left-to-right text-[16vw] -tracking-[20px] leading-none font-['Founders_Grotesk_X-Condensed] font-semibold uppercase -mb-[10]">
          We are ochi
        </h1>
      </div>
    </div>
  );
}

export { Marquee };
