import styled from "styled-components";
import BackgroundImage from "./ui/BackgroundImage";

const HeroImg = styled(BackgroundImage)`
  position: relative;
  width: 100vw;
  left: 50%;
  margin-left: -50vw;
  margin-top: -10px;
  @media ${({ theme }) => theme.devices.tabletS}{
    height: 360px;
  }
  @media ${({ theme }) => theme.devices.tabletL}{
    height: 460px;
  }
  @media ${({ theme }) => theme.devices.laptopS}{
    height: 560px;
  }
`;

const HeaderImage = () => {
  return (
    <HeroImg img={"/images/headerImg.png"} height={"260px"} />
  )
}

export default HeaderImage;