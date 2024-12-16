import Head from "next/head";
import Image from "next/image";

import style from "./style.module.css";
import { createClient } from "../../prismicio";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";

export default function TeachersPage({ page }: any) {

  return (
    <>
      <Head>
        <title>Blogs</title>
        <meta
          name="description"
          content="Discutamos acerca del baile en medellin."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Blogs" />
        <meta
          property="og:description"
          content="Clases de Baile Medellín, Escuela de Baile Medellín, aprender a bailar bachata, Salsa/Bachata/Kizomba/Zouk Medellín"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <section className={style.blogs_section_2}>
          <h1>MedalloBaila - Blogs </h1>
          <p>
            Descubre cómo el baile fortalece el amor, la amistad y la pasión
          </p>
        </section>
        <section className={style.blogs_section_1}>
          <h2>Publicaciones mas recientes</h2>

          <div className={style.blogs_container}>
            {page.map((item: any) => (
              <Link key={item.uid} href={`/blogs${item.url}`}>
                <div className={style.blog_container}>
                  <p className={style.blog_title}>{item.data.title}</p>
                  <Image
                    src={item.data.thumbail.url}
                    alt="Imagen de blogs"
                    fill
                    sizes="(max-width: 360px) 33vw"
                    style={{ objectFit: "cover" }}
                    className={style.blog_img}
                  />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </>
    </>
  );
}

export async function getStaticProps({ previewData, params, locale }: any) {
  const client = createClient({ previewData });
  const currentLocale = locale ?? "es-CO";

  const page = await client.getAllByType("blog", { lang: currentLocale });

  return {
    props: {
      page,
      ...(await serverSideTranslations(currentLocale, [
        "common",
        "footer",
        "teachers",
      ])),
    },
  };
}
