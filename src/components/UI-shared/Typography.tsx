import React, { FC, ReactNode } from "react";
import cx from 'classnames';
import styles from '../../styles/Typography.module.css';

interface Props {
  children: ReactNode,
  hasUnderline?: boolean,
  className?: string,
}

export const PrimaryTitle: FC<Props> = ({ children, hasUnderline, className }) => <h1 className={`${cx(styles.title_1, className)} ${hasUnderline ? styles.text_underline : ''} `}> {children}</h1>
export const SubTitle: FC<Props> = ({ children, hasUnderline, className }) => <h2 className={`${cx(styles.title_2, className)} ${hasUnderline ? styles.text_underline : ''} `}> {children}</h2>

export const Paragraph: FC<Props> = ({ children, className }) => <p className={cx(styles.paragraph_1, className)}> {children}</p>