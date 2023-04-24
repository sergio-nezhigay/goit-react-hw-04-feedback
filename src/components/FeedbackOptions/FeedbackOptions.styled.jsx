import styled from '@emotion/styled';

export const Row = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 70px;
`;

export const Button = styled.button`
  background-color: #f2f2f2;
  color: #333;
  border: 1px solid #ccc;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-transform: capitalize;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #ddd;
  }
  &:active {
    background-color: #7895f2;
  }
`;
