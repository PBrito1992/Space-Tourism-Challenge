import { Pages } from "@/components/header/navigation";
import { useIntersection } from "@/hook/use-intersection";
import { useIsMobile } from "@/hook/use-is-mobile";
import { FC, PropsWithChildren, useRef } from "react";

type TPageWrapper = {
  id: Pages;
  pageIndex: number;
  title: string;
  bgImgSrc: string;
  bgMobileImgSrc: string;
  className?: string;
};

const PageWrapper: FC<PropsWithChildren<TPageWrapper>> = ({
  id,
  pageIndex,
  title,
  bgImgSrc,
  bgMobileImgSrc,
  className = "",
  children,
}) => {
  const isMobile = useIsMobile();
  const wrapperRef = useRef<HTMLDivElement>(null);
  useIntersection(wrapperRef, () => (location.hash = `#${id}`));

  return (
    <div
      id={id}
      ref={wrapperRef}
      className={`h-auto lg:h-screen flex flex-col justify-end items-center lg:items-start px-6 lg:px-40 pt-28 lg:pt-56 pb-8 lg:pb-32 bg-no-repeat bg-cover bg-center ${className}`}
      style={{
        backgroundImage: `url(${isMobile ? bgMobileImgSrc : bgImgSrc})`,
      }}
    >
      <h2 className="text-base lg:text-28 text-white tracking-2.7 lg:tracking-4.725 space-x-4 lg:space-x-7">
        <span className="opacity-25 ">
          {pageIndex.toString().padStart(2, "0")}
        </span>
        <span className="uppercase whitespace-nowrap">{title}</span>
      </h2>
      {children}
    </div>
  );
};

export { PageWrapper };
