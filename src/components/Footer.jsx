import { TfiGithub } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className="relative bottom-0 z-10 h-11 w-full bg-black bg-opacity-5 shadow-lg backdrop-blur-2xl">
      <div className="flex h-full flex-row items-center justify-end space-x-5">
        <a
          className="box-content grid size-[42.5px] place-items-center items-center border-t-2 border-transparent hover:border-t-2 hover:border-current"
          href="https://github.com/6uan"
        >
          <TfiGithub className="box-content size-5 text-white opacity-50" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
