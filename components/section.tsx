import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
}

const Section = ({ children }: SectionProps) => (
  <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:px-0">{children}</div>
);

export default Section;
