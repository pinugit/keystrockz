import MainLogo from "./MainLogo";
import MenuItems from "./MenuItems";

export default function NavBar() {
  return (
    <div className="navbarBlurBg h-[80px] border-b-[1px] border-[#878686] px-20 flex justify-between items-center">
      <MainLogo />
      <MenuItems />
    </div>
  );
}
