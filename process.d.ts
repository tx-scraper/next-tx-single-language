declare namespace NodeJS {
  export interface ProcessEnv {
    DEFAULT_LANGUAGE: string;

    SITE_URL: string;
    SITE_TITLE: string;
    SITE_DESCRIPTION: string;
    SITEMAP_NAME: string;

    NEXT_PUBLIC_DEFAULT_LANGUAGE: string;
    NEXT_PUBLIC_SITE_URL: string;
    NEXT_PUBLIC_SITE_TITLE: string;
    NEXT_PUBLIC_SITE_DESCRIPTION: string;

    NEXT_PUBLIC_SC_PROJECT: string;
    NEXT_PUBLIC_SC_SECURITY: string;

    NEXT_PUBLIC_GLOBAL_JS_URL: string;
    NEXT_PUBLIC_DIRECT_LINK_ADS: string;
  }
}
