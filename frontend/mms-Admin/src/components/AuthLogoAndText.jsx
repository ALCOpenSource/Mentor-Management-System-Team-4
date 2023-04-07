import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import MMS from "../Constants/image"

const Logo = styled.img`
  ${tw`
w-[244.27px] h-[200px]
`}
`;

const LogoText = styled.h2`
  ${tw`
font-Mukta font-bold text-[32px] flex items-center leading-[53px] text-center text-[#FFFFFF]
`}
`;

const LogoWrapper = styled.div`
  ${tw`
flex flex-col items-center justify-between items-center w-full  gap-6
`}
`;

function AuthLogoAndText() {
  return (
    <LogoWrapper>
      <Logo src={MMS} />
      <LogoText>Mentor Management System</LogoText>
    </LogoWrapper>
  );
}

export default AuthLogoAndText;
