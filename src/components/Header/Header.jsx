import CountdownTimer from './CountDownTimer';
import Logo from '../../assets/logo.webp';

export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-center h-11 bg-[#1b281d]">
        <div className="flex w-fit items-center gap-6">
          <h1 className="font-roboto text-[#fdfcfb] text-[14px] font-normal leading-[1]">
            EXISTING CUSTOMER DEAL ENDING IN 6 HOURS
          </h1>
          <CountdownTimer />
        </div>
      </div>
      <div className="flex bg-white py-4 flex justify-center">
        <img src={Logo} alt="Logo" className="block mx-auto w-[167px]" />
      </div>
    </header>
  );
}
