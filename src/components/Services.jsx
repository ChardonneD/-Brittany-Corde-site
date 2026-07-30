import styled from "styled-components"
import { FaLightbulb, FaClipboardCheck, FaMicrophone, FaFileAlt } from "react-icons/fa"

const ServicesWrapper = styled.section`
  padding: 4rem 2rem;
  background: var(--color-light);

  h2 {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    color: var(--color-secondary);
    margin-bottom: 2rem;
  }
`

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`

const Card = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  text-align: center;

  svg {
    font-size: 2rem;
    color: var(--color-primary);
    margin-bottom: 1rem;
  }

  h3 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-family: var(--font-body);
    font-size: 1rem;
    color: var(--color-dark);
  }
`

export default function Services() {
  return (
    <ServicesWrapper>
      <h2>Services</h2>

      <Grid className="services-grid">
        <Card>
          <FaLightbulb />
          <h3>Strategic Consulting</h3>
          <p>Tailored strategies for impact and organizational clarity.</p>
        </Card>

        <Card>
          <FaClipboardCheck />
          <h3>Program Design & Evaluation</h3>
          <p>Evidence-based frameworks for scalable workforce programs.</p>
        </Card>

        <Card>
          <FaMicrophone />
          <h3>Speaking & Facilitation</h3>
          <p>Warm, engaging sessions on workforce development and equity.</p>
        </Card>

        <Card>
          <FaFileAlt />
          <h3>Grant & Technical Writing</h3>
          <p>Compelling proposals and reports that communicate mission and outcomes.</p>
        </Card>
      </Grid>
    </ServicesWrapper>
  )
}
