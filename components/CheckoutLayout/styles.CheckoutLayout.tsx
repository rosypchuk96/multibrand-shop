import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  background-color: ${({ theme }) => theme.dashboardGrayCard};
  min-height: 100vh;
`;
export const LeftColumn = styled.section`
  flex: 0.6;
  padding: 1.25rem 4rem;
`;
export const RightColumn = styled.section`
  flex: 0.4;
  padding: 1.25rem;
  background-color: ${({ theme }) => theme.dashboardGrayBg};
  border-left: 1px solid ${({ theme }) => theme.borderGrayColor};
`;