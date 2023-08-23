export const RelevantFor = ({ data, mobileGap, Icon }) => {
  const { label, list } = data;
  return (
    <div>
      <h3 className="text-center mb-[8px] text-middle font-bold">{label}</h3>
      <ul className="flex flex-col gap-[8px] items-center">
        {list.map((el, index) => {
          return (
            <li
              key={index}
              className={`flex gap-[${mobileGap}] justify-start items-center w-[216px]`}
            >
              <Icon className="w-[12px] h-[12px]" />
              <p className="w-[184px] ">{el}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
