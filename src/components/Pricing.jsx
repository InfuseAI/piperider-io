import clsx from "clsx";

import { track } from "@amplitude/analytics-browser";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

function SwirlyDoodle({ className }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 281 40"
      className={className}
      preserveAspectRatio="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
      />
    </svg>
  );
}

function CheckIcon({ className }) {
  return (
    <svg
      aria-hidden="true"
      className={clsx(
        "h-6 w-6 flex-none fill-current stroke-current",
        className
      )}
    >
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        strokeWidth={0}
      />
      <circle
        cx={12}
        cy={12}
        r={8.25}
        fill="none"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Plan({ pre_title, name, price, unit = "", description, pre_features, href, features, featured = false, has_design_partnership = false }) {
  return (
    <section
      className={clsx(
        "flex flex-col rounded-3xl px-6 sm:px-8",
        featured ? "order-first bg-black invert py-8 lg:order-none" : "lg:py-8"
      )}
    >
      <p
        className={clsx(
          "mt-2",
          featured ? "text-white" : "text-slate-100"
        )}
      >
        {pre_title}
      </p>
      <h3 className="mt-1 font-display text-2xl text-white">{name}</h3>
      <p
        className={clsx(
          "mt-4 text-base",
          featured ? "text-white" : "text-slate-400"
        )}
      >
        {description}
      </p>
      <p className="font-display text-5xl font-light tracking-tight text-white pt-6 pb-2">
        <span>{price}</span>
        <span className="text-xl">
          {unit ? `/ ${unit}` : ""}
        </span>
      </p>
      <Button
        href={href}
        variant={featured ? "solid" : "outline"}
        color="white"
        className="mt-6"
        aria-label={`Get started with the ${name} plan for ${price}`}
        onClick = {() => {
          track(`[Action] Click Pricing ${name} plan`);
        }}
      >
        {name === "Enterprise" ? "Contact us" : "Get started"}
      </Button>

      <p
        className={clsx(
          "mt-10 text-base",
          featured ? "text-white" : "text-slate-400"
        )}
      >
        {pre_features}
      </p>
      <ul
        role="list"
        className={clsx(
          "mt-4 flex flex-col gap-y-3 text-sm",
          featured ? "text-white" : "text-slate-200"
        )}
      >
        {features.map((feature) => (
          <li key={feature} className="flex">
            <CheckIcon className={featured ? "text-white" : "text-slate-400"} />
            <span className="ml-4">{feature}</span>
          </li>
        ))}
      </ul>

      {has_design_partnership && (
        <>
          <hr className="mt-6 mb-4"/>
          <p
            className={clsx(
              "mt-2",
              featured ? "text-white" : "text-slate-100"
            )}
          >
            Get Pro for 80% off
          </p>
          <h3 className="mt-1 font-display text-2xl text-white">Design Partner</h3>
          <p
            className={clsx(
              "mt-4 text-base",
              featured ? "text-white" : "text-slate-400"
            )}
          >
            Become a Design Partner and get 80% off the Pro plan.
          </p>
          <p className="font-display text-5xl font-light tracking-tight text-white pt-6 pb-2">
            <span>$200</span>
            <span className="text-xl">
              / month
            </span>
          </p>
          <Button
            href="mailto:product@piperider.io?subject=Design%20Partnership&body=Dear%20PipeRider,%20I%20would%20like%20to%20learn%20more%20about%20your%20Design%20Partner%20program."
            variant="outline"
            color="white"
            className="mt-6"
            aria-label={`Get started with the Design Partnership plan for $200`}
            onClick = {() => {
              track(`[Action] Click Pricing Design Partnership plan`);
            }}
          >
            Check Eligibility
          </Button>
        </>
      )}
      
    </section>
  );
}

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-label="Pricing"
      className="bg-zinc-900 py-20 sm:py-32"
    >
      <Container>
        <div className="md:text-center">
          <p className="text-white">Solutions</p>
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            <span className="relative whitespace-nowrap">
              <SwirlyDoodle className="absolute left-0 top-2/3 h-[0.5em] w-full fill-orange-400" />
              <span className="relative">Data confidence</span>
            </span>{" "}
            for all.
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-sm mx-auto">
            Up-level your Data Quality, whether you’re flying solo or part of a growing org.
            {/*Sign up now and get 14 days of Pro Features for free!*/}
          </p>
        </div>
        <div className="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-4 xl:mx-0 xl:gap-x-8">
          <Plan
            pre_title="OSS"
            name="Open Source"
            price="$0"
            description="Build your own data reliability stack with best practices for catching impacts."
            href="https://cloud.piperider.io/signup?ref=open-source-tier"
            pre_features="Build your own stack with:"
            features={[
              "Impact Summaries",
              "Data Profile Diffs",
            ]}
          />
          <Plan
            pre_title="Cloud"
            name="Developer Plan"
            price="$0"
            description="The perfect platform for a busy Dev, for managing and sharing impacts."
            href="https://cloud.piperider.io/signup?ref=dev-plan"
            pre_features="Everything in OSS, plus:"
            features={[
              "30 hosted reports per project/month",
              "1 Cloud User",
              "Basic ACL",
              "General Support",
              "Automatic Reports",
              "GUI Report Generator",
              "Historical Views",
              "Workspaces",
              "Secure storage",
            ]}
          />
          <Plan
            featured
            has_design_partnership
            pre_title="Cloud"
            name="Pro Plan"
            price="$1000"
            unit="month"
            description="Enjoy higher caps. Perfect for teams building trustworthy pipelines."
            href="https://cloud.piperider.io/signup?ref=pro-plan"
            pre_features="Everything in Dev, plus:"
            features={[
              "100 hosted reports per project/month included",
              "Unlimited Cloud Users",
              "Advanced Lineage Diff",
              "Advanced ACL",
              "Premimum Support",
            ]}
          />
          <Plan
            pre_title="Cloud"
            name="Enterprise"
            price="Let's Talk!"
            description="For businesses and large teams with custom data quality needs."
            href="mailto: product@piperider.io?subject=Enterprise%20Plan"
            pre_features="Everything in Pro, plus:"
            features={[
              "Unlimited hosted reports per project/month",
              "SSO/SAML",
            ]}
          />
        </div>
      </Container>
    </section>
  );
}
