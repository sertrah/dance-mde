import CustomLink from "@/components/UI-shared/CustomLink";
import dayjs, { Dayjs } from 'dayjs';
import styles from "@/styles/Home.module.css";
// import Typography from "@/helpers/prismic";
import { useMemo } from "react";

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TypographyMui from '@mui/material/Typography';
import { PrimaryTitle } from '@/components/UI-shared/Typography';
import { useTranslation } from 'next-i18next'

const sociales: Record<number, any> = {
  1: {
    concept: "Lunes",
    places: [{
      name: "Bachata al parque",
      instagramLink: "https://www.instagram.com/bachata_alparque/",
      genres: ["Bachata"]
    },
    {
      name: "Balcón de zouk",
      instagramLink: "https://www.instagram.com/balcondezouk/",
      genres: ["Bachata", "Salsa", "Porro", "Zouk"]
    }],
  }, // Sunday
  2: {
    concept: "Martes",
    places: [{
      name: "Nueva guardia",
      instagramLink: "https://www.instagram.com/nuevaguardiadance/",
      genres: ["Bachata",],
    },
    {
      name: "Barcelona",
      instagramLink: "https://www.instagram.com/barcelonasmartmed/",
      genres: ["Bachata", "Salsa", "Zouk"],
    }
    ]
  }, // Monday
  3: {
    concept: "Miercoles",
    places: [{
      name: "Majao experience",
      instagramLink: "https://www.instagram.com/majaoexperience/",
      genres: ["Bachata", "Salsa", "Zouk"]
    }]
  }, // Thursday
  4: {
    concept: "Jueves",
    places: [{
      name: "Nueva guardia",
      instagramLink: "https://www.instagram.com/nuevaguardiadance/",
      genres: ["Bachata", "Salsa",]
    },
    {
      name: "Barcelona",
      instagramLink: "https://www.instagram.com/barcelonasmartmed/",
      genres: ["Bachata", "Salsa", "Zouk"]
    },
    {
      name: "Dance Free",
      instagramLink: "https://www.instagram.com/dancefreeco/",
      genres: ["Bachata", "Salsa"]
    },
    {
      name: "Social Club",
      instagramLink: "https://www.instagram.com/socialclubacademia/",
      genres: ["Bachata", "Salsa", "Tropicales"]
    }
    ]
  },
  5: {
    concept: "Viernes",
    places: [
      {
        name: "Bachatea Medellin",
        instagramLink: "https://www.instagram.com/bachateamedellin/",
        genres: ["Bachata", "Salsa", "Porro", "Zouk"]
      },
      {
        name: "Social club",
        instagramLink: "https://www.instagram.com/socialclubacademia/",
        genres: ["Bachata", "Salsa", "Porro"]
      }, {
        name: "Dance Free",
        instagramLink: "https://www.instagram.com/dancefreeco/",
        genres: ["Bachata", "Salsa"]
      },]
  },
  6: {
    concept: "Sabado",
    places: [
      {
        name: "Bachatea Medellin",
        instagramLink: "https://www.instagram.com/bachateamedellin/",
        genres: ["Bachata", "Salsa", "Porro", "Zouk"]
      },
      {
        name: "Social club",
        instagramLink: "https://www.instagram.com/socialclubacademia/",
        genres: ["Bachata", "Salsa", "Porro", "Zouk"]
      }, {
        name: "Dance Free",
        instagramLink: "https://www.instagram.com/dancefreeco/",
        genres: ["Bachata", "Salsa"]
      }]
  }, // Saturday
  0: {
    concept: "Domingo",
    places: [
      {
        name: "Balcón de zouk",
        instagramLink: "https://www.instagram.com/balcondezouk/",
        genres: ["Bachata", "Salsa", "Porro", "Zouk"]
      }]
  }, // Sunday
}
export default function Sociales() {
  const { t } = useTranslation('common');
  const currentSocial = useMemo(() => sociales[dayjs().day()], []);
  return (
    <section className={styles.sociales}>
      <PrimaryTitle hasUnderline className={styles.sociales_title}>{t('social_title')} <br />{currentSocial.concept} o miedo?</PrimaryTitle>
      {currentSocial.places.map((place: { name: string, genres: string[], instagramLink: string }, i: number) => <Card key={`social-${i}`}>
        <CustomLink href={place.instagramLink} target="_blank">
          <CardContent className={styles.social_card}>
            <Stack direction="row" alignItems="center" gap={0.4}>
              <Avatar alt="Preview social" src="/yy.png" />
              <TypographyMui variant="h5" component="h5" className={styles.social_title}>
                📍 {place.name}
              </TypographyMui>
            </Stack>
            <Stack direction="row" gap={1} className={styles.social_card_badges} alignItems="center">
              {place.genres.map((genre) => <Chip size="small" label={genre} className={`is-${genre.toLowerCase()}`} key={`genre-${genre}`} />)}
            </Stack>
          </CardContent>
        </CustomLink>
      </Card>)}
    </section>
  );
}
