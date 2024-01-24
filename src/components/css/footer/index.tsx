import React from "react";

import styles from "./index.module.css";

export const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <p> Connect with us on Bah humbug github :)</p>
      <a
        href="https://github.com/pankod"
        target="_blank"
        data-testid="pankod-logo"
      ></a>
      <div className={styles.icons} data-testid="icons-container">
        <a href="https://github.com/K-velvet-P" target="_blank">
          <img
            src="/icons/github-icon.svg"
            alt="github"
            width="28"
            height="29"
          />
        </a>
        <a href="https://github.com/bianca-g-b" target="_blank">
          <img
            src="/icons/github-icon.svg"
            alt="github"
            width="28"
            height="29"
          />
        </a>
        <a href="https://github.com/SBaldwin-Git" target="_blank">
          <img
            src="/icons/github-icon.svg"
            alt="github"
            width="28"
            height="29"
          />
        </a>
        <a href="https://github.com/ryanolee" target="_blank">
          <img
            src="/icons/github-icon.svg"
            alt="github"
            width="28"
            height="29"
          />
        </a>
      </div>
    </div>
  );
};
