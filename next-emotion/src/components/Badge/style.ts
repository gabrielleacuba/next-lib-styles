import styled from "@emotion/styled";

const BadgeStyle = styled.div`
  display: inline-block;
  padding: var(--gl-spacing-01);
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: var(--gl-border-radius-xs);

  background-color: ${(props) => props.theme.colors.secondary};
  font-size: 16px;
  margin-bottom: var(--gl-spacing-06);
  font-weight: 700;
`;

export { BadgeStyle };
