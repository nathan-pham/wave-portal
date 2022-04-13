import tw from "tailwind-styled-components";

const Button = tw.button`
    px-4 min-w-[6rem] h-10 
    whitespace-nowrap
    text-center grid place-items-center
    border-none rounded-md outline-none 
    bg-blue-600 hover:bg-blue-700 text-white
    select-none
`;

export default Button;
