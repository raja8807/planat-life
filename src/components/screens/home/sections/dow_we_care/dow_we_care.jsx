import React from "react";
import styles from "./dow_we_care.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import Scroller from "./scroller/scoller";
import Link from "next/link";
import { ChevronDown } from "react-bootstrap-icons";
import ScrollToIdArrow from "@/components/scroll_to_id_arrow/scorll_to_id_arrow";

const DoWeCareSection = () => {
  return (
    <div id="do_we_care" className={styles.DoWeCareSection}>
      <div className={styles.bg} />

      <CustomContainer>
        <SectionHeading heading="Do We Really Care?" />
        <Scroller />

        <ScrollToIdArrow id={"we_do_care"} text={"We Do Really Care!"} />
      </CustomContainer>
    </div>
  );
};

export default DoWeCareSection;
