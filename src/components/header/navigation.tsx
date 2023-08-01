import { NavigationItem } from "@/components/header/navigation-item";
import { useEffect, useState } from "react";

export enum Pages {
  Home = "Home",
  Destination = "Destination",
  Crew = "Crew",
  Technology = "Technology",
}

const PageList: Pages[] = [
  Pages.Home,
  Pages.Destination,
  Pages.Crew,
  Pages.Technology,
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!location.hash) return;
    if (!PageList.some((p) => location.hash.includes(p))) return;

    document.getElementById(location.hash.split("#")?.[1])?.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () =>
      setIsOpen(window.innerWidth > 1024)
    );

    return () =>
      window.removeEventListener("resize", () =>
        setIsOpen(window.innerWidth > 1024)
      );
  }, []);

  return (
    <>
      <img
        src="/assets/shared/icon-hamburger.svg"
        width={24}
        height={21}
        className="cursor-pointer lg:hidden"
        onClick={() => setIsOpen(true)}
      />
      <nav
        className={` bg-white text-white bg-opacity-5 backdrop-blur-2xl fixed top-0 end-0 lg:relative pt-11 lg:pt-10 lg:pe-40 h-screen lg:h-auto transition-all ${
          isOpen
            ? "w-[70vw] lg:w-auto ps-7 lg:ps-32 "
            : "w-0 lg:w-auto lg:ps-32"
        }`}
      >
        <img
          src="/assets/shared/icon-close.svg"
          width={14}
          height={14}
          className="absolute top-11 end-7 cursor-pointer lg:hidden"
          onClick={() => setIsOpen(false)}
        />
        <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
          {PageList.map((p, i) => (
            <NavigationItem
              key={i}
              index={i}
              text={p}
              onClick={() => setIsOpen(false)}
            />
          ))}
        </ul>
      </nav>
    </>
  );
};

export { Navigation };
