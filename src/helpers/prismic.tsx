import Link from "next/link";
import * as prismicT from "@prismicio/types";
import { PrismicRichText } from "@prismicio/react";
import { SubTitle, Paragraph, PrimaryTitle } from "@/components/UI-shared/Typography";
import { FC } from "react";


export const components = (className?: string, hasUnderline?: boolean) => ({
  heading1: ({ children }: any) => (
    <PrimaryTitle className={className} hasUnderline={hasUnderline}>{children}</PrimaryTitle>
  ),
  heading2: ({ children }: any) => (
    <SubTitle className={className} hasUnderline={hasUnderline}>{children}</SubTitle>
  ),
  paragraph: ({ children }: any) => (
    <Paragraph className={className}>{children}</Paragraph>
  ),
  hyperlink: ({node, children}: any) => {
    return (
      <Link className={className} href={node?.data?.type}>{children}</Link>
    )
  }
})

const Typography: FC<{
  richContent: prismicT.RichTextField | null | undefined;
  className?: string;
  hasUnderline?: boolean;
}> = ({ richContent, className, hasUnderline }): JSX.Element => <PrismicRichText field={richContent} components={components(className, hasUnderline)} />

export default Typography;
