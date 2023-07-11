import React, { useState, useEffect, useCallback } from "react";
const useWinSize = () => {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  });
  //useCallback，目的是为了缓存方法(useMemo是为了缓存变量)
  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    });
  }, []);
  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return size;
};

//组件中使用
const MyHooks = () => {
  const size = useWinSize();
  return (
    <div style={{fontSize:"30px"}}>

      size:{size.width}x{size.height}
    </div>
  );
};
export default MyHooks;
