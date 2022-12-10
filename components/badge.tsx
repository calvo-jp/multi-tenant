import clsx from "clsx";
import { ComponentProps } from "react";

export default function Badge({ children, className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={clsx(
        className,
        "rounded-lg bg-purple-200 py-[2px] px-[4px] text-xs font-semibold leading-[1.15] text-purple-800",
      )}
      {...props}
    >
      {children}
    </div>
  );
}
