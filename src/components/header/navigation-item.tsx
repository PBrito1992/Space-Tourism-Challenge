import { FC, useState, useEffect } from "react";

type TNavigationItem = {
  index: number;
  text: string;
  onClick: () => void;
};

const NavigationItem: FC<TNavigationItem> = ({ index, text, onClick }) => {
  const [isSelected, setIsSelected] = useState(() =>
    location.hash.includes(text)
  );

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => setIsSelected(location.hash.includes(text)),
      { capture: true }
    );

    return () =>
      window.removeEventListener("scroll", () =>
        setIsSelected(location.hash.includes(text))
      );
  }, [text]);

  return (
    <li onClick={onClick}>
      <a
        href={`#${text}`}
        className={`inline-block cursor-pointer uppercase space-x-3 tracking-2.7 pb-10 lg:border-b-[3px] ${
          isSelected
            ? "border-white text-brand-dark-blue font-extrabold lg:text-inherit lg:font-normal"
            : "border-transparent"
        }`}
      >
        <span className="font-bold">{index.toString().padStart(2, "0")}</span>
        <span>{text}</span>
      </a>
    </li>
  );
};

export { NavigationItem };
