import { signIn } from "@/auth";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: "500",
});

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button type="submit" className={`${ubuntu.className} btn-primary`}>
        Signin with Google
      </button>
    </form>
  );
}
