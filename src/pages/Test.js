import axios from "axios";
import { useEffect, useState } from "react";

function Test () {
  const [data, setData] = useState([]);

  useEffect(() => { // 원래 Javascript 코드 방식
  }, []);

  return (
    <div></div>
  );
}

export default Test;