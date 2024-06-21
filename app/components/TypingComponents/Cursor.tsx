interface props {
  positionLeft: number;
  positoinTop: number;
}
export default function Cursor({ positionLeft, positoinTop }: props) {
  return (
    <div
      className="cursor absolute bg-[--primary-600] transition-all duration-[150ms] ease-in-out w-[2px] h-9 rounded-full"
      style={{ left: positionLeft, top: positoinTop }}
    ></div>
  );
}
