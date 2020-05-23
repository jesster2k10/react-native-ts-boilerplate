import styled from 'styled-components/native';

const Body = styled.Text`
  ${({theme}) => theme.fonts.body};
  color: ${({theme}) => theme.text};
`;

export default Body;
