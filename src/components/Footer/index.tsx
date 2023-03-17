import React from 'react'
import { useTranslation } from 'next-i18next'

const Bottom = () => {
  const { t } = useTranslation('footer');

  return (
    <footer>
      <p className='mensajito'>{t('footer_1')}<span>{t('footer_2')}</span>{t('footer_3')}
        <br /> <br /> {t('footer_4')}
      </p>
      <p className='copy'>Copyright © 2023 </p>
    </footer >
  )
}

export default Bottom