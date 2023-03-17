import React, { AnchorHTMLAttributes, ReactNode } from 'react'
import Link, { LinkProps as NextLinkProps } from 'next/link'
import { useRouter } from "next/router"


export type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps> & NextLinkProps & {
  children: ReactNode;
};

const CustomLink = ({ children, ...props }: LinkProps) => {
  const { locale } = useRouter();

  return (
    <Link locale={locale} {...props}>
      {children}
    </Link>

  )
}

export default CustomLink