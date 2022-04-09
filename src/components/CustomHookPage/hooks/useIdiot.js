import { useState, useEffect } from "react";

const useIdiot = (name) => {
  const [idiot, setIdiot] = useState("");

  useEffect(() => {
    setIdiot(`${name} is indeed an idiot!`);
  }, [name]);

  return idiot;
};

export default useIdiot;
