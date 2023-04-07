import tw from "twin.macro";

const styles = {
  primary: tw`bg-primary  hover:bg-[#065d63] text-[#FFFFFF] border-0 font-Mukta font-bold  rounded-[10px] `,
  white: tw` bg-[#FFFFFF]  text-[#023C40] font-Mukta font-bold border border-solid border-[#023C40] rounded-[10px] `,
};

const Button = ({ children, clickAction, color, type }) => (
  <button
    type={type || "button"}
    css={[
      tw`my-2 py-[10px] px-[40px] w-full  cursor-pointer`,
      tw`text-[18px] leading-[30px] `,
      tw`rounded transition-all`,
      tw`focus:ring`,
      styles[color],
    ]}
    onClick={clickAction}
  >
    {children}
  </button>
);

export default Button;
