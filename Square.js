import { useState } from "react";

//export default function Square({ value }) {
export default function Square() {
  const [value, setValue] = useState(null);

  const [click, setClick] = useState(0);
  function handleClick() {
    console.log("clicked!");
    setValue("X");

    let temp = value + 1;

    setValue(temp);

    console.log("clicked!" + value);
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}
