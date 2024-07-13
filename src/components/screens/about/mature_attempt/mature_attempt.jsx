import React from "react";
import styles from "./mature_attempt.module.scss";
import { Col, Image, Row } from "react-bootstrap";
import CustomButton from "@/components/ui/custom_button/custom_button";

const MatureAttempt = () => {
  return (
    <div className={styles.MatureAttempt}>
      <h2
        style={{
          textAlign: "center",
        }}
      >
        The Mature Attempt
      </h2>
      <br />
      <Row>
        <Col xs={12} lg={5}>
          <div className={styles.right}>
            <Image src="/gviro_logo.png" alt="farm" fluid />
            {/* <div>Since 1970</div> */}
          </div>
          <br />
        </Col>
        <Col xs={12} lg={7}>
          <div className={styles.left}>
            <h2>The GreenViro</h2>
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
      </Row>
      <br />
      {/* <h2
        style={{
          textAlign: "center",
        }}
      >
        Achievements & Awards
      </h2>
      <br /> */}

      <div
        style={{
          textAlign: "center",
        }}
      >
        <CustomButton href={"https://www.gviro.com/"} target="_blank">
          Know More About Vashini
        </CustomButton>
      </div>
      <br />
    </div>
  );
};

export default MatureAttempt;
