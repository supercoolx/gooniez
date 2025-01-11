import { useState, useEffect } from "react"

const images: string[] = [
  '/imgs/arrow.png',
  '/imgs/copy.png',
  '/imgs/cursor.png',
  '/imgs/dexscreener.png',
  '/imgs/dextools.png',
  '/imgs/discord.png',
  '/imgs/figurines.jpg',
  '/imgs/gang.png',
  '/imgs/gooniez.png',
  '/imgs/image1.jpg',
  '/imgs/image10.jpg',
  '/imgs/image2.jpg',
  '/imgs/image3.jpg',
  '/imgs/image4.jpg',
  '/imgs/image5.jpg',
  '/imgs/image6.jpg',
  '/imgs/image7.jpg',
  '/imgs/image8.jpg',
  '/imgs/image9.jpg',
  '/imgs/logo.png',
  '/imgs/merch.jpg',
  '/imgs/merch.png',
  '/imgs/nfts.jpg',
  '/imgs/plushies.jpg',
  '/imgs/telegram.png',
  '/imgs/token.jpg',
  '/imgs/x.png',
];

const Loading = ({ children }: { children: JSX.Element[] }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const imagePromises = Promise.all(images.map(src => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve();
        img.onerror = (e) => {
          console.error(e);
          resolve();
        }
      });
    }));

    const maxDelay = new Promise((resolve) => setTimeout(resolve, 15000));

    Promise.race([imagePromises, maxDelay])
      .then(() => {
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  return loading ? <div className="flex items-center justify-center w-screen h-screen">
    <svg className="ip" viewBox="0 0 256 128" width="256px" height="128px" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#5ebd3e" />
          <stop offset="33%" stopColor="#ffb900" />
          <stop offset="67%" stopColor="#f78200" />
          <stop offset="100%" stopColor="#e23838" />
        </linearGradient>
        <linearGradient id="grad2" x1="1" y1="0" x2="0" y2="0">
          <stop offset="0%" stopColor="#e23838" />
          <stop offset="33%" stopColor="#973999" />
          <stop offset="67%" stopColor="#009cdf" />
          <stop offset="100%" stopColor="#5ebd3e" />
        </linearGradient>
      </defs>
      <g fill="none" strokeLinecap="round" strokeWidth="16">
        <g className="ip__track" stroke="#ddd">
          <path d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56" />
          <path d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64" />
        </g>
        <g strokeDasharray="180 656">
          <path className="ip__worm1" stroke="url(#grad1)" strokeDashoffset="0" d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56" />
          <path className="ip__worm2" stroke="url(#grad2)" strokeDashoffset="358" d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64" />
        </g>
      </g>
    </svg>
  </div> : <>{children}</>;
}

export default Loading;