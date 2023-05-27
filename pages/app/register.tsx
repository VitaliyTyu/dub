import { useState } from "react";
import { signIn } from "next-auth/react";
import Meta from "@/components/layout/meta";
import BlurImage from "#/ui/blur-image";
import Background from "@/components/shared/background";
import { Google } from "@/components/shared/icons";
import Button from "#/ui/button";

export default function Register() {
  const [clickedGoogle, setClickedGoogle] = useState(false);

  return (
    <div className="flex h-screen w-screen justify-center bg-gray-50">
      <Meta title="Sign up for Dub" />
      <Background />
      <div className="z-10 mt-[calc(30vh)] h-fit w-full max-w-md overflow-hidden border border-gray-100 sm:rounded-2xl sm:shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <BlurImage
            src="/_static/logo.png"
            alt="Dub.sh logo"
            className="h-10 w-10 rounded-full"
            width={20}
            height={20}
          />
          <h3 className="text-xl font-semibold">Create your Dub account</h3>
          <p className="text-sm text-gray-500">
            Get started for free. No credit card required.
          </p>
        </div>

        <div className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16">
          <Button
            text="Continue with Google"
            onClick={() => {
              setClickedGoogle(true);
              signIn("google");
            }}
            loading={clickedGoogle}
            icon={<Google className="h-4 w-4" />}
          />
          <Button
            text="Continue with SAML SSO"
            disabled
            disabledTooltip="SAML/SSO is coming soon"
          />
        </div>
      </div>
    </div>
  );
}
