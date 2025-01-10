
const images = [
  [
    '/imgs/image1.jpg',
    '/imgs/image2.jpg',
    '/imgs/image3.jpg',
    '/imgs/image4.jpg',
    '/imgs/image5.jpg',
    '/imgs/image6.jpg',
  ],
  [
    '/imgs/image7.jpg',
    '/imgs/image8.jpg',
    '/imgs/image9.jpg',
    '/imgs/image10.jpg',
  ]
];

const Slide = () => {
  return (
    <div className="space-y-4 my-44">
      <div className="relative flex w-full overflow-hidden ">
        <div className="flex min-w-max animate-slide">
          {images[0].map((src, key) => <img key={key} src={src} alt="" className="h-[262px] md:h-[340px] px-2 rounded-[20px]" />)}
        </div>
        <div className="flex min-w-max animate-slide">
          {images[0].map((src, key) => <img key={key} src={src} alt="" className="h-[262px] md:h-[340px] px-2 rounded-[20px]" />)}
        </div>
      </div>
      <div className="relative flex w-full overflow-hidden ">
        <div className="flex min-w-max animate-slide-reverse">
          {images[1].map((src, key) => <img key={key} src={src} alt="" className="h-[262px] md:h-[340px] px-2 rounded-[20px]" />)}
        </div>
        <div className="flex min-w-max animate-slide-reverse">
          {images[1].map((src, key) => <img key={key} src={src} alt="" className="h-[262px] md:h-[340px] px-2 rounded-[20px]" />)}
        </div>
      </div>
    </div>
  )
}

export default Slide;