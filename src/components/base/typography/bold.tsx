import styled from 'styled-components/native';

const Body = styled.Text`
  ${({theme}) => theme.fonts.bold}
  color: ${({theme}) => theme.text};
`;

export default Body;
