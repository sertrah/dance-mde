import Head from 'next/head'
import Image from "next/image";

import style from "./style.module.css";
import { createClient } from '../../prismicio'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function TeachersPage({ page }: any) {
    return (
        <>
            <Head>
                <title>Teachers</title>
                <meta name="description" content="Discutamos acerca del baile en medellin." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <>
                <section>
                    <h1>Lista de Blogs</h1>
                    <p>Un espacio para que compartamos y discutamos acerca del baile</p>
                </section>
                <section>
                    <h2>Publicaciones mas recientes</h2>

                    <div className={style.blogs_container}>
                        <div className={style.blog_container}>
                            <p  className={style.blog_title}>Como esta el baile en medellin</p>
                            <Image
                                src={"/medellin.jpg"}
                                alt="Imagen de blogs"
                                fill
                                sizes="(max-width: 360px) 33vw"
                                style={{ objectFit: "contain" }}
                                className={style.blog_img}
                            />
                        </div>
                        <div className={style.blog_container}>
                            <p  className={style.blog_title}>Como esta el baile en medellin</p>
                            <Image
                                src={"/medellin.jpg"}
                                alt="Imagen de blogs"
                                fill
                                sizes="(max-width: 360px) 33vw"
                                style={{ objectFit: "contain" }}
                                className={style.blog_img}
                            />
                        </div>
                    </div>

                </section>
            </>
        </>
    )
}

export async function getStaticProps({ previewData, params, locale }: any) {
    const client = createClient({ previewData });
    const currentLocale = locale ?? 'es-CO';

    const page = await client.getSingle('teachers', { lang: currentLocale })

    return {
        props: {
            page,
            ...(await serverSideTranslations(currentLocale, [
                'common',
                'footer',
                'teachers',
            ])),
        },
    }
}