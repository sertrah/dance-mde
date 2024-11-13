import { FC } from "react";

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
    banner: prismicT.ImageFieldImage;
    article_content: prismicT.RichTextField;
    video: prismicT.EmbedField;
  };
}> = ({ prismicData }) => {
  return (
    <main className={styles.article}>
      <section className={styles.article_content}>
        <div className={styles.article_hero}>
          <PrismicNextImage
            field={prismicData.banner}
            fill
            style={{ objectFit: "cover" }}
          />
          <h1>{prismicData.title}</h1>
        </div>
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
      </section>
    </main>
  );
};

export default Article;
