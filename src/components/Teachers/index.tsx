import React, { useState, useMemo } from "react";
import { useTranslation } from "next-i18next";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";

import TeacherCard from "./TeacherCard";
import TeachersBanner from "./TeachersBanner";
import { PrimaryTitle } from "../UI-shared/Typography";
import style from "@/styles/Teachers.module.css";

const Teachers = ({ data }: any) => {
  const { t } = useTranslation("teachers");
  const [selectedGenre, setSelectedGenre] = useState<string>("all");

  // Extract unique genres from all teachers
  const genres = useMemo(() => {
    const allGenres = new Set<string>();
    data.slices[0].items.forEach(({ danceGenre }: any) => {
      const teacherGenres = danceGenre.split(",").map((g: string) => g.trim());
      teacherGenres.forEach((genre: string) => allGenres.add(genre));
    });
    return Array.from(allGenres).sort();
  }, [data]);

  // Filter teachers based on selected genre
  const filteredTeachers = useMemo(() => {
    if (selectedGenre === "all") {
      return data.slices[0].items;
    }
    return data.slices[0].items.filter(({ danceGenre }: any) => {
      const teacherGenres = danceGenre.split(",").map((g: string) => g.trim());
      return teacherGenres.includes(selectedGenre);
    });
  }, [data, selectedGenre]);

  const handleGenreChange = (
    _event: React.MouseEvent<HTMLElement>,
    newGenre: string | null
  ) => {
    if (newGenre !== null) {
      setSelectedGenre(newGenre);
    }
  };

  return (
    <main className={style.teacher_page}>
      <TeachersBanner t={t} data={data} />
      <PrimaryTitle hasUnderline className={style.secondary_title}>
        {t("secondary_title")}
      </PrimaryTitle>

      {/* Genre Filter */}
      <div className={style.filter_container}>
        <ToggleButtonGroup
          value={selectedGenre}
          exclusive
          onChange={handleGenreChange}
          aria-label="dance genre filter"
          className={style.genre_filter}
          sx={{
            '& .MuiToggleButton-root': {
              color: '#fff',
              borderColor: 'rgba(255, 255, 255, 0.3)',
              '&:hover': {
                borderColor: 'rgba(255, 255, 255, 0.5)',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
              },
              '&.Mui-selected': {
                color: '#000',
                backgroundColor: '#fff',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                },
              },
            },
          }}
        >
          <ToggleButton value="all" aria-label="all genres">
            {t("all_genres", "All")}
          </ToggleButton>
          {genres.map((genre) => (
            <ToggleButton
              key={genre}
              value={genre}
              aria-label={genre}
            >
              {genre}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>

      <section className={style.teacher_page_container}>
        {filteredTeachers.map(
          ({ name, instagramUrl, description, danceGenre, teacher }: any) => (
            <TeacherCard
              key={`${name}-${teacher}`}
              name={name}
              instagramUrl={instagramUrl}
              description={description}
              danceGenre={danceGenre}
              teacher={teacher}
            />
          )
        )}
      </section>
    </main>
  );
};

export default Teachers;
