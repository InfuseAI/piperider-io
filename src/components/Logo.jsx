import clsx from "clsx";

export function Logo({ className, ...props }) {
  return (
    <img src="/logo.svg" className={clsx("invert", className)} {...props} />
  );
}
