import * as AuthSession from "expo-auth-session";
import { Toast } from "native-base";
import { usePostGoogleLogin } from "../api/post-google-login";
import { CLIENT_API } from "../config/axios/api-client";
import {
  CLIENT_ID_GOOGLE,
  REDIRECT_URI_EXPO,
  RESPONSE_TYPE,
  SCOPE,
} from "../constants/google";

type AuthResponse = {
  params: {
    access_token: string;
  };
  type: string;
};

const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID_GOOGLE}&redirect_uri=${REDIRECT_URI_EXPO}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

const useSignInGoogle = ({ onSuccess }: { onSuccess?: () => void } = {}) => {
  const { login, ...args } = usePostGoogleLogin({ onSuccess });

  const signWithGoogle = async () => {
    try {
      const { type, params } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthResponse;

      if (type === "success") {
        const response = await login({
          token: params.access_token,
        });

        return response;
      }
    } catch (err) {}
  };

  return { signWithGoogle, ...args };
};

export { useSignInGoogle };
