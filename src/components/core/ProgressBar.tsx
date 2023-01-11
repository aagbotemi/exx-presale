interface IPercentage {
  percentage: number;
}

const ProgressBar = ({ percentage }: IPercentage) => {
  return (
    <div className="h-[10px] w-full bg-faint_blue rounded-[10px]">
      <div
        style={{ width: `${percentage}%` }}
        className={`h-full bg-primary rounded-[10px]`}
      ></div>
    </div>
  );
};

export { ProgressBar as default };
