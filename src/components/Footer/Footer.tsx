const Footer = () => {
  return (
    <div className="flex">
      {/* DESKTOP VIEW */}
      <div className="hidden md:flex mx-auto items-center mt-[84px] pb-[30px] gap-10">
        <div className="font-medium text-[16px] leading-[32px] font-dm_sans text-[#A0A5BA]">
          FAQ
        </div>
        <div className="font-medium text-[16px] leading-[32px] font-dm_sans text-[#A0A5BA]">
          Exx Website
        </div>
        <div className="font-medium text-[16px] leading-[32px] font-dm_sans text-[#A0A5BA]">
          Terms &amp; Conditions
        </div>
        <div className="font-medium text-[16px] leading-[32px] font-dm_sans text-[#A0A5BA]">
          Help
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div
        className="md:hidden grid w-full justify-between grid-cols-10 items-center mt-[84px] pb-[30px] gap-5"
        style={{ color: "rgba(0, 14, 72, 0.7)" }}
      >
        <div className="col-span-4 font-medium text-[12px] leading-[14px] font-dm_sans">
          &copy; 2022 Exx Network
        </div>
        <div className="col-span-6 w-full">
          <div className="flex w-full justify-around">
            <div className="font-medium text-[12px] leading-[14px] font-dm_sans">
              FAQ's
            </div>
            <div className="font-medium text-[12px] leading-[14px] font-dm_sans">
              |
            </div>
            <div className="font-medium text-[12px] leading-[14px] font-dm_sans">
              Privacy Policy
            </div>

            <div className="font-medium text-[12px] leading-[14px] font-dm_sans">
              |
            </div>
            <div className="font-medium text-[12px] leading-[14px] font-dm_sans">
              Support
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Footer as default };
