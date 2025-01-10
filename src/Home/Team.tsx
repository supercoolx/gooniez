import { motion } from "motion/react";

const members = [
  {
    name: "Danny Chaos",
    title: "LEAD ARTIST",
    description: [
      "CREDITS: SHOWTIME ALL ACCESS",
      "DAZN:  BEHIND THE SCENES"
    ]
  },
  {
    name: "Aitch K",
    title: "HEAD OF STRATEGY",
    description: [
      "CREDITS: NFTNITRO & HOTWHEELS"
    ]
  },
  {
    name: "Thierry Demers",
    title: "ANIMATION DIRECTOR",
    description: [
      "CREDITS: X-MEN, TRANSFORMERS, JURASSIC PARK & FAST & FURIOUS"
    ]
  },
  {
    name: "Karim G",
    title: "HEAD OF MARKETING",
    description: []
  },
  {
    name: "Mathiue Floury",
    title: "ANIMATION RIGGING & LIGHTING",
    description: [
      "CREDITS: JUSTICE LEAGUE, STAR TREK & WONDER WOMAN"
    ]
  },
  {
    name: "Akylles",
    title: "CHIEF LEGAL OFFICER",
    description: []
  },
  {
    name: "Cynth",
    title: "COMMUNITY MANAGER",
    description: []
  },
];

const Team = () => {
  return (
    <div className="page-container mt-[105px] sm:mt-[160px] md:mt-[224px] space-y-12 sm:space-y-20 md:space-y-48">
      <div className="text-[32px] sm:text-[40px] md:text-5xl text-center font-phonk">TEAM</div>
      <div className="grid grid-cols-1 text-center sm:grid-cols-2 lg:grid-cols-3 gap-y-8 sm:gap-y-28">
        {
          members.map((member, key) => <motion.div key={key} initial={{ transform: "translate(0, 100px)", opacity: 0 }} whileInView={{ transform: "translate(0, 0px)", opacity: 1 }} className="flex flex-col items-center px-4 lg:last:col-start-2">
            <div className="font-phonk text-[24px] sm:text-[28px] md:text-[32px]">{member.name}</div>
            <div className="text-[20px] sm:text-2xl md:mt-12">{member.title}</div>
            <div className="text-[20px] sm:text-2xl mt-8 md:mt-12 max-w-80">{member.description.map((text, key2) => <p key={key2}>{text}</p>)}</div>
          </motion.div>)
        }
      </div>
    </div>
  )
}

export default Team;