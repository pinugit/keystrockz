import { auth } from "@/auth";
import { SignIn } from "../SIgnIn";
import MainLogo from "./MainLogo";
import MenuItems from "./MenuItems";
import { SignOut } from "../SignOut";

export default async function NavBar() {
  const session = await auth();

  console.log(session);

  return (
    <div className="navbarBlurBg h-[80px] border-b-[1px] border-[#878686] px-20 flex justify-between items-center">
      <MainLogo />
      <MenuItems />
      <div className=" width-[1/4]">
        {session?.user ? (
          <>
            <p className="text-[--text-primary]">{session?.user.name}</p>
            <SignOut />
          </>
        ) : (
          <SignIn />
        )}
      </div>
    </div>
  );
}
