interface props {
  positionLeft: number;
  positoinTop: number;
}
export default function Cursor({ positionLeft, positoinTop }: props) {
  return (
    <div
      className="cursor absolute text-3xl text-[--primary-600] transition-all duration-[200ms] ease-in-out"
      style={{ left: positionLeft, top: positoinTop }}
    >
      |
    </div>
  );
}
