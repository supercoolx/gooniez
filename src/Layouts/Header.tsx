import { useState } from "react";
import { motion, useScroll } from "motion/react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { toast } from "react-toastify";

const address = "Fr7Y3MsPTsdoOIR987uufnHE0fhsFweHE";

const Header = () => {
  const { scrollYProgress } = useScroll();
  const [showHeader, setShowHeader] = useState(false);

  useScrollPosition(({ prevPos, currPos }) => {
    setShowHeader(currPos.y < prevPos.y);
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(address).then(() => {
      toast.success('Address copied.');
    }).catch(err => {
      console.error(err);
      toast.error('Error while copying.');
    });
  }

  return (
    <div className="relative w-full">
      <motion.div className="h-[2px] z-[9] fixed top-0 origin-left w-full bg-white" style={{ scaleX: scrollYProgress }} />
      <div className={`w-full px-[11px] md:px-7 z-10 fixed top-[2px] transition-transform duration-300 ${showHeader ? 'lg:-translate-y-full' : 'translate-y-0'}`}>
        <div className={`page-container w-full flex items-center justify-between py-[11px] lg:py-7`}>
          <div className="flex items-center gap-6">
            <motion.a initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} href="#">
              <img src="/imgs/logo.png" className="h-[55px] xl:h-24" alt="" />
            </motion.a>
            <motion.a initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} href="#">
              <img src="/imgs/gooniez.png" className="w-[111px] xl:w-48" alt="" />
            </motion.a>
          </div>
          <div className="px-8 py-3 bg-[#191919] rounded-[17px] hidden lg:flex gap-10">
            <motion.a initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} href="#">
              <img src="/imgs/dexscreener.png" alt="" className="w-[25px]" />
            </motion.a>
            <motion.a initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} href="#">
              <img src="/imgs/discord.png" alt="" className="w-[36px]" />
            </motion.a>
            <motion.a initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} href="#">
              <img src="/imgs/x.png" alt="" className="w-8" />
            </motion.a>
            <motion.a initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} href="#">
              <img src="/imgs/dextools.png" alt="" className="w-6" />
            </motion.a>
            <motion.a initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} href="#" className="font-phonk text-[18px]">BUY NOW</motion.a>
          </div>
          <div className="flex items-center gap-[18px]">
            <div className="font-phonk text-[12px] sm:text-[18px]">{address.slice(0, 10)}<span className="font-sans font-extrabold">...</span></div>
            <motion.button onClick={handleCopy} animate={{ scale: 1 }} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <img src="/imgs/copy.png" alt="" className="w-[18px] h-[18px] sm:w-8 sm:h-8" />
            </motion.button>
          </div>
        </div>
      </div>
      <div className={`w-full px-[11px] md:px-7 z-10 fixed block lg:hidden transition-[top] duration-300 ${showHeader ? 'top-3' : '-top-16'}`}>
        <div className="px-5 sm:px-8 md:px-16 py-3 bg-[#191919] rounded-[17px] flex justify-between">
          <motion.a initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} href="#">
            <img src="/imgs/dexscreener.png" alt="" className="w-[25px]" />
          </motion.a>
          <motion.a initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} href="#">
            <img src="/imgs/discord.png" alt="" className="w-[36px]" />
          </motion.a>
          <motion.a initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} href="#">
            <img src="/imgs/x.png" alt="" className="w-8" />
          </motion.a>
          <motion.a initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} href="#">
            <img src="/imgs/dextools.png" alt="" className="w-6" />
          </motion.a>
          <motion.a initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} href="#" className="font-phonk text-[18px]">BUY NOW</motion.a>
        </div>
      </div>
    </div>
  )
}

export default Header;