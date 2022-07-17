import React, {useState} from "react";

import { useTheme } from "../../config/theme/styled-components";
import {AuthScreenProps} from "../routeTypes";
import {ConfirmButton, ConfirmButtonText, Container, SecondaryTitle, NicknameInput, Title} from "./styles";

const Auth = ({navigation}: AuthScreenProps) => {
  const theme = useTheme();
  const [nickname, setNickname] = useState("");

  const onConfirmPress = () => {
    navigation.push("Chat", {nickname});
  };

  return (
    <Container>
      <Title>Mapple Chat</Title>
      <SecondaryTitle>Sign in</SecondaryTitle>

      <NicknameInput value={nickname} onChangeText={setNickname} placeholder="Nickname" placeholderTextColor={theme.colors.secondaryText} />

      <ConfirmButton onPress={onConfirmPress}>
        <ConfirmButtonText>Confirm</ConfirmButtonText>
      </ConfirmButton>
    </Container>
  );
};

export default Auth;
