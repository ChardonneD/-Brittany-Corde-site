import styled from "styled-components"
import { FaHeart, FaChartLine, FaHandshake, FaComments } from "react-icons/fa"

const Section = styled.section`
  padding: 4rem 2rem;
  background: white;

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

const Item = styled.div`
  text-align: center;

  svg {
    font-size: 2rem;
    color: var(--color-primary);
    margin-bottom: 1rem;
  }

  h3 {
    font-family: var(--font-heading);
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-family: var(--font-body);
    font-size: 1rem;
    color: var(--color-dark);
  }
`

export default function WhyChoose() {
  return (
    <Section>
      <h2>Why Choose Brittany</h2>

      <Grid>
        <Item>
          <FaHeart />
          <h3>People-Focused</h3>
          <p>Warm, human-centered partnership.</p>
        </Item>

        <Item>
          <FaChartLine />
          <h3>Evidence-Driven</h3>
          <p>Grounded in research and real-world outcomes.</p>
        </Item>

        <Item>
          <FaHandshake />
          <h3>Collaborative Partner</h3>
          <p>Clear communication and shared vision.</p>
        </Item>

        <Item>
          <FaComments />
          <h3>Clear Communicator</h3>
          <p>Complex ideas made accessible and actionable.</p>
        </Item>
      </Grid>
    </Section>
  )
}
