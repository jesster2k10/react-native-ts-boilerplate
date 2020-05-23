import styled from 'styled-components/native';

const Text = styled.Text`
  ${({theme}) => theme.fonts.body};
  color: ${({theme}) => theme.text};
`;

export default Text;
