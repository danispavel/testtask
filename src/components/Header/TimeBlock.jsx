
export default function TimeBlock({ value, label }) {
  return (
    <div className="text-center bg-[rgba(255,255,255,0.8)] rounded-[3px] py-[2px] px-[4px] text-[#1b281d] flex flex-col items-center w-fit font-roboto">
      <p className="font-bold text-sm">{value}</p>
      <p className="text-[8px]">{label}</p>
    </div>
  );
}