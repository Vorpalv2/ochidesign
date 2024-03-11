import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "framer-motion";

function Landing() {
  return (
    <div className="w-full h-screen bg-zinc-900 -mb-[5rem] pt-1">
      <div className="textstructure mt-40 px-20 font-semibold">
        {["We Create", "Eye-Opening", "Presentation"].map((element, index) => {
          return (
            <div key={index} className="masker overflow-hidden">
              <div className="w-fit flex">
                {index === 1 && (
                  <motion.img
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: [0.5, 0, 0.75, 0.2], duration: 0.4 }}
                    className="w-[8vw] h-[5vw] relative top-[1.8vh] rounded-lg mr-4"
                    src={`https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg`}
                    alt="promotionArt"
                  />
                )}
                <h1 className="uppercase text-[6vw] font-['Founders Grotesk X Cond-Lg'] leading-[6vw] tracking-tighter">
                  {element}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center pr-4">
        {[
          "For Public and Private Companies",
          "From the First Pitch to IPO",
        ].map((element, index) => {
          return (
            <p
              key={index}
              className="text-md font-light tracking-tight leading-none py-5 px-20"
            >
              {element}
            </p>
          );
        })}
        <div className="Start flex items-center gap-3">
          <div className=" hover:cursor-pointer px-5 py-2 border-[1px] border-zinc-500 font-light text-md uppercase rounded-full">
            Start the Project
          </div>
          <div className="hover:cursor-pointer w-10 h-10 flex items-center justify-center border-[1px] rounded-full border-zinc-500">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Landing;
