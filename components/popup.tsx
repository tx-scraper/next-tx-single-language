import { useEffect, useState } from "react";
import { hasCookie, setCookie } from "cookies-next";
import Script from "next/script";

const Popup = () => {
  const enable = process.env.NEXT_PUBLIC_DIRECT_LINK_ADS;
  const globalJs = process.env.NEXT_PUBLIC_GLOBAL_JS_URL;

  if (!enable || !globalJs) {
    return null;
  }

  const cookieKey = "popup";

  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const referrer = [
      ".google.",
      "bing.",
      "yandex.",
      "facebook.",
      "pinterest.",
      "duckduckgo.",
      ".yahoo.",
      "aol.",
    ];

    const onScroll = () => {
      if (window.pageYOffset >= 200 && !isOpen && !hasCookie(cookieKey)) {
        setOpen(true);
      }
    };

    if (referrer.some((s) => document.referrer.toLowerCase().includes(s))) {
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => {
    setOpen(false);
    setCookie(cookieKey, true);

    window.open(window.location.href, "_blank");
    window.location.href = (window as any).directLink || "/";
  };

  return (
    <>
      <Script src={globalJs}></Script>

      {isOpen && (
        <div className="fixed inset-0 overflow-y-auto transition-all">
          <div className="fixed inset-0 backdrop-blur-xl bg-white/20 transition-all"></div>
          <div className="relative flex min-h-screen items-center justify-center p-8 transition-all md:p-0">
            <div className="relative p-8 max-w-xl bg-white text-center">
              <button
                onClick={close}
                className="w-8 h-8 absolute -top-4 -right-4 text-4xl rounded-full bg-white text-gray-500 flex items-center justify-center hover:text-gray-600"
                aria-label="Close"
                type="button"
              >
                &times;
              </button>
              <div>
                <img
                  src="/recaptcha.jpg"
                  width={400}
                  height={177}
                  className="w-full aspect-auto"
                />
              </div>
              <div>
                <button
                  onClick={close}
                  type="button"
                  className="bg-blue-500 hover:bg-blue-600 px-4 py-2 text-white mt-8"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
