import React from "react";
import styles from "./why_nam.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Col, Image, Row } from "react-bootstrap";

const Card = ({ data }) => {
  const { title, text, img } = data;

  return (
    <Col xs={12} md={6} lg={4}>
      <div className={styles.card} data-aos="fade-left">
        <div>
          <Image src={`/assets/images/${img}`} alt="img" fluid />
        </div>
        <br />
        <div>
          <h3>{title}</h3>
          <hr />
          <p>{text}</p>
        </div>
      </div>
    </Col>
  );
};

const WhyNamSection = () => {
  const cards = [
    {
      id: "c1",
      title: "Non-Toxic Emissions",
      text: "PHA manufacturing processes release minimal or no harmful chemicals and pollutants into the air.",
      img: "zero-emission.jpg",
    },
    {
      id: "c2",
      title: "Sustainable Resources",
      text: "PHAs are made from renewable resources, such as plant-based materials and agricultural by-products.",
      img: "mount.jpg",
    },
    {
      id: "c3",
      title: "Low Carbon Footprint",
      text: "The production of PHAs generates significantly lower greenhouse gas emissions, reducing the impact on climate change.",
      img: "windmill.jpg",
    },
    {
      id: "c4",
      title: "Biodegradability",
      text: "PHAs decompose naturally within months, leaving no lasting environmental impact.",
      img: "compost.jpg",
    },
    {
      id: "c5",
      title: "Ecosystem Preservation",
      text: "PHAs do not accumulate in oceans and are non-toxic to marine life, preserving ecosystems.",
      img: "coral.jpg",
    },
    {
      id: "c6",
      title: "Soil Health Improvement",
      text: "PHAs contribute to soil health as they decompose, enriching the soil and supporting crop yields.",
      img: "crop.jpg",
    },
    {
      id: "c7",
      title: "Food Safety",
      text: "PHAs do not contribute to microplastic contamination in food, water, or air, ensuring safer consumption.",
      img: "water.jpg",
    },
    {
      id: "c8",
      title: "Health Benefits",
      text: "PHAs do not release harmful chemicals and are safe for human contact, avoiding health issues such as inflammation and endocrine disruption.",
      img: "family.jpg",
    },
  ];

  return (
    <div className={styles.WhyNamSection} id="why_nam">
      <CustomContainer>
        <div className={styles.wrap}>
          <Row>
            {cards.map((c) => (
              <Card key={c.id} data={c} />
            ))}
          </Row>
        </div>
      </CustomContainer>
    </div>
  );
};

export default WhyNamSection;
