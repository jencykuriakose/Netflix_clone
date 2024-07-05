import axios from "axios";

import { baseUrl } from "./constants"

const instance = axios.create({
  baseURl: baseUrl,
});

export default instance;
