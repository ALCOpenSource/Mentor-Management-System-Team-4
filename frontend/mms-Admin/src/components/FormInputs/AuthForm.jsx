import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import AuthButton from "../Buttons/AuthButton";
import { Link } from "react-router-dom";
import GogleSignup from "../Buttons/GoogleSignup";

const Wrapper = styled.div`
  ${tw`
flex flex-col relative text-start items-start px-2
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
font-Mukta font-bold text-[16px] leading-[27px] text-[#141414] w-full
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
            marginBottom: "50px",
            width: "100%",
          }}
        >
          <Header>Welcome!</Header>
          <Description>Login to continue</Description>
        </div>
        <InputWrapper>
          <InputBase placeholder="email" type="email" />
          <InputBase placeholder="Password" type={"password"} />
        </InputWrapper>

        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            marginTop: "30px",
          }}
          className="lg:w-[426px]"
        >
          <AuthButton placeholder="Login" />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            marginTop: "20px",
          }}
          className="lg:min-w-[426px]"
        >
          <div></div>
          <Link to="/accounts/forgot-password">
            <ForgotPassword style={{ textDecorationLine: "underline" }}>
              Forgot Password?
            </ForgotPassword>
          </Link>
        </div>

        <div className="mt-10 w-full flex  lg:w-[426px]  ">
          <GogleSignup />
        </div>
        <div className=" mt-10  flex justify-between w-full">
          <div className=" w-full "></div>

          <Link to="/accounts/forgot-password" className="w-full">
            <Signup>New User? Signup</Signup>
          </Link>
          <div className=" w-full "></div>
        </div>
      </Wrapper>
    </form>
  );
}

export default AuthForm;
