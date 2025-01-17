import SectionHeading from "@/components/ui/section_heading/section_heading";
import React from "react";
import styles from "./why.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Col, Image, Row } from "react-bootstrap";

const Card = ({ data }) => {
  const { head, text } = data;

  return (
    <Col xs={12} md={6} lg={3}>
      <div className={`${styles.box} ${styles.left}`}>
        <div>
          <Image src="/assets/svg/bio.svg" alt="bio" fluid width={200} />
        </div>
        <div className={styles.text}>
          <h3>{head}</h3>
          <p>{text}</p>
        </div>
      </div>
    </Col>
  );
};

const WhyXylem = () => {
  const cards = [
    {
      head: "Complete Biodegradability",
      text: "Our Straws are 100% biodegradable in natural soil and marine environments, decomposing within 30 to 45 days in marine settings. Upon degradation, they break down into water, carbon dioxide, and biomass.",
    },
    {
      head: "Food Safety",
      text: "Our Straws are non-toxic and safe for use in food-contact applications, meeting stringent regulatory standards for health and safety.",
    },
    {
      head: "Renewable Resources",
      text: "Our Straws are produced from renewable resources, reducing dependency on fossil fuels.",
    },
    {
      head: "Low Carbon Footprint",
      text: "The production of plant based raw material for the straw typically has a lower carbon footprint compared to traditional petroleum-based plastics.",
    },
  ];

  return (
    <div className={styles.WhyXylem}>
      <SectionHeading heading="Why Xylem Straws?" variant={1} />
      <CustomContainer>
        <br />
        <h2>Stainability</h2>
        <br />
        <Row>
          {cards.map((c) => {
            return <Card key={c.text} data={c} />;
          })}
        </Row>
      </CustomContainer>
    </div>
  );
};

export default WhyXylem;
