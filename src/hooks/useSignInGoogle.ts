import * as AuthSession from 'expo-auth-session';
import { CLIENT_API } from '../config/axios/api-client';
import { CLIENT_ID_GOOGLE, REDIRECT_URI_EXPO, RESPONSE_TYPE, SCOPE } from "../constants/google"

type AuthResponse = {
    params: {
      access_token: string;
    },
    type: string;
  }

const useSignInGoogle = async () => {
    
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID_GOOGLE}&redirect_uri=${REDIRECT_URI_EXPO}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`
    
    const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthResponse;

    if(type === 'success') {

        const response = await CLIENT_API.post('/auth/google', { token: params.access_token })
        console.log(CLIENT_API)
        console.log(response)

        return {  
            user: response.data
        }
    }
      
}

export { useSignInGoogle }