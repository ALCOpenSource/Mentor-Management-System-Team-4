import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import AuthButton from "./Buttons/AuthButton";

const Box = styled.div`
  ${tw`
flex flex-col relative text-start items-start px-2
`}
`;

const Title = styled.div`
  ${tw`
flex font-Mukta font-semibold text-[32px] leading-[53px] text-[#141414] mb-4
`}
`;

const Description = styled.div`
  ${tw`
font-Mukta font-normal text-[16px] leading-[27px] text-[#808080]
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
  mb-3
`}
`;
function AuthSetPassword() {
  return (
    <Box>
      <Title>Set new password</Title>
      <InputBase placeholder="Password" type={"password"} />
      <Description>
        *Your new password must be different from previously used password.
      </Description>

      <div className="mt-12">
        <AuthButton placeholder="Reset Password" />
      </div>
    </Box>
  );
}

export default AuthSetPassword;
