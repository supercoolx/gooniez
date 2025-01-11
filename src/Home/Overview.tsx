import { motion } from "motion/react";

const Overview = () => {
  return (
    <div className="space-y-1 mt-36 sm:space-y-5 md:space-y-10 page-container md:mt-72">
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex justify-center scale-0">
        <img src="/imgs/gang.png" alt="" className="w-[1243px]" />
      </motion.div>
      <div className="flex justify-center">
        <motion.div initial={{ transform: "translate(-100px, 0)", opacity: 0 }} animate={{ transform: "translate(0, 0)", opacity: 1 }} transition={{ delay: 0.5 }} className="text-center text-[11px] sm:text-lg md:text-2xl font-phonk max-w-[800px]">
          THE GLOBALLY KNOWN IP GOONIEZ WITH A NARRATIVE THAT MADE IT IMPOSSIBLE TO IGNORE
        </motion.div>
      </div>
    </div>
  )
}

export default Overview;