import React from "react";
import styles from "./we_do_care.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import { Col, Image, Row } from "react-bootstrap";
import fonts from "@/styles/fonts";
import CustomButton from "@/components/ui/custom_button/custom_button";
import ScrollToIdArrow from "@/components/scroll_to_id_arrow/scorll_to_id_arrow";

const WeDoCareSection = () => {
  return (
    <div className={styles.WeDoCareSection} id="we_do_care">
      <div className={styles.overlay} />
      <div className={styles.cont}>
        <CustomContainer>
          <SectionHeading
            heading="A Vision for a Cleaner, Greener Planet"
            variant={2}
          />
          <hr />
          <div className={styles.top}>
            <Row>
              <Col xs={12} lg={4}>
                <div className={styles.topImg}>
                  <Image
                    src="/assets/images/eco-friendly-plastic.jpg"
                    fluid
                    alt="eco-friendly-plastic"
                  />
                </div>
              </Col>
              <Col xs={12} lg={8}>
                <div className={styles.topText}>
                  <div>
                    <h1 className={fonts.HeadFont}>
                      Nature Made Plastics <span> (NAM)</span>
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quas, error excepturi, amet laboriosam quibusdam labore
                      dicta doloremque reiciendis quam est soluta sapiente. Quod
                      odit facere officia quis, qui ipsam, cumque deleniti
                      animi, totam in iusto veritatis temporibus quae ipsum
                      mollitia ea? Eligendi itaque expedita ipsam esse minima,
                      natus placeat. Exercitationem?
                    </p>
                    <br />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Beatae at incidunt iure nesciunt, tempore eum est
                      inventore quia dignissimos necessitatibus iusto ratione
                      facilis iste, culpa debitis omnis saepe?
                    </p>
                  </div>
                  <CustomButton>Know More</CustomButton>
                </div>
              </Col>
            </Row>
          </div>
        </CustomContainer>
      </div>
      <ScrollToIdArrow text="Why NAM?" id="why_nam" />
    </div>
  );
};

export default WeDoCareSection;
