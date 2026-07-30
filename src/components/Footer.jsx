import styled from "styled-components"

const FooterWrapper = styled.footer`
  padding: 2rem;
  background: var(--color-dark);
  color: white;
  text-align: center;

  p {
    font-family: var(--font-body);
    font-size: 0.9rem;
  }
`

export default function Footer() {
  return (
    <FooterWrapper>
      <p>© 2026 Brittany Corde | Washington, D.C.</p>
    </FooterWrapper>
  )
}
