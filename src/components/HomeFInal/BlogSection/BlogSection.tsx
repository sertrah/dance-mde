import React, { useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import style from "./style.module.sass";
import Link from "next/link";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import SliceEventController from "@/core/infrastructure/controllers/SliceEventController";

const BlogSection = ({ lang }: any) => {
  const { t } = useTranslation("home");
  const { data: SliceEvent } = useQuery(
    [`blog-list`, "blog", lang],
    ({ queryKey: [, type, lang] }) =>
      SliceEventController.getListFromPrismicByType(type, lang),
    {
      retry: 1,
      retryDelay: 3000,
    }
  );

  return (
    <>
      <h2 className={style.title}>{t("latest_posts")}</h2>
      <div className={style.blogs}>
        {SliceEvent?.map((item: any) => (
          <Link
            className={style.blog}
            key={item.uid}
            href={`/blogs${item.url}`}
          >
            <div>
              <p className={style.blog_title}>{item.data.title}</p>
              <Image
                priority={false}
                loading="lazy"
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
    </>
  );
};
const WrappedUpcomingEvents = ({ lang }: any) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <BlogSection lang={lang} />
    </QueryClientProvider>
  );
};

export default WrappedUpcomingEvents;
