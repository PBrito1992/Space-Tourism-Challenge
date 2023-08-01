import { Pages } from "@/components/header/navigation";
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { PageWrapper } from "@/components/page-wrapper";

type TCrew = {
  job: string;
  name: string;
  description: string;
  imgSrc: string;
};

const crewData: TCrew[] = [
  {
    job: "Commander",
    name: "Douglas Hurley",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    imgSrc: "/assets/crew/image-douglas-hurley.webp",
  },
  {
    job: "Mission Specialist",
    name: "Mark Shuttleworth",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    imgSrc: "/assets/crew/image-mark-shuttleworth.webp",
  },
  {
    job: "Pilot",
    name: "Victor Glover",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    imgSrc: "/assets/crew/image-victor-glover.webp",
  },
  {
    job: "Flight Engineer",
    name: "Anousheh Ansari",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    imgSrc: "/assets/crew/image-anousheh-ansari.webp",
  },
];

const CrewPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slides: {
      number: crewData.length,
      perView: 1,
      origin: "center",
      spacing: 0,
    },
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
      id={Pages.Crew}
      pageIndex={2}
      title="Meet your crew"
      bgImgSrc="/assets/crew/background-crew-desktop.jpg"
      bgMobileImgSrc="/assets/crew/background-crew-mobile.jpg"
      className="!pb-0"
    >
      <div
        ref={sliderRef}
        className="keen-slider flex-1 lg:me-20 cursor-grab active:cursor-grabbing"
      >
        {crewData.map((c) => (
          <div
            key={c.name}
            className="h-full keen-slider__slide relative mb-8 lg:mb-0"
          >
            <div
              className="w-full lg:w-[568px] aspect-square bg-no-repeat bg-contain bg-center lg:absolute lg:bottom-0 lg:right-0 mt-8 lg:mt-0 border-b border-brand-gray-dark lg:border-0"
              style={{ backgroundImage: `url("${c?.imgSrc}")` }}
            />
            <div className="pt-8 lg:pt-40 ">
              <div className="max-w-md text-center lg:text-left">
                <div className="text-white opacity-50 text-base lg:text-32 uppercase">
                  {c?.job}
                </div>
                <h3 className="text-white text-2xl lg:text-56 uppercase whitespace-nowrap mt-2 lg:mt-8">
                  {c?.name}
                </h3>
                <p className="mt-4 lg:mt-7 text-brand-purple text-15 lg:text-lg leading-8">
                  {c?.description}
                </p>
              </div>
            </div>
          </div>
        ))}
        {loaded && instanceRef.current && (
          <div className="flex justify-center gap-6 absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-0 lg:bottom-20 lg:translate-x-0">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={`w-4 h-4 bg-white rounded-full
                    ${currentSlide === idx ? "opacity-100" : "opacity-50"}`}
                />
              );
            })}
          </div>
        )}
      </div>
    </PageWrapper>
  );
};

export { CrewPage };
