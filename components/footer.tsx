import Link from "next/link";

const Footer = () => (
  <footer>
    <div className="mt-16 mb-8 flex flex-col items-center">
      <div className="flex space-x-4 text-gray-500 dark:text-gray-400">
        <Link href="/about" passHref>
          <a>About</a>
        </Link>
        <Link href="/contact" passHref>
          <a>Contact</a>
        </Link>
        <Link href="/privacy" passHref>
          <a>Privacy</a>
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
