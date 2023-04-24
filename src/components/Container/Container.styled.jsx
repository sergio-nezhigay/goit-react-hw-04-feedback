import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: ${props => props.theme.spacing(10)};

  height: 100vh;
  display: flex;
  flex-direction: column;
  color: #010101;
`;
