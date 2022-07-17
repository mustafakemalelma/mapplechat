import styled from "../../config/theme/styled-components";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({theme}) => theme.colors.background};
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.mainText};

  margin-bottom: 6px;
`;

export const SecondaryTitle = styled.Text`
  font-size: 18px;
  color: ${({theme}) => theme.colors.secondaryText};

  margin-bottom: 24px;
`;

export const NicknameInput = styled.TextInput`
  width: 75%;
  padding: 12px;
  border-radius: 4px;

  background-color: ${({theme}) => theme.colors.foreground};
  color: ${({theme}) => theme.colors.mainText};
`;

export const ConfirmButton = styled.Pressable`
  align-items: center;
  width: 50%;
  padding: 12px;
  margin-top: 12px;
  border-radius: 4px;

  background-color: ${({theme}) => theme.colors.main};
`;

export const ConfirmButtonText = styled.Text`
  font-weight: 600;
  color: ${({theme}) => theme.colors.inverseText};
`;
