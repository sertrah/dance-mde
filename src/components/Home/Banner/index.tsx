import styled from "styled-components";
import Image from "next/image";
import { Paragraph, PrimaryTitle } from "@/components/UI-shared/Typography";
import { FlexContainer } from "@/components/UI-shared/Container";
import styles from "../../../styles/Home.module.css";

export const Container = styled(FlexContainer)`
  padding: 40% 24px 24px;
  background: var(--andes-white);
`;

export default function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.banner_item}>
        <Paragraph> Discover with </Paragraph>
        <PrimaryTitle> Best Medallo Dancers </PrimaryTitle>
      </div>
      <Image
        src="/medellin.jpg"
        alt="Vercel Logo"
        priority
        fill
        style={{ objectFit: "cover" }}
        sizes="(max-width: 768px) 80vw,
                (max-width: 1200px) 70vw,
                100vw"
      />
      <Image
        src="/yy.png"
        alt="Dancers"
        priority
        fill
        sizes="(max-width: 768px) 80vw,
                (max-width: 1200px) 70vw,
                100vw"
        className={styles.banner_dancers}
      />
      <div className={styles.cover}></div>
    </section>
  );
}
