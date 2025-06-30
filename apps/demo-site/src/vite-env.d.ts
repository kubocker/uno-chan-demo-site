/// <reference types="vite/client" />


interface ImportMetaEnv {
  readonly VITE_STRIPE_PAYMENT_LINK_CAFE_URL: string;
  readonly VITE_STRIPE_PAYMENT_LINK_BOOK_URL: string;
  readonly VITE_STRIPE_PAYMENT_LINK_GAME_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}