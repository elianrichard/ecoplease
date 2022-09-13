import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

import { server } from "../../../config";

import { PostsType } from "../types/PostType";

const usePostsQuery = () => {
  const { data, isLoading } = useQuery(
    ["posts"],
    (): Promise<AxiosResponse<PostsType[]>> => {
      return axios.get(`${server}/wp-json/wp/v2/posts`);
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

export default usePostsQuery;
