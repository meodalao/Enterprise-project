import Axios from "axios";

const appApi = Axios.create({
  timeout: 15000,
});

export { appApi };