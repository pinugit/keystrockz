import { signOut } from "@/auth";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: "500",
});

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button type="submit" className={`${ubuntu.className} btn-primary`}>
        Sign Out
      </button>
    </form>
  );
}
