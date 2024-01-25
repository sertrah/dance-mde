import Image from "next/image";
import CustomLink from "@/components/UI-shared/CustomLink";
import { useRouter } from 'next/router'
import Button from '@mui/material/Button';

import style from "@/styles/Shared.module.css";

export default function TopBar() {
  const router = useRouter()
  const changeTo = router.locale === 'en-US' ? 'es-CO' : 'en-US';
  const changeToLabel = router.locale === 'en-US' ? 'ES' : 'EN';

  const onToggleLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: newLocale })
  }

  return (
    <nav className={style.top_bar}>
      <ul className={style.top_bar_content}>
        <li className={style.top_bar_logo}>
          <CustomLink href="/" className={style.top_bar_img}>
            <Image
              src="/logo.png"
              alt="Medallo Logo Image"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          </CustomLink> </li>
        <li className={style.lang_btn_container}>
          <Button variant="text" className={style.lang_btn} onClick={() => onToggleLanguageClick(changeTo)} >{changeToLabel}</Button>
        </li>
      </ul>
    </nav>
  );
}
