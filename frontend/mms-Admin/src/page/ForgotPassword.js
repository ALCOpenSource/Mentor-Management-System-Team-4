import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import AuthLogoAndText from '../components/AuthLogoAndText';
// import AuthSignup from '../components/AuthSignup';
import AuthSetPassword from '../components/AuthSetPassword';

const Box = styled.section`
  ${tw`
h-screen
`}
`;

const Container = styled.div`
  ${tw`
h-full
w-full
`}
`;

const Wrapper = styled.div`
  ${tw`
flex flex-wrap h-full items-center justify-center lg:justify-between p-0 w-full
`}
`;

const LeftContainer = styled.div`
  ${tw`
  relative  w-full h-screen lg:w-1/2 bg-primary items-center justify-center m-auto flex p-4
`}
`;

const RightContainer = styled.div`
  ${tw`
  w-full px-2  sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 items-center justify-center m-auto 
`}
`;

const Title = styled.div`
  ${tw`
flex font-Mukta font-semibold text-[32px] leading-[53px] text-[#141414] mb-3
`}
`;

const Description = styled.div`
  ${tw`
font-Mukta font-normal text-[24px] leading-[40px] text-[#808080]
`}
`;
function ForgotPassword() {
  return (
    <Box>
      <Container>
        <Wrapper>
          <LeftContainer>
            <AuthLogoAndText />
          </LeftContainer>
          <RightContainer>
            <div className="w-full items-center m-auto sm:max-w-[426px] py-10 ">
              <AuthSetPassword />
            </div>
          </RightContainer>
        </Wrapper>
      </Container>
    </Box>
  );
}

export default ForgotPassword;
