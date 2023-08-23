export const RelevantFor = ({ data, mobileGap, Icon }) => {
  const { label, list } = data;
  return (
    <div className="xl:mt-[99px]">
      <h3 className="text-center mb-[8px] text-middle font-bold md:text-large md:text-left md:mb-[24px] xl:text-[32px]">
        {label}
      </h3>
      <ul className="flex flex-col gap-[8px] items-center md:gap-[12px] xl:gap-[24px]">
        {list.map((el, index) => {
          return (
            <li
              key={index}
              className={`flex gap-[${mobileGap}] justify-start items-center w-[216px] md:gap-[16px] xl:w-[413px]`}
            >
              <Icon className="w-[12px] h-[12px] md:w-[16px] md:h-[16px] xl:w-[32px] xl:h-[32px]" />
              <p className="w-[184px] md:text-middle leading-[1.15] xl:w-[357px] xl:text-large">
                {el}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
