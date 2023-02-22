import { PrimaryTitle } from "@/components/UI-shared/Typography";
import { GridContainer } from "@/components/UI-shared/Container";
import Genre from "./Genre";
import styles from '../../styles/Home.module.css';

export default function Genres() {
  return (
    <section className={styles.genre_container}>
      <PrimaryTitle hasUnderline>Our Talents</PrimaryTitle>
      <div className={styles.genres}>
        <Genre title="Bachata" imageName="/bachatad.png" />
        <Genre title="Salsa" imageName="/salsad.png" isOpposite bgColor="--radial-secondary" />
        <Genre title="Tango" bgColor="--radial-ternary" />
      </div>
    </section>
  );
}
