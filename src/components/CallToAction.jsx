import Image from "next/image";

import { track } from "@amplitude/analytics-browser";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import backgroundImage from "@/images/background-call-to-action.jpg";

import { useSingletonContext } from '@/pages/SingletonContextProvider';

export function CallToAction() {

  const { openGetStartedModal } = useSingletonContext();

  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-[#dc8e3b] py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 opacity-60 min-w-full"
        style={{
          mixBlendMode: "color-burn",
        }}
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Stop Breaking Prod
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Try PipeRider today and stop worrying about breaking prod.
            PipeRider is free to get started, and offers flexibility for teams of different sizes and budgets.
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <Button
              color="white"
              className="mt-10"
              onClick={() => {
                track("[Action] Click CTA - Stop Breaking Prod - Get Started");
                openGetStartedModal();
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
