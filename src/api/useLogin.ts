import { AxiosError } from "axios";
import useSwrMutation from "swr/mutation";
import { CLIENT_API } from "../config/axios/api-client";
import { User } from "../types";
import { DefaultData } from "./types";

interface PostLogin {
  user: string;
  password: string;
}

const url = "/auth/login";

const postLogin = (url: string, { arg }: DefaultData<PostLogin>) => {
  const data = arg;

  return CLIENT_API.post<User>(url, data);
};

const useLogin = ({ onSuccess }: { onSuccess?(): void } = {}) => {
  const { trigger, isMutating, data, error, reset } = useSwrMutation(
    url,
    postLogin,
    { onSuccess }
  );

  const user = data?.data;

  return {
    login: trigger,
    isLoading: isMutating,
    user,
    error: error as AxiosError | undefined,
    reset,
  };
};

export { useLogin };
