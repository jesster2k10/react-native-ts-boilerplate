import styled from 'styled-components/native';

const Heading = styled.Text`
  ${({theme}) => theme.fonts.heading}
  color: ${({theme}) => theme.headings};
`;

export default Heading;
