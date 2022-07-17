import React, {useState} from "react";

import {AuthScreenProps} from "../routeTypes";
import {ConfirmButton, ConfirmButtonText, Container, SecondaryTitle, NicknameInput, Title} from "./styles";

const Auth = ({navigation}: AuthScreenProps) => {
  const [nickname, setNickname] = useState("");

  const onConfirmPress = () => {
    navigation.push("Chat", {nickname});
  };

  return (
    <Container>
      <Title>Mapple Chat</Title>
      <SecondaryTitle>Sign in</SecondaryTitle>

      <NicknameInput value={nickname} onChangeText={setNickname} placeholder="Nickname" />

      <ConfirmButton onPress={onConfirmPress}>
        <ConfirmButtonText>Confirm</ConfirmButtonText>
      </ConfirmButton>
    </Container>
  );
};

export default Auth;
