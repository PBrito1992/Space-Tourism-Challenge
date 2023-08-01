import { Pages } from "@/components/header/navigation";
import { PageWrapper } from "@/components/page-wrapper";
import { useState, useMemo } from "react";

type TDestination = {
  id: Destinations;
  title: string;
  description: string;
  avgDistance: string;
  travelTime: string;
  imgSrc: string;
};

enum Destinations {
  "Moon" = "Moon",
  "Mars" = "Mars",
  "Europa" = "Europa",
  "Titan" = "Titan",
}

const destinationsNav: Destinations[] = [
  Destinations.Moon,
  Destinations.Mars,
  Destinations.Europa,
  Destinations.Titan,
];

const destinationsData: TDestination[] = [
  {
    id: Destinations.Moon,
    title: "Moon",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    avgDistance: "384,400 km",
    travelTime: "3 days",
    imgSrc: "/assets/destination/image-moon.webp",
  },
  {
    id: Destinations.Mars,
    title: "Mars",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    avgDistance: "225 MIL. km",
    travelTime: "9 months",
    imgSrc: "/assets/destination/image-mars.webp",
  },
  {
    id: Destinations.Europa,
    title: "Europa",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    avgDistance: "628 MIL. km",
    travelTime: "3 years",
    imgSrc: "/assets/destination/image-europa.webp",
  },
  {
    id: Destinations.Titan,
    title: "Titan",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    avgDistance: "1.6 BIL. km",
    travelTime: "7 years",
    imgSrc: "/assets/destination/image-titan.webp",
  },
];

const DestinationPage = () => {
  const [selectedDestination, setSelectedDestination] = useState(
    Destinations.Moon
  );

  const destinationData = useMemo(
    () => destinationsData.find((d) => d.id === selectedDestination),
    [selectedDestination]
  );

  return (
    <PageWrapper
      id={Pages.Destination}
      pageIndex={1}
      title="Pick your destination"
      bgImgSrc="/assets/destination/background-destination-desktop.jpg"
      bgMobileImgSrc="/assets/destination/background-destination-mobile.jpg"
    >
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-11 mt-8 lg:mt-16 mx-20">
        <div
          className="w-64 lg:w-[480px] h-64 lg:h-[480px] bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url("${destinationData?.imgSrc}")` }}
        />
        <div className="w-full lg:max-w-md">
          <ul className="flex gap-6 lg:gap-9 uppercase text-sm lg:text-base">
            {destinationsNav.map((d) => (
              <li
                key={d}
                onClick={() => setSelectedDestination(d)}
                className={`tracking-2.7 cursor-pointer ${
                  selectedDestination === d
                    ? "text-white border-b-[3px] border-white"
                    : "text-brand-purple"
                }`}
              >
                {d}
              </li>
            ))}
          </ul>
          <h3 className="text-white text-[56px] lg:text-[100px] uppercase text-center lg:text-left mt-5 lg:mt-0">
            {destinationData?.title}
          </h3>
          <p className="mt-1 lg:mt-4 text-brand-purple text-15 lg:text-lg leading-8 pb-8 lg:pb-14 border-b border-brand-gray-dark text-center lg:text-left">
            {destinationData?.description}
          </p>
          <div className="mt-7 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-20">
            <div className="flex flex-col items-center lg:items-start gap-3">
              <span className="text-brand-purple text-sm uppercase tracking-2.3">
                Avg. Distance
              </span>
              <span className="text-white text-28 uppercase">
                {destinationData?.avgDistance}
              </span>
            </div>
            <div className="flex flex-col items-center lg:items-start gap-3">
              <span className="text-brand-purple text-sm uppercase tracking-2.3">
                Est. Travel Time
              </span>
              <span className="text-white text-28 uppercase">
                {destinationData?.travelTime}
              </span>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export { DestinationPage };
