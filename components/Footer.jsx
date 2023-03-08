const Footer = () => {
  return (
    <div className="flex text-white w-full bg-darkBlue items-center justify-between w-full p-6 text-xs md:text-sm ">
      <div className="space-x-3 md:space-x-6 ">
        <a href="#" className="hover:text-darkGrayishBlue">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-darkGrayishBlue">
          Terms of Service
        </a>
      </div>
      <div>Copyright &copy; 2022, All Rights Reserved</div>
    </div>
  );
};

export default Footer;
