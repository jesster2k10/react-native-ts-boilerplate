import styled from 'styled-components/native';

const Small = styled.Text`
  ${({theme}) => theme.fonts.small}
  color: ${({theme}) => theme.text};
`;

export default Small;
