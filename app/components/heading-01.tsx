import type { ReactNode } from "react";

type Heading01Props = {
  children: ReactNode;
};

export default function Heading01({ children }: Heading01Props) {
  return (
    <h1
      className="font-medium
              text-[30px]
              leading-[110%]
              tracking-[-0.01em]
              md:text-[45px]
              lg:text-[60px]
              "
    >
      {children}
    </h1>
  );
}
