import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { PostsType } from "../types/PostType";

const usePostsQuery = () => {
  const { data, isLoading } = useQuery(
    ["posts"],
    (): Promise<AxiosResponse<PostsType[]>> => {
      return axios.get("https://ecoplease.hrefid.com/wp-json/wp/v2/posts");
    },
    {
      select: (data) => {
        const reversed = data.data.reverse();
        return reversed;
      },
    }
  );
  return { data, isLoading };
};


export default usePostsQuery