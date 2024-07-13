import React from "react";
import styles from "./head.module.scss";
import { Col, Image, Row } from "react-bootstrap";

const AboutHead = () => {
  return (
    <div className={styles.AboutHead}>
      <Row>
        <Col xs={12} lg={7}>
          <div className={styles.left}>
            <h2>
              Our Passion for Agriculture Nurturing Growth and Sustaining the
              Future
            </h2>
            <br />

            <p>
              Decades ago, we began our journey trading in agricultural products
              with a primary focus on profitability. As we delved deeper into
              environmental issues, we realized the critical importance of
              sustainable products and ecological solutions for the well-being
              of our planet. This realization ignited our passion and reshaped
              our vision. Rather than just profit, we began measuring the
              positive impact we create. This shift brings us immense joy and
              complete satisfaction, knowing we contribute to a healthier and
              happier Earth.
            </p>
          </div>
        </Col>
        <Col xs={12} lg={5}>
          <div className={styles.right}>
            <Image src="/assets/images/farm2.jpg" alt="farm" fluid />
            <div>Since 1996</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutHead;
