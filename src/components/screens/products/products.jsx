import React from "react";
import styles from "./products.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import ProductHead from "./head/head";
import { Col, Image, Row } from "react-bootstrap";
import WhyXylem from "./why/why";

const ProductsScreen = () => {
  return (
    <div className={styles.ProductsScreen}>
      <SectionHeading heading="Our Products" variant={3} />
      <br />
      <ProductHead />
      <br />
      <div className={styles.cat}>
        <CustomContainer>
          <h2
            style={{
              textAlign: "center",
            }}
          >
            Categories
          </h2>
          <br />
          <Row>
            <Col xs={12} md={6}>
              <div className={styles.img}>
                <Image src="/assets/images/straw.jpg" alt="straw1" fluid />
                <p>Straight Straws</p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className={styles.img}>
                <Image src="/assets/images/b-straw.webp" alt="straw1" fluid />
                <p>Bendable Straws</p>
              </div>
            </Col>
          </Row>
        </CustomContainer>
      </div>
      <WhyXylem/>
    </div>
  );
};

export default ProductsScreen;
