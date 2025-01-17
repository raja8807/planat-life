import React from "react";
import styles from "./head.module.scss";
import { Col, Image, Row } from "react-bootstrap";
import CustomButton from "@/components/ui/custom_button/custom_button";
import CustomContainer from "@/components/ui/custom_container/custom_container";

const ProductHead = () => {
  return (
    <div className={styles.AboutHead}>
      <CustomContainer>
        <Row>
          <Col xs={12} lg={8}>
            <div className={styles.left} data-aos="fade-right">
              <h2>
                Made from 100% plant-based materials, our straws are the perfect
                eco-friendly alternative to plastic straws. They are sturdy,
                biodegradable, and safe for both hot and cold beverages.
              </h2>
              <br />

              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
                maiores architecto magnam aspernatur deleniti soluta iusto
                ratione repellendus quia est! Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Modi maiores architecto magnam
                aspernatur deleniti soluta iusto ratione repellendus quia est!
              </p>
              <br />
              <CustomButton>Enquire Now</CustomButton>
            </div>
          </Col>
          <Col xs={12} lg={4}>
            <div className={styles.right} data-aos="fade-left">
              <Image src="/assets/images/granules.webp" alt="farm" fluid />
              <div>PHA Granules</div>
            </div>
            <br />
            <br />
          </Col>
        </Row>
      </CustomContainer>
    </div>
  );
};

export default ProductHead;
