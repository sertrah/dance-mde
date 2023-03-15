import Image from "next/image";
import Link from 'next/link';

import style from "@/styles/Shared.module.css";

export default function TopBar() {
  return (
    <nav className={style.top_bar}>
      <ul className={style.top_bar_content}>
        <li className={style.top_bar_logo}>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Medallo Logo Image"
              fill
              style={{ objectFit: "cover" }}
            />
          </Link> </li>
      </ul>
    </nav>
  );
}
