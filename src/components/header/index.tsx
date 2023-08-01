import Logo from "/assets/shared/logo.svg";
import { Navigation } from "@/components/header/navigation";

const Header = () => (
  <header className="w-screen pt-8 lg:pt-10 px-6 lg:px-14 flex justify-between items-center fixed top-0 z-20">
    <img src={Logo} alt="" className="w-10 h-10 lg:w-12 lg:h-12" />

    <div className="hidden lg:block flex-1 h-px bg-white bg-opacity-25 relative start-16 z-10" />

    <Navigation />
  </header>
);

export { Header };
