import { AxiosError } from "axios";
import useSwrMutation from "swr/mutation";
import { CLIENT_API } from "../config/axios/api-client";
import { useTokenStore } from "../store/token";
import { useUserStore } from "../store/user";
import { User } from "../types";
import { DefaultData } from "./types";

interface PostGoogleLogin {
  token: string;
}

interface PostGoogleLoginResponse {
  user: User;
  token: string;
}

const url = "/auth/google";

const postGoogleLogin = (
  url: string,
  { arg }: DefaultData<PostGoogleLogin>
) => {
  const data = arg;

  return CLIENT_API.post<PostGoogleLoginResponse>(url, data);
};

const usePostGoogleLogin = ({ onSuccess }: { onSuccess?(): void } = {}) => {
  const { setUser } = useUserStore();
  const { setToken } = useTokenStore();

  const { trigger, isMutating, data, error, reset } = useSwrMutation(
    url,
    postGoogleLogin,
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
    login: trigger,
    isLoading: isMutating,
    user,
    error: error as AxiosError | undefined,
    reset,
  };
};

export { usePostGoogleLogin };
