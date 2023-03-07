import React, { FC, ReactNode } from "react";
import classNames from 'classnames';
import styles from '../../styles/Typography.module.css';

interface Props {
  children: ReactNode,
  hasUnderline?: boolean,
  className?: string,
}

export const PrimaryTitle: FC<Props> = ({ children, hasUnderline, className }) => <h1 className={`${classNames(styles.title_1, className)} ${hasUnderline ? styles.text_underline : ''} `}> {children}</h1>
export const SubTitle: FC<Props> = ({ children }) => <h2 className={styles.title_2}> {children}</h2>

export const Paragraph: FC<Props> = ({ children, className }) => <p className={classNames(styles.paragraph_1, className)}> {children}</p>