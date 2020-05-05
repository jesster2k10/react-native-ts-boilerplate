import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  padding: ${({theme}) => theme.containerPadding}px;
  background-color: ${({theme}) => theme.background};
`;

export default Container;
