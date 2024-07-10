import React from "react";
import styles from "./dow_we_care.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import Scroller from "./scroller/scoller";
import Link from "next/link";
import { ChevronDown } from "react-bootstrap-icons";
import ScrollToIdArrow from "@/components/scroll_to_id_arrow/scorll_to_id_arrow";
import { useEffect, useRef, useState } from "react";
import InfiniteScroll from "./infinite_scroll/infinite_scroll";
import MultiCarousal from "./multi_carousal/multi_carousal";

const DoWeCareSection = () => {
  const vCards = [
    {
      id: "1",
      head: "Toxic Emissions",
      img: "emission.jpg",
      text: "Plastic manufacturing processes release harmful chemicals and pollutants into the air.",
    },
    {
      id: "2",
      head: "Resource Depletion",
      img: "rig1.jpg",
      text: "Plastics are primarily made from petroleum and natural gas, which are non-renewable resources.",
    },
    {
      id: "3",
      head: "Carbon Footprint",
      img: "climate.jpeg",
      text: "The production generates significant greenhouse gas emissions, contributing to climate change.",
    },
    {
      id: "4",
      head: "Environmental Impact",
      img: "plastic.webp",
      text: "Plastics take hundreds of years to decompose.",
    },
    {
      id: "5",
      head: "Ecosystem Disruption",
      img: "plastic_in_sea.jpg",
      text: "Plastics accumulate in oceans, disrupting ecosystems and harming marine life.",
    },
    {
      id: "6",
      head: "Soil Contamination",
      img: "dry_land.jpg",
      text: "Plastics affect soil health, reduce crop yields, and harm soil organisms.",
    },
    {
      id: "7",
      head: " Contamination of Food",
      img: "microplastic.jpg",
      text: "Microplastics are found in salt, drinking water, and even the air we breathe, leading to human exposure.",
    },
    {
      id: "8",
      head: "Health Effects",
      img: "inflamation.jpg",
      text: "Potential health impacts include inflammation, cell damage, and disruption of endocrine systems due to the chemicals associated with microplastics.",
    },
  ];

  return (
    <div id="do_we_care" className={styles.DoWeCareSection}>
      <div className={styles.bg} />

      <CustomContainer>
        <SectionHeading heading="Do We Really Care?" />
        {/* <Scroller /> */}

        {/* <InfiniteScroll cards={vCards} /> */}

        <MultiCarousal cards={vCards} />

        <ScrollToIdArrow id={"we_do_care"} text={"We Do Really Care!"} />
      </CustomContainer>
    </div>
  );
};

export default DoWeCareSection;
