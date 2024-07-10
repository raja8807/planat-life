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
        <div className={styles.wrap}>
          <h1
            className={fonts.HeadFont}
            data-aos="fade-down"
            data-aos-delay="1000"
          >
            We have thousands of suns and moons, but only one Earth to cherish
          </h1>

          <div
            className={styles.arrow}
            data-aos="fade-up"
            data-aos-delay="2000"
          >
            <Link href="#do_we_care">
              <p>Do We Really Care?</p>
              <ChevronDown />
            </Link>
          </div>
        </div>
      </CustomContainer>
      {/* <video autoPlay muted loop id="myVideo"  >
        <source src="./bg5.mp4" type="video/mp4"></source>
        Your browser does not support HTML5 video.
        
      </video> */}
      <div className={styles.bg}>
        <div className={styles.overlay} />
      </div>
    </div>
  );
};

export default BannerSection;
