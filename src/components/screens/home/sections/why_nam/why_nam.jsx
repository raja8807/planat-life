import React from "react";
import styles from "./why_nam.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Col, Image, Row } from "react-bootstrap";

const Card = () => {
  return (
    <Col xs={12} md={6} lg={4}>
      <div className={styles.card}>
        <div>
          <Image src="/crop_bg.jpg" alt="img" fluid />
        </div>
        <br />
        <div>
          <h3>Non-Toxic Emission</h3>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis cum
            nihil recusandae tempora corrupti pariatur iure provident itaque
            commodi ipsum voluptatem nesciunt deleniti, architecto ipsam eaque
            porro culpa exercitationem! Suscipit!
          </p>
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
      text: "",
      img: "zero-emission.jpg",
    },
    {
      id: "c2",
      title: "Sustainable Resources",
      text: "",
      img: "",
    },
    {
      id: "c3",
      title: "Low Carbon Footprint",
      text: "",
      img: "windmill.jpg",
    },
    {
      id: "c4",
      title: "Biodegradability",
      text: "",
      img: "compost.jpg",
    },
    {
      id: "c5",
      title: " Ecosystem Preservation",
      text: "",
      img: "",
    },
    {
      id: "c6",
      title: "Soil Health Improvement",
      text: "",
      img: "",
    },
    {
      id: "c7",
      title: "Food Safety",
      text: "",
      img: "",
    },
    {
      id: "c8",
      title: "Health Benefits",
      text: "",
      img: "",
    },
  ];

  return (
    <div className={styles.WhyNamSection} id="why_nam">
      <CustomContainer>
        <div className={styles.wrap}>
          <Row>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Row>
        </div>
      </CustomContainer>
    </div>
  );
};

export default WhyNamSection;
