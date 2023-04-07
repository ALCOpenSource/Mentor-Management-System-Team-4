import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FcGoogle } from "react-icons/fc";

const Button = styled.button`
  ${tw`
flex
items-center
text-center
justify-center 
py-[10px]
px-[40px]
w-full
font-Mukta
font-bold
text-[18px]
leading-[30px]
text-[#023C40]
bg-[#FFFFFF]
border 
border-solid
border-[#023C40]
rounded-[10px]
lg:w-[426px]
`}
`;

function GogleSignup() {
  return (
    <Button>
      <span className="mr-3">
        <FcGoogle size={30} />
      </span>
      Signin with Google
    </Button>
  );
}

export default GogleSignup;
