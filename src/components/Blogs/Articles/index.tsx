import { FC } from "react";
import Image from "next/image";

import { PrismicNextImage } from "@prismicio/next";
import type * as prismicT from "@prismicio/types";
import { PrismicRichText as BasePrismicRichText } from "@prismicio/react";

import styles from "./Articles.module.scss";

export function linkResolver(document: any) {
  if (document.type === "post") {
    return "/blog/" + document.uid;
  }

  return "/";
}

const NextVideo: FC<{ embedUrl: string }> = ({ embedUrl }) => {
  return <iframe src={embedUrl} allowFullScreen />;
};

const Article: FC<{
  prismicData: {
    title: any;
    thumbail: prismicT.ImageFieldImage;
    logo: prismicT.ImageFieldImage;
    banner: prismicT.ImageFieldImage;
    article_content: prismicT.RichTextField;
    video: prismicT.EmbedField;
  };
}> = ({ prismicData }) => {

  return (
    <main className={styles.article} id="article">
      <div className={styles.article_hero}>
        <PrismicNextImage
          field={prismicData.banner}
          fill
          style={{ objectFit: "cover" }}
        />
        <h1>{prismicData.title}</h1>
      </div>
      <section className={styles.article_content}>
        <Image
          src={prismicData.logo.url as string}
          alt={prismicData.logo.alt as string}
          width={200}
          height={200}
          style={{
            objectFit: "cover",
            margin: "2rem auto",
            display: "block",
            transform: "translateY(-88px)",
            borderRadius: "50%",
          }}
        />
        <div
          className={styles.article_video}
          dangerouslySetInnerHTML={{ __html: prismicData.video.html as string }}
        />
        <div className={styles.article_richtext}>
          <BasePrismicRichText
            linkResolver={linkResolver}
            field={prismicData.article_content}
          />
        </div>
        <Image
          src={prismicData.logo.url as string}
          alt={prismicData.logo.alt as string}
          width={200}
          height={200}
          style={{ objectFit: "cover", margin: "2rem auto", display: "block" }}
        />
      </section>
    </main>
  );
};

export default Article;
