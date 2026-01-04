import * as React from "react";
import { VariantProps } from "class-variance-authority";
import { textStyles } from "./text.styles";
import { cn } from "@/app/lib/cn";

type TextProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof textStyles> & {
    as?: React.ElementType;
    preserveNewlines?: boolean;
  };

export function Text({
  as: Component = "p",
  variant,
  className,
  preserveNewlines,
  ...props
}: TextProps) {
  return (
    <Component
      className={cn(
        textStyles({ variant }),
        preserveNewlines && "whitespace-pre-line",
        className
      )}
      {...props}
    />
  );
}
