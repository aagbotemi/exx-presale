import { Fragment, useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [hour, setHour] = useState<number>(0);

  const getTime = () => {
    setHour(new Date().getHours());
    setMinutes(new Date().getMinutes());
    setSeconds(new Date().getSeconds());
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Fragment>
      <span className="font-space_grot font-bold text-2xl tracking-[-0.02em] text-black">
        {hour <= 9 ? `0${hour}` : hour}:{minutes <= 9 ? `0${minutes}` : minutes}
        :{seconds <= 9 ? `0${seconds}` : seconds}
      </span>
    </Fragment>
  );
};

export { Timer as default };
