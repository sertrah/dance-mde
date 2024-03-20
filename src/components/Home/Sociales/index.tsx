import CustomLink from "@/components/UI-shared/CustomLink";
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import styles from "@/styles/Home.module.css";
// import Typography from "@/helpers/prismic";
import { useMemo } from "react";

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TypographyMui from '@mui/material/Typography';
import { SubTitle } from '@/components/UI-shared/Typography';
import { useTranslation } from 'next-i18next'
import { locationLinks, socialPlaceData } from "@/helpers/temp";
import { holidays } from "@/helpers/colombiaHolydais";



function stringAvatar(name: string) {
  const splitName = name.split(' ');
  return {
    sx: {
      bgcolor: "#000",
    },
    children: `${splitName[0][0]}${splitName[splitName.length - 1][0]}`.toUpperCase(),
  };
}

const sociales: Record<number, { concept: string, places: socialPlaceData[] }> = {
  1: {
    concept: "Lunes",
    places: [locationLinks.bachataAlparque,
    locationLinks.selinamedellin],
  }, // Sunday
  2: {
    concept: "Martes",
    places: [{ ...locationLinks.nuevaGuardia, genres: ["Bachata"] },
    locationLinks.barcelona,
    locationLinks.saborymasna
    ]
  }, // Monday
  3: {
    concept: "Miercoles",
    places: [locationLinks.majao]
  }, // Thursday
  4: {
    concept: "Jueves",
    places: [locationLinks.nuevaGuardia,
    locationLinks.danceFree,
    locationLinks.socialclub,
    ]
  },
  5: {
    concept: "Viernes",
    places: [
      locationLinks.madera,
      locationLinks.socialclub, locationLinks.danceFree]
  },
  6: {
    concept: "Sabado",
    places: [
      locationLinks.socialclub, locationLinks.danceFree]
  }, // Saturday
  0: {
    concept: "Domingo",
    places: [
      locationLinks.zoukAlParque,
      locationLinks.balconzouk]
  }, // Sunday
}
export default function Sociales() {
  const { t } = useTranslation('common');
  const currentSocial = useMemo(() => {
    dayjs.extend(isBetween)

    const currentMonthNumber = dayjs().month();
    const isTodayHoliday = holidays[currentMonthNumber] ? holidays[currentMonthNumber].some(({ start, end }) => dayjs().isBetween(dayjs(start), dayjs(end))) : false;

    const socialesPlaces = sociales[dayjs().day()];
    if (isTodayHoliday) {
      socialesPlaces.places = socialesPlaces.places.filter((s) => s.name !== 'Balcon zouk');
    }
    return socialesPlaces
  }, []);
  return (
    <section className={styles.sociales}>
      <SubTitle hasUnderline className={styles.sociales_title}>{t('social_title')} <br />{currentSocial.concept} o miedo?</SubTitle>
      {currentSocial.places.map((place: socialPlaceData, i: number) => <Card key={`social-${i}`}>
        <CustomLink href={place.instagramLink} target="_blank">
          <CardContent className={styles.social_card}>
            <Stack direction="row" alignItems="center" gap={0.4}>
              <Avatar alt="Preview social" {...stringAvatar(place.name)} />
              <TypographyMui component="p" className={styles.social_title}>
                <strong>{place.name}</strong> {place.label}
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
