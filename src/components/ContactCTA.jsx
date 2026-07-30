import styled from "styled-components"

const CTAWrapper = styled.section`
  padding: 4rem 2rem;
  background: var(--color-secondary);
  text-align: center;
  color: white;

  h2 {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-family: var(--font-body);
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  button {
    background: var(--color-primary);
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 6px;
    border: none;
    font-family: var(--font-accent);
    font-weight: 600;
    cursor: pointer;
  }
`

export default function ContactCTA() {
  return (
    <CTAWrapper>
      <h2>Let’s Build Something Meaningful</h2>
      <p>Ready to make a difference? Let’s connect.</p>
      <button>Start a Conversation</button>
    </CTAWrapper>
  )
}
