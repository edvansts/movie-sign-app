import { CLIENT_API } from "../config/axios/api-client";
import useSwrMutation from "swr/mutation";
import { AxiosError } from "axios";
import { DefaultData } from "./types";
import { User } from "../types";
import { useUserStore } from "../store/user";
import { useTokenStore } from "../store/token";

interface PostRegister {
  username: string;
  email: string;
  password: string;
  name: string;
}

interface PostRegisterResponse {
  user: User;
  token: string;
}

const postRegister = (url: string, { arg }: DefaultData<PostRegister>) => {
  return CLIENT_API.post<PostRegisterResponse>(url, arg);
};

const usePostRegister = ({ onSuccess }: { onSuccess?(): void } = {}) => {
  const { setUser } = useUserStore();
  const { setToken } = useTokenStore();

  const { trigger, isMutating, data, error, reset } = useSwrMutation(
    "/auth/register",
    postRegister,
    {
      onSuccess: ({ data: { token, user } }) => {
        onSuccess?.();

        setToken(token);
        setUser(user);
      },
    }
  );

  const user = data?.data;

  return {
    register: trigger,
    isLoading: isMutating,
    user,
    error: error as AxiosError | undefined,
    reset,
  };
};

export { usePostRegister };
