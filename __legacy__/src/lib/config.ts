
/**
 * サイトの設定
 */
export const site = {
  name: import.meta.env.VITE_PUBLIC_KUBOCCHI_NAME!,
  postcode: import.meta.env.VITE_PUBLIC_KUBOCCHI_POSTCODE!,
  address: import.meta.env.VITE_PUBLIC_KUBOCCHI_ADDRESS!,
  email: import.meta.env.VITE_PUBLIC_KUBOCCHI_EMAIL!,
  phone: import.meta.env.VITE_PUBLIC_KUBOCCHI_PHONE!
}

/**
 * Stripe Payment Links
 * 設定
 */
export const paymentLinks = {
  cafe: import.meta.env.VITE_PUBLIC_STRIPE_PAYMENT_LINK_CAFE_URL!,
  book: import.meta.env.VITE_PUBLIC_STRIPE_PAYMENT_LINK_BOOK_URL!,
  game: import.meta.env.VITE_PUBLIC_STRIPE_PAYMENT_LINK_GAME_URL!,
}
