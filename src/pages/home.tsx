import { Pages } from "@/components/header/navigation";
import { useIntersection } from "@/hook/use-intersection";
import { useRef } from "react";

const HomePage = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useIntersection(wrapperRef, () => (location.hash = `#${Pages.Home}`));

  return (
    <div
      id={Pages.Home}
      ref={wrapperRef}
      className="h-screen flex flex-col lg:flex-row justify-end lg:justify-between items-center lg:items-end gap-20 lg:gap-0 px-6 lg:px-40 pb-8 lg:pb-32 bg-cover bg-no-repeat bg-[url('/assets/home/background-home-mobile.jpg')] lg:bg-[url('/assets/home/background-home-desktop.jpg')]"
    >
      <div className="flex flex-col lg:gap-6 w-full lg:max-w-md">
        <h1 className="flex flex-col items-center lg:items-start lg:gap-6 uppercase">
          <span className="flex-shrink-0 text-brand-purple tracking-4.725 whitespace-nowrap text-base lg:text-28">
            So, you want to travel to
          </span>
          <span className="flex-shrink-0 font-bellefair text-[80px] lg:text-[150px] text-white">
            Space
          </span>
        </h1>
        <p className="text-15 lg:text-lg text-brand-purple leading-8 text-center lg:text-left">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="w-[150px] lg:w-72 h-[150px] lg:h-72 flex justify-center items-center rounded-full bg-white text-brand-dark-blue font-bellefair text-xl lg:text-32 uppercase tracking-[2px] relative group cursor-pointer">
        <div className="w-0 lg:w-[450px] h-0 lg:h-[450px] flex justify-center items-center rounded-full bg-transparent opacity-10 absolute group-hover:bg-white" />
        Explore
      </div>
    </div>
  );
};

export { HomePage };
