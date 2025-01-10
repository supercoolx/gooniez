import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const images = [
  {
    title: "NFTs",
    src: "/imgs/nfts.jpg",
  },
  {
    title: "Plushies",
    src: "/imgs/plushies.jpg",
  },
  {
    title: "Figurines",
    src: "/imgs/figurines.jpg",
  },
  {
    title: "Merch",
    src: "/imgs/merch.jpg",
  },
  {
    title: "Token",
    src: "/imgs/token.jpg",
  },
];

const responsiveSetting = [
  {
    breakpoint: 700,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 400,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
];

const prevArrow = <button className="flex items-center justify-center p-2 bg-white rounded-full opacity-30 hover:opacity-100">
  <img src="/imgs/arrow.png" className="w-5 h-5 rotate-180" alt="" />
</button>;

const nextArrow = <button className="flex items-center justify-center p-2 bg-white rounded-full opacity-30 hover:opacity-100">
<img src="/imgs/arrow.png" className="w-5 h-5" alt="" />
</button>;

const Goonsville = () => {
  return (
    <div className="page-container mt-28 sm:mt-40 md:mt-56 space-y-[42px] sm:space-y-20 md:space-y-[120px]">
      <div className="text-[32px] sm:text-[40px] md:text-5xl text-center font-phonk">GOONSVILLE</div>
      <Slide slidesToShow={1} slidesToScroll={1} responsive={responsiveSetting} prevArrow={prevArrow} nextArrow={nextArrow}>
        {
          images.map((image, key) => <div key={key} className="flex items-end rounded-[20px] overflow-hidden h-[257px] lg:h-[452px] bg-cover bg-center mx-[6px] sm:mx-[10px]" style={{ backgroundImage: `url('${image.src}')` }}>
            <div className="h-20 lg:h-[140px] bg-black/60 w-full flex items-center justify-center">
              <span className="font-phonk text-2xl lg:text-[32px]">{image.title}</span>
            </div>
          </div>)
        }
      </Slide>
    </div>
  )
}

export default Goonsville;