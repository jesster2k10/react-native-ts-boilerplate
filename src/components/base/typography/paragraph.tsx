import styled from 'styled-components/native';

const Paragraph = styled.Text`
  ${({theme}) => theme.fonts.paragraph}
  color: ${({theme}) => theme.text};
`;

export default Paragraph;
