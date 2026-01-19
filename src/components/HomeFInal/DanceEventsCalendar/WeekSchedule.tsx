import React, { useEffect } from "react";
import Link from "next/link";
import dayjs from "dayjs";
import { useTranslation } from "next-i18next";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Chip from "@mui/material/Chip";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";
import style from "./style.module.sass";
import { styled } from "@mui/material/styles";
import { locationLinks, socialPlaceData } from "@/helpers/temp";

interface StyledTabPanelProps {
  value: string;
  children: JSX.Element | string;
}

const StyledTabPanel = styled((props: StyledTabPanelProps) => (
  <TabPanel {...props} />
))(({ theme }) => ({
  padding: 10,
  fontSize: theme.typography.pxToRem(15),
  marginRight: theme.spacing(1),
  color: "#000",
}));

const StyledTabLabel = styled((props: any) => <Tab {...props} />)(
  ({ theme }) => ({
    fontSize: theme.typography.pxToRem(15),
    background: "linear-gradient(to right,#707070,  #eee, #707070)",
    backgroundClip: "text",
    textFillColor: "transparent",
    "&.Mui-selected": {
      background: "linear-gradient(to right,#bc8303, #ffc65b, #bc8303)",
      backgroundClip: "text",
      textFillColor: "transparent",
    },
  })
);

const StyledTabList = styled((props: any) => <TabList {...props} />)(
  ({ theme }) => ({
    "& .MuiTabs-indicator": {
      background:
        "linear-gradient(to right, #bc8303 0%, #ffc65b 50%, #bc8303 100%)",
    },
  })
);

const Card = ({ name, label, instagramLink, genres }: any) => {
  return (
    <div className={style.academy}>
      <div className={style.academy_container}>
        <Image
          className={style.academy_img}
          src="/bb.webp"
          alt="Social Event Medellin"
          style={{ objectFit: "cover" }}
          width={50}
          height={50}
        />
        <div className={style.academy_content}>
          <div className={style.academy_title_container}>
            <p className={style.academy_name}>{name}</p>
            <Link href={instagramLink} target="_blank">
              <InstagramIcon />
            </Link>
          </div>
          <div className={style.academy_location}>
            <p>{label}</p>
          </div>
        </div>
      </div>
      <div className={style.academy_genres}>
        {genres.map((genre: any) => (
          <Chip
            key={`${name}${genre}`}
            size="small"
            label={genre}
            className={`is-${genre}`}
          />
        ))}
      </div>
    </div>
  );
};

const sociales: Record<string, { places: socialPlaceData[] }> = {
  monday: {
    places: [locationLinks.bachataAlparque, locationLinks.bloodDanceLaureles],
  }, // Sunday
  tuesday: {
    places: [{ ...locationLinks.nuevaGuardia, genres: ["Bachata"] }],
  }, // Monday
  wednesday: {
    places: [
      locationLinks.brutal,
      locationLinks.bachataHouse,
      locationLinks.saborymasna,
    ],
  }, // Thursday
  thursday: {
    places: [
      { ...locationLinks.grandSocial, genres: ["Bachata"] },
      { ...locationLinks.nuevaGuardia, genres: ["Salsa", "Bachata"] },
      locationLinks.danceFree,
    ],
  },
  friday: {
    places: [
      locationLinks.madera,
      locationLinks.nuevaGuardia,
      locationLinks.socialclub,
      locationLinks.danceFree,
    ],
  },
  saturday: {
    places: [locationLinks.socialclub, locationLinks.danceFree],
  }, // Saturday
  sunday: {
    places: [locationLinks.zoukAlParque, locationLinks.balconzouk],
  }, // Sunday
};

function WeekSchedule() {
  const { t } = useTranslation("home");

  const [value, setValue] = React.useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    setValue(`${dayjs().day()}`);
    /* dayjs.extend(isBetween);

    const currentMonthNumber = dayjs().month();
    const isTodayHoliday = holidays[currentMonthNumber]
      ? holidays[currentMonthNumber].some(({ start, end }) =>
          dayjs().isBetween(dayjs(start), dayjs(end))
        )
      : false;

    const socialesPlaces = sociales[dayjs().day()];
    if (isTodayHoliday) {
      socialesPlaces.places = socialesPlaces.places.filter(
        (s) => s.name !== "Balcon zouk"
      );
    } */
  }, []);

  return (
    <section className={style.weekSchedule}>
      <h3 className={style.weekSchedule__title}>
        {t("weekend_schedule_title")}
      </h3>
      <div className={style.schedule_container}>
        <div className={style.week_schedule}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <StyledTabList
                variant="scrollable"
                onChange={handleChange}
                scrollButtons="auto"
                aria-label="Social Events tabs"
              >
                <StyledTabLabel label={t("monday")} value="1" />
                <StyledTabLabel label={t("tuesday")} value="2" />
                <StyledTabLabel label={t("wednesday")} value="3" />
                <StyledTabLabel label={t("thursday")} value="4" />
                <StyledTabLabel label={t("friday")} value="5" />
                <StyledTabLabel label={t("saturday")} value="6" />
                <StyledTabLabel label={t("sunday")} value="0" />
              </StyledTabList>
            </Box>
            <StyledTabPanel value="1">
              <>
                {sociales.monday.places.map(
                  ({ name, label, instagramLink, genres }) => (
                    <Card
                      key={`monday-${name}`}
                      name={name}
                      label={label}
                      instagramLink={instagramLink}
                      genres={genres}
                    />
                  )
                )}
              </>
            </StyledTabPanel>
            <StyledTabPanel value="2">
              <>
                {sociales.tuesday.places.map(
                  ({ name, label, instagramLink, genres }) => (
                    <Card
                      key={`monday-${name}`}
                      name={name}
                      label={label}
                      instagramLink={instagramLink}
                      genres={genres}
                    />
                  )
                )}
              </>
            </StyledTabPanel>
            <StyledTabPanel value="3">
              <>
                {sociales.wednesday.places.map(
                  ({ name, label, instagramLink, genres }) => (
                    <Card
                      key={`monday-${name}`}
                      name={name}
                      label={label}
                      instagramLink={instagramLink}
                      genres={genres}
                    />
                  )
                )}
              </>
            </StyledTabPanel>
            <StyledTabPanel value="4">
              <>
                {sociales.thursday.places.map(
                  ({ name, label, instagramLink, genres }) => (
                    <Card
                      key={`monday-${name}`}
                      name={name}
                      label={label}
                      instagramLink={instagramLink}
                      genres={genres}
                    />
                  )
                )}
              </>
            </StyledTabPanel>
            <StyledTabPanel value="5">
              <>
                {sociales.friday.places.map(
                  ({ name, label, instagramLink, genres }) => (
                    <Card
                      key={`monday-${name}`}
                      name={name}
                      label={label}
                      instagramLink={instagramLink}
                      genres={genres}
                    />
                  )
                )}
              </>
            </StyledTabPanel>
            <StyledTabPanel value="6">
              <>
                {sociales.saturday.places.map(
                  ({ name, label, instagramLink, genres }) => (
                    <Card
                      key={`monday-${name}`}
                      name={name}
                      label={label}
                      instagramLink={instagramLink}
                      genres={genres}
                    />
                  )
                )}
              </>
            </StyledTabPanel>
            <StyledTabPanel value="0">
              <>
                {sociales.sunday.places.map(
                  ({ name, label, instagramLink, genres }) => (
                    <Card
                      key={`monday-${name}`}
                      name={name}
                      label={label}
                      instagramLink={instagramLink}
                      genres={genres}
                    />
                  )
                )}
              </>
            </StyledTabPanel>
          </TabContext>
        </div>
      </div>
    </section>
  );
}

export default WeekSchedule;
