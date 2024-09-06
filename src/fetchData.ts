import axios from "axios";

export default async function fetchData(url: string) {
  const response = await axios.get(url);
  return response.data;
}
