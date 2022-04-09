import { useRef, useState } from "react";
import useIdiot from "./hooks/useIdiot";

const CustomHookPage = () => {
  const nameRef = useRef("null");
  const [name, setName] = useState("Me");

  const idiot = useIdiot(name);

  const changeName = (e) => {
    e.preventDefault();
    setName(nameRef.current.value);
  };

  return (
    <div>
      <form>
        <input placeholder="name" ref={nameRef} />
        <input
          placeholder="danger zone"
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={changeName}>Make Idiot!</button>
      </form>
      <div>Input was {name}</div>
      <h2>{idiot}</h2>
    </div>
  );
};

export default CustomHookPage;
