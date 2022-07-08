import styled from "styled-components";

export const NoConnectorSeed = styled.div`
  padding: 1em 1.5em;
  min-width: 225px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  @media (max-width: ${(props) => `${props.mobileBreakpoint}px`}) {
    width: 100%;
  }
`;
