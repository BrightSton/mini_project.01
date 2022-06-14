import axios from "axios";
import { useState } from "react";
import { axiosPost as aPost , axiosComment as aComment } from "./axiosData";

function useAxios () {
  const [data, setData] = useState([]);
  const [singleData, setSingleData] = useState();

  return data;
}