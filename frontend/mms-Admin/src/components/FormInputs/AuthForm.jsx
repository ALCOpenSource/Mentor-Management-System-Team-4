import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";
import AuthButton from "../Buttons/AuthButton";
import GogleSignup from "../Buttons/GoogleSignup";
import Button from "../Buttons/Button";

const Wrapper = styled.div`
  ${tw`
flex flex-col relative text-start items-start px-4 w-full 
`}
`;

const InputWrapper = styled.div`
  ${tw`
flex flex-col gap-4 items-center  w-full lg:items-start
`}
`;

const InputBase = styled.input`
  ${tw`
  block
  min-h-[auto]
  w-full
  lg:w-[426px]
  rounded
  border
  border-solid
  border-[#CCCCCC]
  bg-transparent
  px-3
  py-[0.32rem]
  leading-[33px]
  outline-none
  transition-all
  duration-200
  ease-linear
  focus:placeholder:opacity-100
  placeholder:text-[20px]
  placeholder:font-Mukta
  
`}
`;

const Header = styled.div`
  ${tw`
font-Mukta font-semibold text-[32px] leading-[53px] text-[#141414]
`}
`;

const Description = styled.p`
  ${tw`
font-Mukta font-normal text-[24px] leading-[40px] text-[#808080]
`}
`;

const ForgotPassword = styled.p`
  ${tw`
font-Mukta font-bold text-[16px] leading-[27px] text-[#141414]
`}
`;

const Signup = styled.p`
  ${tw`
font-Mukta font-bold text-[16px] leading-[27px] text-[#141414] w-full text-center items-center justify-center m-auto flex
`}
`;

function AuthForm() {
  return (
    <form action="">
      <Wrapper>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "start",
            justifyContent: "center",
            margin: "auto",
            gap: "4px",
            marginBottom: "20px",
            width: "100%",
          }}
        >
          <Header>Welcome!</Header>
          <Description>Login to continue</Description>
        </div>
        <InputWrapper>
          <InputBase placeholder="Email" type="email" />
          <InputBase placeholder="Password" type={"password"} />
        </InputWrapper>

        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            marginTop: "30px",
            maxWidth: "426px",
          }}
        >
          <Button color="primary" type="button">
            Login
          </Button>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            marginTop: "18px",
            maxWidth: "426px",
          }}
        >
          <div className="flex  w-[20px] "></div>
          <div>
            <Link to="/account/forgot-password">
              <ForgotPassword
                style={{
                  textDecorationLine: "underline",
                }}
              >
                Forgot Password?
              </ForgotPassword>
            </Link>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            marginTop: "10px",
            maxWidth: "426px",
          }}
        >
          <Button color="white" type="button">
            Signin with Google
          </Button>
        </div>

        <div css={[tw` mt-4  flex justify-between w-full max-w-[426px] `]}>
          <div css={[tw`w-full`]}></div>

          <Link to="/" css={[tw`w-full`]}>
            <Signup>New User? Signup</Signup>
          </Link>
          <div css={[tw`w-full`]}></div>
        </div>
      </Wrapper>
    </form>
  );
}

export default AuthForm;
