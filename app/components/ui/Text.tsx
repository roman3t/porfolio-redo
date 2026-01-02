import * as React from "react";
import { VariantProps } from "class-variance-authority";
import { textStyles } from "./text.styles";
import { cn } from "@/app/lib/cn";

type TextProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof textStyles> & {
    as?: React.ElementType;
  };

export function Text({
  as: Component = "p",
  variant,
  className,
  ...props
}: TextProps) {
  return (
    <Component className={cn(textStyles({ variant }), className)} {...props} />
  );
}
