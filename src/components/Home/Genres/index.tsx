import Genre from "./Genre";
import styles from "../../../styles/Home.module.css";
import Typography from "@/helpers/prismic";

export default function Genres({ sliceItems, primary }: any) {
  return (
    <section className={styles.genre_container}>
      <Typography richContent={primary.title} hasUnderline />
      <div className={styles.genres}>
        {sliceItems.map(({ colorWheel, title, image }: any, index: number ) => (
          <Genre
            key={`image-genre-${title[0]?.text}`}
            title={title}
            isOpposite={!!(index % 2 === 0)}
            image={image}
            bgColor={colorWheel}
          />
        ))}
      </div>
    </section>
  );
}
