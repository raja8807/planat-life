import React from "react";
import styles from "./banner.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import fonts from "@/styles/fonts";
import { ChevronDown } from "react-bootstrap-icons";
import Link from "next/link";
import CustomButton from "@/components/ui/custom_button/custom_button";
import axios from "axios";

const BannerSection = () => {
  return (
    <div className={styles.BannerSection}>
      <CustomContainer>
        <div className={styles.wrap} >
          <h1 className={fonts.HeadFont} data-aos="fade-down">
            We have thousands of suns and moons, but only one Earth to cherish
          </h1>

          <div className={styles.arrow} >
            <Link href="#do_we_care">
              <p>Do We Really Care?</p>
              <ChevronDown />
            </Link>
          </div>
        </div>
      </CustomContainer>
      <div className={styles.bg}></div>
    </div>
  );
};

export default BannerSection;
