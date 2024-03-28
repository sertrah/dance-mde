import styled from "styled-components";
import Image from "next/image";
import { FlexContainer } from "@/components/UI-shared/Container";
import styles from "../../../styles/Home.module.css";
import Typography from "@/helpers/prismic";
import { Paragraph } from "@/components/UI-shared/Typography";

export const Container = styled(FlexContainer)`
  padding: 40% 24px 24px;
  background: var(--andes-white);
`;

export default function Banner({ title, siteDescription }: any) {
  return (
    <>
      <section className={styles.banner}>
        <div className={styles.banner_item}>
          <Typography richContent={title} />
        </div>
        <Image
          src="/medellin.webp"
          alt="City of medellin"
          priority
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 40vw,
                (max-width: 1200px) 40vw,
                40vw"
        />
        <Image
          src="/yerin.png"
          alt="Dancers"
          priority
          fill
          sizes="(max-width: 768px) 80vw,
                (max-width: 1200px) 70vw,
                100vw"
          className={styles.banner_dancers_yerin} />
        <Image
          src="/sebas.webp"
          alt="Bailarin y profesor de baile"
          priority
          fill
          sizes="(max-width: 768px) 80vw,
                (max-width: 1200px) 70vw,
                100vw"
          className={styles.banner_dancer_sebas}
        />
        <Image
          src="/ana.webp"
          alt="Bailarina y profesora de baile"
          priority
          fill
          sizes="(max-width: 768px) 80vw,
                (max-width: 1200px) 70vw,
                100vw"
          className={styles.banner_dancers}
        />
        <Image
          src="/salsa1.png"
          alt="Dancers"
          priority
          fill
          sizes="(max-width: 768px) 80vw,
                (max-width: 1200px) 70vw,
                100vw"
          className={styles.banner_dancers_2}
        />
        <div className={styles.cover}></div>
      </section>
      <Paragraph className={styles.site_description}>{siteDescription} </Paragraph>
    </>
  );
}
