import styled from 'styled-components';

export const FeedbackBtnContainer = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 8px;
`;

export const FeedbackButton = styled.button`
  padding: 8px;
  width: 60px;
  text-transform: capitalize;
  background-color: #ffffff;
  border: 1px solid #999999;
  border-radius: 5px;
  cursor: pointer;
  :focus {
    background-color: #999999;
  }
`;
