import React from 'react'
import Card from '@mui/material/Card';
import Link from 'next/link';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import InstagramIcon from '@mui/icons-material/Instagram';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import style from '@/styles/Teachers.module.css'


const TeacherCard = ({ name, instagramUrl, description, danceGenre, teacher }: any) => {

  const genres: string[] = danceGenre.split(",");
  return (
    <div className={style.card_fake}>
      <Image
        src={teacher.url}
        alt="Jhair"
        width={150}
        height={180}
      />
      <Card className={style.card}>
        <CardContent className={style.card_content}>
          <Typography variant="h2" gutterBottom className={style.card_title}>
            {name}
          </Typography>
          <Typography variant="body2" >
            {description}
          </Typography>

          <div className={style.card_chips}>
            {genres.map((genre) => <Chip key={`${genre}-${name}`} size="small" label={genre} className={`is-${genre.toLocaleLowerCase()}`} />)}
          </div>
        </CardContent>
        <CardActions>
          <Link href={instagramUrl} className={style.card_link_in}>
            <InstagramIcon />
          </Link>
        </CardActions>
      </Card>
    </div>
  )
}

export default TeacherCard