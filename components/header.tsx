import Link from "next/link";
import process from "process";
import ThemeSwitch from "@/components/theme-switcher";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" passHref aria-label={process.env.NEXT_PUBLIC_SITE_TITLE}>
          <a className="text-2xl font-semibold">
            {process.env.NEXT_PUBLIC_SITE_TITLE}
          </a>
        </Link>
      </div>
      <div>
        <ThemeSwitch />
      </div>
    </header>
  );
};

export default Header;
