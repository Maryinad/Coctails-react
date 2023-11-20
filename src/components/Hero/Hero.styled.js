import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  color: #fd5103;
  font-size: 52px;
  width: 668px;
  height: 160px;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  margin-bottom: 40px;
`;

export const DefaultListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Alphabet = styled(DefaultListWrapper)`
  width: 520px;
`;

export const DefaultElement = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
`;

export const Numbers = styled(DefaultListWrapper)`
  margin-left: 40px;
`;
