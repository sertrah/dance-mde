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


const TeacherCard = () => {
  return (
    <div className={style.card_fake}>
      <Image
        src="/jhaiir.png"
        alt="Jhair"
        width={150}
        height={180}
      />
      <Card className={style.card}>
        <CardContent className={style.card_content}>
          <Typography variant="h2" gutterBottom className={style.card_title}>
            Jhair Valpini
          </Typography>
          <Typography variant="body2" >
            Bailarin profesional con más de 60 años de experiencia, especializado en bailes como Tango, Porro, Bachata y Kizomba
          </Typography>

          <div className={style.card_chips}>
            <Chip size="small" label='Bachata' className={`is-bachata`} />
            <Chip size="small" label='Kizomba' className={`is-kizomba`} />
            <Chip size="small" label='Porro' className={`is-porro`} />
            <Chip size="small" label='Tango' className={`is-tango`} />
          </div>
        </CardContent>
        <CardActions>
          <Link href="/blog/hello-world" className={style.card_link_in}>
            <InstagramIcon />
          </Link>
        </CardActions>
      </Card>
    </div>
  )
}

export default TeacherCard