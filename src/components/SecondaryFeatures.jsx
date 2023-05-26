/* eslint-disable @next/next/no-img-element */
import { useId } from "react";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import clsx from "clsx";

import { Container } from "@/components/Container";
import { recentPosts } from "@/lib/siteMeta";
import { Button } from "./Button";

function Feature({ feature, isActive, className, ...props }) {
  return (
    <div
      className={clsx(className, !isActive && "opacity-75 hover:opacity-100")}
      {...props}
    >
      <div
        className={clsx(
          "w-9 rounded-lg",
          isActive ? "bg-blue-600" : "bg-slate-500"
        )}
      >
        <svg aria-hidden="true" className="h-9 w-9" fill="none">
          <feature.icon />
        </svg>
      </div>
      <h3
        className={clsx(
          "mt-6 text-sm font-medium",
          isActive ? "text-blue-600" : "text-slate-600"
        )}
      >
        {feature.name}
      </h3>
      <p className="mt-2 font-display text-xl text-slate-900">
        {feature.summary}
      </p>
      <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
    </div>
  );
}

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Latest Blog Posts
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700 mb-12">
            Because you’d probably be a little confused if we suggested you
            complicate your everyday business tasks instead.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => {
            return (
              <div
                key={post.href}
                className=" rounded-lg shadow-lg border border-zinc-300 relative hover:scale-110 transition"
              >
                <a href={post.href} className="absolute inset-0"></a>
                <div className="flex flex-col">
                  <img
                    src={post.thumbnail}
                    alt="Blog post image"
                    className="w-full rounded-t-lg"
                  />
                  <h3 className="font-display text-xl tracking-tight text-slate-900 p-4">
                    {post.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mt-12">
          <Button href={"https://medium.com/inthepipeline/"}>Read More</Button>
        </div>
      </Container>
    </section>
  );
}
