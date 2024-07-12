import { TfiGithub, TfiLinkedin, TfiPin } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className="relative bottom-0 z-10 h-11 w-full bg-black bg-opacity-5 shadow-lg backdrop-blur-2xl">
      <div className="flex h-full w-full flex-row items-center justify-between px-4">
        <div className="flex items-center">
          <a
            className="box-content flex h-[42.5px] w-32 items-center space-x-2 border-t-2 border-transparent hover:border-t-2 hover:border-current"
            href="https://maps.app.goo.gl/QjP8zjnyUNaqq3ac6"
          >
            <TfiPin className="box-content size-5 text-white opacity-50" />
            <span className="mt-1 font-mono text-gray-300 opacity-50">
              Sweetwater
            </span>
          </a>
        </div>

        <div className="flex items-center space-x-0">
          <a
            className="box-content grid size-[42.5px] place-items-center items-center border-t-2 border-transparent hover:border-t-2 hover:border-current"
            href="https://www.linkedin.com/in/j-gomez-/"
          >
            <TfiLinkedin className="box-content size-5 text-white opacity-50" />
          </a>
          <a
            className="box-content grid size-[42.5px] place-items-center items-center border-t-2 border-transparent hover:border-t-2 hover:border-current"
            href="https://github.com/6uan"
          >
            <TfiGithub className="box-content size-5 text-white opacity-50" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
