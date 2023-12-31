import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
// import Button from '../elements/Button';
import Image from '../elements/Image';
import Countdown from '../elements/Countdown';
import Button from "@mui/material/Button/Button";
import {ButtonGroup} from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import VisibilityIcon from '@mui/icons-material/Visibility';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

class TitlewithCountdown extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,      
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      invertMobile,
      invertDesktop,
      alignTop,
      imageFill,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'hero section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'hero-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const splitClasses = classNames(
      'split-wrap',
      invertMobile && 'invert-mobile',
      invertDesktop && 'invert-desktop',
      alignTop && 'align-top'
    );

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <div className={splitClasses}>
              <div className="split-item">
                <div className="hero-content split-item-content center-content-mobile">
                  <h2 className="mt-0 mb-16 reveal-from-left">
                    The 4th  International Conference on Engineering Physics, MEMS-Biosensors and Applications  (4th ICEBA2023)
                  </h2>
                  <p className="mt-0 mb-32 reveal-from-left" data-reveal-delay="200">
                    December 8-9, 2023 - VNUHCM-University of Science
                    227 Nguyen Van Cu Str., Dist. 5, Ho Chi Minh city, Vietnam
                  </p>
                  <Countdown date={new Date('12/08/2023')}/>
                  {/*<div className="reveal-from-left" data-reveal-delay="400">*/}
                  {/*    <p className="mt-32">Concurrent conference <Button size="large" color="primary" variant="text" href={"https://bdcat-conference.org/"}>BDCAT 2022</Button> </p>*/}
                  {/*  /!*<Button tag="a" color="primary" href="https://cruip.com/" wideMobile>*!/*/}
                  {/*  /!*  Pricing and plans*!/*/}
                  {/*  /!*</Button>*!/*/}
                  {/*</div>*/}
                </div>
                <div className="hero-figure is-3d split-item-image illustration-element-03 reveal-from-right">
                  <Image
                    className="has-shadow"
                    src={require('./../../assets/images/header.JPG')}
                    alt="Hero"
                    width={528}
                    height={396} />
                  <div style={{width:'100%',display:'flex'}}>
                    <ButtonGroup variant="contained" sx={{margin:'auto'}}>
                      <Button href={require('../../assets/files/1. Announcement of 4thICEBA2023.pdf')} target={'_blank'} className={'button'}
                      >Official Announcement
                      </Button>
                      <Button
                          size="small"
                          href={require('../../assets/files/1. Announcement of 4thICEBA2023.pdf')}
                          download
                          className={'button'}
                      >
                        <DownloadIcon />
                      </Button>
                    </ButtonGroup>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

TitlewithCountdown.propTypes = propTypes;
TitlewithCountdown.defaultProps = defaultProps;

export default TitlewithCountdown;
