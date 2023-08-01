import { Pages } from "@/components/header/navigation";
import { PageWrapper } from "@/components/page-wrapper";
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useIsMobile } from "@/hook/use-is-mobile";

type TTechnology = {
  name: string;
  description: string;
  desktopImgSrc: string;
  mobileImgSrc: string;
};

const technologyData: TTechnology[] = [
  {
    name: "Launch Vehicle",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    desktopImgSrc: "/assets/technology/image-launch-vehicle-portrait.jpg",
    mobileImgSrc: "/assets/technology/image-launch-vehicle-landscape.jpg",
  },
  {
    name: "Spaceport",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    desktopImgSrc: "/assets/technology/image-spaceport-portrait.jpg",
    mobileImgSrc: "/assets/technology/image-spaceport-landscape.jpg",
  },
  {
    name: "Space Capsule",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    desktopImgSrc: "/assets/technology/image-space-capsule-portrait.jpg",
    mobileImgSrc: "/assets/technology/image-space-capsule-landscape.jpg",
  },
];

const TechnologyPage = () => {
  const isMobile = useIsMobile();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slides: {
      number: technologyData.length,
      perView: 1,
      origin: "center",
      spacing: 0,
    },
    vertical: !isMobile,
    mode: "snap",
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <PageWrapper
      id={Pages.Technology}
      pageIndex={3}
      title="Space Launch 101"
      bgImgSrc="/assets/technology/background-technology-desktop.jpg"
      bgMobileImgSrc="/assets/technology/background-technology-mobile.jpg"
    >
      <div className="flex flex-col lg:flex-row items-center gap-20 w-screen lg:-ms-40 lg:ps-40 relative">
        {loaded && instanceRef.current && (
          <div className="flex lg:flex-col justify-center gap-4 lg:gap-6 pt-10 absolute top-1/3 lg:relative lg:top-0">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={`w-10 lg:w-20 h-10 lg:h-20 rounded-full border border-white border-opacity-10
                    ${
                      currentSlide === idx
                        ? "bg-white text-brand-dark-blue"
                        : "bg-transparent text-white"
                    }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        )}
        <div
          ref={sliderRef}
          className="h-[568px] keen-slider flex-1 cursor-grab active:cursor-grabbing"
        >
          {technologyData.map((t) => (
            <div key={t.name} className="h-full keen-slider__slide relative">
              <div
                className="w-full lg:w-[568px] aspect-[375/170] lg:aspect-square bg-no-repeat bg-contain bg-center lg:absolute lg:bottom-0 lg:right-0 mt-8 lg:mt-0"
                style={{
                  backgroundImage: `url("${
                    isMobile ? t?.mobileImgSrc : t?.desktopImgSrc
                  }")`,
                }}
              />
              <div className="pt-28 lg:pt-40 mx-8 lg:mx-0">
                <div className="max-w-md text-center lg:text-left">
                  <div className="text-brand-purple tracking-2.7 opacity-50 uppercase text-sm lg:text-base">
                    The Terminology...
                  </div>
                  <h3 className="text-white text-2xl lg:text-56 uppercase whitespace-nowrap mt-2 lg:mt-3">
                    {t?.name}
                  </h3>
                  <p className="mt-4 text-brand-purple text-15 lg:text-lg leading-8">
                    {t?.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export { TechnologyPage };
