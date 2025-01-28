import { motion } from "motion/react";

const Story = () => {
  return (
    <div className="page-container mt-[105px] sm:mt-[160px] md:mt-[224px] space-y-12 sm:space-y-16 md:space-y-24">
      <motion.div initial={{ transform: "translate(0, 100px)", opacity: 0 }} whileInView={{ transform: "translate(0, 0px)", opacity: 1 }} className="text-[32px] sm:text-[40px] md:text-5xl text-center font-phonk">THE STORY</motion.div>
      <div className="text-center text-base sm:text-lg md:text-[24px] max-w-[1029px] mx-auto">
        <motion.p initial={{ transform: "translate(0, 100px)", opacity: 0 }} whileInView={{ transform: "translate(0, 0px)", opacity: 1 }}>GOONIEZ IS TEAM OF EXPERIENCED CREATIVE THINKERS WITH EXTENSIVE AMBITION AND GOALS WITH A MISSION OF BUILDING A WEB3 BRAND THAT FOSTERS CREATIVITY, COMMUNITY AND CHAOS.</motion.p><br />
        <motion.p initial={{ transform: "translate(0, 100px)", opacity: 0 }} whileInView={{ transform: "translate(0, 0px)", opacity: 1 }}>ASSEMBLED AND BORN FROM CHAOS, SINCE THE DAWN OF TIME, DUCKS HAVE BEEN HUNTED, CAGED & EXPERIMENTED ON. FLYING   THE SKIES WASN’T SAFE AND DUCKS WERE ON THE VERGE OF EXTINCTION.</motion.p><br />
        <motion.p initial={{ transform: "translate(0, 100px)", opacity: 0 }} whileInView={{ transform: "translate(0, 0px)", opacity: 1 }}>LOCKED AWAY IN A DESERTED LAB A MAD SCIENTIST EXPERIMENTING ON MALLARD DUCKS DECIDED TO SWITCH THE FORMULA IN AN ATTEMPT TO CLONE THEM. INSTEAD, THE CHANGE IN FORMULA CAUSED THE DUCKS TO GO INTO A STATE OF CHAOS. AND FROM THAT, GOONIEZ GANG WERE BORN.</motion.p><br />
      </div>
    </div>
  )
}

export default Story;