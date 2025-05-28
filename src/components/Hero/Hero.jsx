import HeroLogo from '../../assets/hero-logo.webp';
import Stars from '../../assets/stars.webp';
import PaymentMethod from '../../assets/payment-methods.png';

const listItems = [
  '✔️ Visible Results in as little as 2-4 Days*',
  '✔️ Relaxes muscles without any risk*',
  '✔️ Powered by Syn-Ake™ Peptide: Clinically shown to reduce wrinkle depth by 52% in 28 days¹',
  '✔️ Works For All Skin Types At Any Age*',
  '✔️ Hydrating + Skin-Firming Without Fillers or Freezing',
];

export default function Hero() {
  return (
    <section className="max-w-[1280px] mx-auto flex flex-col xl:flex-row items-center justify-center gap-10 px-4 text-[#1b281d] [text-rendering:optimizeSpeed] box-border">
      <div className="flex flex-col w-[60%] py-8">
        <div className="flex items-center justify-center mb-5 self-center">
          <img
            src={Stars}
            alt="five stars rate"
            loading="lazy"
            className="block max-w-[70px] h-auto"
          />
          <span className="text-[14px] pl-2 tracking-[0.01em] font-gotham">
            103,743+ Happy Noor Customers!
          </span>
        </div>

        <h1 className="m-0 font-bold text-center box-border [text-rendering:optimizeSpeed] font-roboto text-[24px] xl:text-[40px] leading-[1.3em] text-black">
          <span className="block font-bold text-[#525a31] font-roboto text-[24px] xl:text-[40px] leading-[1.3em] text-center">
            The Korean Needle-Free Botox Alternative:
          </span>
          Lift Deep Wrinkles and Revives a Youthful, Natural Look… In a Few
          Days*
        </h1>

        <img
          src={HeroLogo}
          alt="Hero Logo"
          loading="eager"
          className="block sm:hidden mt-4 text-[#1b281d] text-[20px] leading-[28px] font-gotham box-border max-w-full mx-auto [text-rendering:optimizeSpeed]"
        />

        <ul className="flex flex-col items-center text-[#1b281d] font-gotham text-[16px] leading-[28px] box-border mx-auto [text-rendering:optimizeSpeed] my-5">
          {listItems.map((item, index) => (
            <li
              key={index}
              className="flex tab-[4] font-sans list-none text-[16px] sm:text-[20px] leading-[28px] text-[#1b281d] box-border border-0 border-solid border-gray-200 [text-rendering:optimizeSpeed] w-fit items-center justify-center text-center mb-[0] sm:mb-[2px] "
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mx-auto text-[20px] leading-[28px] text-[#1b281d] font-gotham box-border text-center [text-rendering:optimizeSpeed]">
          <a
            href="https://noorhairoffers.com/skin-cream/offers"
            className="box-border font-inherit cursor-pointer text-white px-5 py-3 bg-[#525a31] rounded-[10px] text-[20px] border-none font-[Roboto-Bold] font-bold block mx-auto"
          >
            50% OFF FOR EXISTING CUSTOMERS!
          </a>
          <p className="text-[12px] leading-[28px] text-[#1b281d] font-gotham font-normal text-center capitalize box-border block my-[8px] mx-auto [text-rendering:optimizeSpeed]">
            100% Satisfaction. 180-Day Money Back Guarantee
          </p>
          <img
            src={PaymentMethod}
            alt="Payment Methods PayPal"
            className="block mx-auto max-w-full h-auto text-[20px] leading-[28px] text-[#1b281d] font-gotham text-center box-border [text-rendering:optimizeSpeed]"
            loading="lazy"
          />
        </div>
      </div>

      <div className="hidden sm:flex text-[#1b281d] text-[20px] leading-[28px] box-border w-[70%] xl:self-end [text-rendering:optimizeSpeed] font-gotham flex self-center">
        <picture>
          <source media="(max-width: 460px)" />
          <img
            src={HeroLogo}
            alt="Hero Logo"
            loading="eager"
            className="w-full max-w-full h-auto block [text-rendering:optimizeSpeed] [font-family:'Gotham-Regular',sans-serif]"
          />
        </picture>
      </div>
    </section>
  );
}
