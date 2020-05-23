import styled from 'styled-components/native';

const Title = styled.Text`
  ${({theme}) => theme.fonts.title}
  color: ${({theme}) => theme.headings};
`;

export default Title;
