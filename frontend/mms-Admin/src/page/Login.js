import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import AuthLogoAndText from "../components/AuthLogoAndText";
import AuthForm from "../components/FormInputs/AuthForm";

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
  relative  w-full h-full lg:w-1/2 bg-primary items-center justify-center m-auto flex p-4
`}
`;

const RightContainer = styled.div`
  ${tw`
  w-full px-2  sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 items-center justify-center m-auto 
`}
`;

function Login() {
  return (
    <Box>
      <Container>
        <Wrapper>
          <LeftContainer>
            <AuthLogoAndText />
          </LeftContainer>
          <RightContainer>
           <div className="w-full items-center m-auto sm:max-w-[426px] py-10 ">
           <AuthForm />
           </div>
          </RightContainer>
        </Wrapper>
      </Container>
    </Box>
  );
}

export default Login;
