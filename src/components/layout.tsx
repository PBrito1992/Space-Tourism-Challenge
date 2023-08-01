import { FC, PropsWithChildren } from "react";
import { Header } from "@/components/header";

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <div className="w-full max-h-screen flex flex-col justify-between bg-no-repeat bg-cover bg-center overflow-x-hidden [&::-webkit-scrollbar]:hidden scroll-smooth">
    <Header />
    <main>{children}</main>
  </div>
);

export { Layout };
