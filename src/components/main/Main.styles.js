import styled from "styled-components"
import Img from 'gatsby-image'
import { Typography } from 'antd'
import { device } from 'utils/device'

const {Title} = Typography

export const IntroTitle = styled(Title)`
    @media ${device.mobileS} {
        font-size: 44px !important;
        max-width: 600px;
        margin: 0 auto;
    }
    @media ${device.laptop} {
        font-size: 70px !important;
        max-width: 600px;
        margin: 0 auto;
    }
`;

export const IntroSubTitle = styled(Title)`

`;

export const CompanyFeaturesDiv = styled.div`
    margin-top: 40px;
    text-align: center;
    min-height: 100px;
    padding-bottom: 100px;
`;

export const BackgroundImage = styled(Img)`
    height: 100vh;
    max-height: 1080px;
    position: relative;
    z-index: 2;

`;
// rgba(36,122,182,0.7)
export const BackgroundImageOverlay = styled.div`
    width: 100%;
    height: 100vh;
    max-height: 1080px;
    background-color: rgba(0,0,0,0.3);
    position: absolute;
    z-index: 2;
    top: 0
`;

export const IntroContentContainer = styled.div`
    text-align: center;
    position: absolute;
    z-index: 4;
    @media ${device.mobileS} {
        max-width: 100%;
        top: calc((100vh - 384px) / 2);
    }
    @media ${device.laptop} {
        max-width: 100%;
        margin: 0 auto;
        left: 0;
        right: 0;
        top: calc((100vh - 192px) / 2);
    }
    
`;