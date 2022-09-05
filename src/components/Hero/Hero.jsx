import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Frontend Developer with an experience in React, an ITI Graduate and a
        Scrimba Graduate
      </SectionText>
      <Button>
        <a href="#tech" style={{ color: "#fff" }}>
          Learn More
        </a>
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
