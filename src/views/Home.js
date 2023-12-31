import React from 'react';
import TitlewithCountdown from '../components/sections/TitlewithCountdown';
import Sponsor from '../components/sections/Sponsor';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import ImportantDate from '../components/sections/ImportantDate';
import Social from '../components/sections/Social';
import Cta from '../components/sections/Cta';
import {TwitterTimelineEmbed} from "react-twitter-embed";
import Organization from "../components/sections/Organization";
import {submissionabstractLink} from "../utils/ulti";
import Button from "../components/elements/Button";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <TitlewithCountdown imageFill className="illustration-section-01" />
        <FeaturesSplit invertMobile imageFill className="illustration-section-03" />
        <ImportantDate  topDivider className="gradient-section" />
          <Organization topDivider bottomDivider />
        <Sponsor topDivider bottomDivider />
         {/*<Social topDivider bottomDivider />*/}
      </React.Fragment>
    );
  }
}

export default Home;
