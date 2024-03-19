import { formatTime } from 'fastUI';
import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(
    formatTime(Date.now(), 'YYYY-MM-DD hh:mm:ss'),
  );
  const [siteDate, setSiteDate] = useState<string>();
  useEffect(() => {
    const timestamp = 1673850986000; //2023-01-16 14:36:26
    const siteStr: string = formatTime(timestamp);
    setSiteDate(siteStr);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const date = Date.now();
      const dateStr = formatTime(date, 'YYYY-MM-DD hh:mm:ss');
      setCurrentTime(dateStr);
    });
    return () => {
      clearInterval(timer);
    };
  }, []);

  const inputRef = React.useRef<HTMLInputElement | any>();
  const onFormatData = () => {
    const value = inputRef.current?.value;
    if (value) {
      const dateStr = formatTime(Number(value), 'YYYY-MM-DD hh:mm:ss');
      setSiteDate(dateStr);
    }
  };
  return (
    <>
      当前时间：{currentTime}
      <hr />
      指定时间转换:
      <input type="number" ref={inputRef} defaultValue={1673850986000} />
      &nbsp;
      <button type="button" onClick={onFormatData}>
        转换
      </button>
      &nbsp;
      {siteDate}
    </>
  );
};

export default App;
