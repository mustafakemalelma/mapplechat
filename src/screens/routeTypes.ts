import type {NativeStackScreenProps} from "@react-navigation/native-stack";

export type AppStackParamList = {
  Auth: undefined;
  Chat: {nickname: string};
};

export type AuthScreenProps = NativeStackScreenProps<AppStackParamList, "Auth">;
export type ChatScreenProps = NativeStackScreenProps<AppStackParamList, "Chat">;
