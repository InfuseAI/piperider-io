import Image from "next/image";

import { track } from "@amplitude/analytics-browser";

import IconGithub from "@/components/IconGithub";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import logoLaravel from "@/images/logos/laravel.svg";
import logoMirage from "@/images/logos/mirage.svg";
import logoStatamic from "@/images/logos/statamic.svg";
import logoStaticKit from "@/images/logos/statickit.svg";
import logoTransistor from "@/images/logos/transistor.svg";
import logoTuple from "@/images/logos/tuple.svg";
import clsx from "clsx";

import { useSingletonContext } from '@/pages/SingletonContextProvider';

export const FancyUnderline = ({ className, children, ...props }) => {

  return (
    <span className={clsx("relative whitespace-nowrap", className)}>
      <svg
        aria-hidden="true"
        viewBox="0 0 418 42"
        className="absolute left-0 top-3/4 h-[0.58em] w-full fill-orange-300/80"
        preserveAspectRatio="none"
      >
        <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
      </svg>
      <span className="relative text-orange-800">{children}</span>
    </span>
  );
};

export function Hero() {

  const { openGetStartedModal } = useSingletonContext();

  return (
    <>
    <Container className="pb-16 pt-20 text-center lg:pt-32">
      {/*<h1 onClick={() => {
        openGetStartedModal();
      }}>
        Test Button
      </h1>*/}
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        The {" "}
        <span className="relative whitespace-nowrap">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute left-0 top-2/3 h-[0.35em] w-full fill-orange-300/70"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative">Open-Source</span>
        </span><br/>
        <span className="text-orange-600">Data Reliability Toolkit</span> <br/>
        for{" "}
        <span className="relative whitespace-nowrap">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute left-0 top-2/3 h-[0.35em] w-full fill-orange-300/70"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative">dbt</span>
        </span>{" "}
        Projects
      </h1>
    </Container>

    <div className="table mx-auto">
      <Image
        src="/images/hero/PipeRider - Hero Image - Collage - SQL Diff, CLI, Pull Request, Lineage Diff, Profile, Slack Alert, dbt Metric Diff.png"
        alt="PipeRider dbt metrics"
        width={1600}
        height={1200}
      />
    </div>

    <Container className="pb-16 pt-8 text-center">
      <div className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        <p>{"Don't"} break prod.</p>
        <p>
          Boost <FancyUnderline>team confidence</FancyUnderline> and velocity.{" "}
        </p>
        <p>
          Understand impact <FancyUnderline>Before you merge.</FancyUnderline>
        </p>
      </div>
      <pre className="rounded-lg bg-zinc-800 text-left max-w-[500px] mx-auto p-4 mt-8">
        <code className="text-white block">
          <span className="text-white/70">$</span> pip install piperider
        </code>
        <code className="text-white block">
          <span className="text-white/70">$</span> piperider compare
        </code>
      </pre>
      <div className="mt-10 flex justify-center gap-x-6">
        <Button 
          color="orange"
          onClick = {() => {
            track('[Action] Click Hero Get Started');
            openGetStartedModal();
          }}
        >
          <span className="mx-3">Get Started Today</span>
        </Button>
        <Button
          href="https://github.com/InfuseAI/piperider"
          variant="outline"
          onClick = {() => {
            track('[Action] Click Hero GitHub');
          }}
        >
          <IconGithub />
          <span className="ml-3">Open Source Github</span>
        </Button>
      </div>
    </Container>

    </>
  );
}
