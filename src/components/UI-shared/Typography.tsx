import React, { FC, ReactNode } from "react";
import styles from '../../styles/Typography.module.css';

interface Props {
  children: ReactNode,
  hasUnderline?: boolean,

}

export const PrimaryTitle: FC<Props> = ({children, hasUnderline}) => <h1 className={`${styles.title_1} ${hasUnderline ? styles.text_underline : '' } `}> {children}</h1>
export const SubTitle: FC<Props> = ({children}) => <h2 className={styles.title_2}> {children}</h2>

export const Paragraph: FC<Props> = ({children}) => <p className={styles.paragraph_1}> {children}</p>