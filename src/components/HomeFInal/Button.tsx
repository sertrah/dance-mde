import React from "react";
import Link from "next/link";

const Button: React.FC<{ children: React.ReactNode; href: string }> = ({
  children,
  href,
}) => {
  return (
    <Link href={href} className="button-large">
      {children}
    </Link>
  );
};

export default Button;
