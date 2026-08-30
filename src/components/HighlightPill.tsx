import React from "react";
import styles from "./HighlightPill.module.css";

export type HighlightPillProps = {
  children: React.ReactNode;
  className?: string;
};

export default function HighlightPill({ children, className = "" }: HighlightPillProps) {
  return (
    <span className={`${styles.pill} ${className}`.trim()}>
      <span className={styles.content}>{children}</span>
    </span>
  );
}
