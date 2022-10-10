export const SC_PROJECT = process.env.NEXT_PUBLIC_SC_PROJECT;
export const SC_SECURITY = process.env.NEXT_PUBLIC_SC_SECURITY;

// export const isEnabled = true;

export const isEnabled =
  process.env.NODE_ENV === "production" && SC_PROJECT && SC_SECURITY;

export const pageview = (url: string) => {
  (window as any)._statcounter.record_pageview();
};
