import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main
      className="flex h-full flex-col items-center justify-center
    bg-gray-50"
    >
      <div className="soace-y-6 text-center">
        <h1
          className={cn(
            "text-6xl front-semibold text-gray-700 drop-shadow-md",
            font.className,
          )}
        >
          🔒 Auth
        </h1>
        <p className="text-gray-700 text-lg">A simple authentication service</p>
        <div>
          <LoginButton>
            <Button variant="outline" size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
