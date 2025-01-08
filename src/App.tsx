const App = () => {
  return (
    <div className="container mx-auto px-7">
      <div className="flex items-center justify-between py-7">
        <div className="">
          <img src="/imgs/logo.png" className="h-24" alt="" />
        </div>
        <div className="">
          <img src="/imgs/gooniez.png" className="w-48" alt="" />
        </div>
        <div className="px-8 py-3 bg-[#191919] rounded-[17px] flex gap-10">
          <a href="#">
            <img src="/imgs/dexscreener.png" alt="" className="w-[25px]" />
          </a>
          <a href="#">
            <img src="/imgs/telegram.png" alt="" className="w-[34px]" />
          </a>
          <a href="#">
            <img src="/imgs/x.png" alt="" className="w-8" />
          </a>
          <a href="#">
            <img src="/imgs/dextools.png" alt="" className="w-6" />
          </a>
          <a href="#" className="font-phonk text-[18px]">BUY NOW</a>
        </div>
        <div className="flex items-center gap-[18px]">
          <div className="font-phonk text-[18px]">Fr7Y3MsPTsdFOMO1er<span className="font-sans font-extrabold">...</span></div>
          <button>
            <img src="/imgs/copy.png" alt="" className="w-8 h-8" />
          </button>
        </div>
      </div>

      <div className="space-y-10 py-52">
        <div className="flex justify-center">
          <img src="/imgs/gang.png" alt="" className="w-[1243px]" />
        </div>
        <div className="flex justify-center">
          <div className="text-center text-2xl font-phonk max-w-[800px]">
          THE GLOBALLY KNOWN IP GOONIEZ WITH A NARRATIVE THAT MADE IT IMPOSSIBLE TO IGNORE
          </div>
        </div>
      </div>

      <div className="mt-[108px] space-y-48">
        <div className="text-5xl text-center font-phonk">TEAM</div>
        <div className="grid grid-cols-3 text-center gap-y-28">
          <div className="flex flex-col items-center gap-6 px-4">
            <div className="font-phonk text-[32px]">Danny Chaos</div>
            <div className="text-2xl">LEAD ARTIST</div>
            <div className="text-2xl">CREDITS: SHOWTIME ALL ACCESS<br />DAZN:  BEHIND THE SCENES</div>
          </div>
          <div className="flex flex-col items-center gap-6 px-4">
            <div className="font-phonk text-[32px]">Aitch K</div>
            <div className="text-2xl">HEAD OF STRATEGY</div>
            <div className="text-2xl">CREDITS: NFTNITRO & HOTWHEELS</div>
          </div>
          <div className="flex flex-col items-center gap-6 px-4">
            <div className="font-phonk text-[32px]">Thierry Demers</div>
            <div className="text-2xl">ANIMATION DIRECTOR</div>
            <div className="text-2xl">CREDITS: X-MEN, TRANSFORMERS, JURASSIC PARK & FAST & FURIOUS</div>
          </div>
          <div className="flex flex-col items-center gap-6 px-4">
            <div className="font-phonk text-[32px]">Karim G</div>
            <div className="text-2xl">HEAD OF MARKETING</div>
          </div>
          <div className="flex flex-col items-center gap-6 px-4">
            <div className="font-phonk text-[32px]">Mathiue Floury</div>
            <div className="text-2xl">ANIMATION RIGGING & LIGHTING</div>
            <div className="text-2xl">CREDITS: JUSTICE LEAGUE, STAR TREK & WONDER WOMAN</div>
          </div>
          <div className="flex flex-col items-center gap-6 px-4">
            <div className="font-phonk text-[32px]">Akylles</div>
            <div className="text-2xl">CHIEF LEGAL OFFICER</div>
          </div>
          <div className="flex flex-col items-center col-start-2 gap-6">
            <div className="font-phonk text-[32px]">Cynth</div>
            <div className="text-2xl">COMMUNITY MANAGER</div>
          </div>
        </div>
      </div>

      <div className="mt-56 space-y-[120px]">
        <div className="text-5xl text-center font-phonk">GOONSVILLE</div>
      </div>

      <div className="pb-12 text-2xl text-center mt-96 font-phonk">GOONIEZ GANG <span className="font-sans font-extrabold">@</span> 2025</div>
    </div>
  )
}

export default App;