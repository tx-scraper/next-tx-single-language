import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";
import ScrollTop from "./scroll-top";
import Section from "./section";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <Section>
    <div className="flex h-screen flex-col justify-between">
      <Header />

      <main className="mb-auto">{children}</main>

      <Footer />

      <ScrollTop />
    </div>
  </Section>
);

export default Layout;
