import React from "react";
import styles from "./who_we_are.module.scss";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import { Col, Image, Row } from "react-bootstrap";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomButton from "@/components/ui/custom_button/custom_button";
import Link from "next/link";

const WhoWeAreSection = () => {
  return (
    <div className={styles.WhoWeAreSection}>
      <SectionHeading heading="Who We Are?" variant={3} />
      <CustomContainer>
        <br />
        <br />
        <br />
        <Row>
          <Col xs={12} lg={6}>
            <div data-aos="fade-left">
              <h3>The Vashini Agro</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                omnis velit enim, sapiente accusamus, commodi a distinctio
                beatae laboriosam suscipit optio quasi! Reiciendis magnam
                ratione beatae. Distinctio mollitia doloremque soluta adipisci
                blanditiis, error ipsam expedita voluptatem! Ullam ex aspernatur
                ipsam quae nisi
              </p>
                {/* <Link href='https://www.vashiniagro.com'>www.vashiniagro.com</Link> */}
              {/* <br /> */}
              <br />
              <h3>The GreenViro</h3>
              <p>
                GreenViro began with a mission to give back to Mother Earth by
                recycling farm waste into efficient charcoal. Our innovative
                process produces charcoal that&apos;s three times more
                energy-efficient and emits less CO2. This approach helps farmers
                manage waste and offers the public a superior, eco-friendly
                barbecue experience.
              </p>
              {/* <Link href='https://www.gviro.com/'>www.gviro.com</Link> */}

            </div>
          </Col>
          <Col>
            <div className={styles.logos} data-aos="fade-left">
              <Image src="/vashini_logo.svg" alt="vashini_logo" fluid />
              <br />
              <Image src="/gviro_logo.png" alt="vashini_logo" fluid />
            </div>
          </Col>
        </Row>
        <br />
        <div className={styles.btn} data-aos="fade-up">
          <CustomButton>Know More About Us</CustomButton>
          <CustomButton variant={2}>Explore Our Products</CustomButton>
        </div>
      </CustomContainer>
    </div>
  );
};

export default WhoWeAreSection;