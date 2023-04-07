import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import PropTypes from "prop-types";

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
text-[#FFFFFF]
bg-primary
rounded-[10px]
lg:w-[426px]
`}
`;
function AuthButton(props) {
  const { placeholder } = props;
  return <Button>{placeholder}</Button>;
}

export default AuthButton;

AuthButton.propTypes = {
  placeholder: PropTypes.string.isRequired,
};
