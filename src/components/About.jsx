const About = () => {
  return (
    <div className="w-full p-20 text-black bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl">
      <h1 className="font-['Neue_Montreal] leading-[3.5vw] text-[3.5vw] tracking-tight">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to <span className=" underline">raise funds</span>,{" "}
        <span className="underline"> sell products</span>,
        <span className="underline">explain complex ideas</span>, and{" "}
        <span className="underline"> hire great people.</span>
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]">
        <div className="w-1/2">
          <h1 className="text-7xl">Our approach:</h1>
          <button className=" flex gap-10 items-center px-10 mt-10 py-6 bg-zinc-900 rounded-full text-white">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[60vh] rounded-3xl bg-[#8b9e4c]"></div>
      </div>
    </div>
  );
};

export default About;
