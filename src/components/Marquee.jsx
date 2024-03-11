import { motion } from "framer-motion";
function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-speed=".02"
      data-scroll-section
      // data-scroll-offset="100%,-100%"
      className="w-full h-[60vh] bg-[#004D43] py-14 rounded-tl-3xl rounded-tr-3xl "
    >
      <div className="text border-t-[1px] border-b-[1px] my-[4vh] border-zinc-300 flex whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
          className="text-[16vw] pr-20 -tracking-[20px] font-bold leading-none font-['Founders_Grotesk_X-Condensed] uppercase -mb-[10]"
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
          className=" text-[16vw] pr-20 -tracking-[20px] leading-none font-['Founders_Grotesk_X-Condensed] font-bold uppercase -mb-[10]"
        >
          We are ochi
        </motion.h1>
        {/* <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
          className=" text-[16vw] pr-20 -tracking-[20px] leading-none font-['Founders_Grotesk_X-Condensed] font-semibold uppercase -mb-[10]"
        >
          We are ochi
        </motion.h1> */}
      </div>
    </div>
  );
}

export { Marquee };
