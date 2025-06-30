import IconCoffee from './assets/coffee.svg';
import IconBook from './assets/book.svg';
import IconDeviceGamepad2 from './assets/device-gamepad-2.svg';
import { PaymentLinks } from './constant';

const StripePaymentLinks = [
  PaymentLinks.cafeUrl,
  PaymentLinks.bookUrl,
  PaymentLinks.gameUrl
]

export const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-4 flex items-center justify-between">
        {/* ロゴエリア */}
        <div className="flex items-center space-x-4">
          <a
            href="/"
            className="text-2xl font-bold text-gray-800 tracking-tight hover:text-primary no-underline"
           >
            uno chan
          </a>
          <span className="text-sm text-gray-500 hidden sm:inline">with unocss animations</span>
        </div>

        {/* アクションエリア */}
        <div className="flex items-center space-x-3">
          <span className="text-sm font-semibold text-gray-700">support me !</span>
          
          {[IconCoffee, IconBook, IconDeviceGamepad2].map((icon, i) => (
            <a key={i} target="_blank" href={`${StripePaymentLinks[i]}`} className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center transition-all duration-200">
              <img src={icon} alt={`icon-${i}`} className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};
