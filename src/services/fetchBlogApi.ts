import { URL } from "../constants";
import { IBlogPost } from "../types";

export const fetchBlogApi = async (): Promise<IBlogPost[]> => {
  const res = await fetch(URL);
  if (!res.ok) {
    console.log(res.statusText);
  }
  return res.json();
};
