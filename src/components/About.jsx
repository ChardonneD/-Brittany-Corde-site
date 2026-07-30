import styled from "styled-components"
import heroImg from "../assets/brittany-headshot.png"

const HeroWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 2rem;
  background: var(--color-light);
  gap: 3rem;
`

const HeroText = styled.div`
  max-width: 600px;

  h1 {
    font-family: var(--font-heading);
    font-size: 3rem;
    color: var(--color-secondary);
    margin-bottom: 1rem;
  }

  p {
    font-family: var(--font-body);
    font-size: 1.25rem;
    color: var(--color-dark);
    margin-bottom: 2rem;
  }
`

const CTAGroup = styled.div`
  display: flex;
  gap: 1rem;

  button {
    padding: 0.75rem 1.5rem;
    border-radius: 6px;
    font-family: var(--font-accent);
    font-weight: 600;
    cursor: pointer;
    border: none;
  }

  .primary {
    background: var(--color-primary);
    color: white;
  }

  .secondary {
    background: transparent;
    border: 2px solid var(--color-primary);
    color: var(--color-primary);
  }
`

const HeroImage = styled.img`
  width: 350px;
  border-radius: 12px;
  object-fit: cover;
`

export default function Hero() {
  return (
    <HeroWrapper className="hero">
      <HeroText>
        <h1>Brittany Corde, Ed.D.</h1>
        <p>
          Workforce Development Strategist • Philanthropic Leader • Rural Mobility Advocate
        </p>
        <CTAGroup className="cta-buttons">
          <button className="primary">Work With Brittany</button>
          <button className="secondary">Schedule Consultation</button>
        </CTAGroup>
      </HeroText>

      <HeroImage src={heroImg} alt="Brittany Corde headshot" />
    </HeroWrapper>
  )
}
