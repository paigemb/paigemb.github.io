import React from 'react'
import { Section, ServiceBox } from '../components'
import { Row, Col } from 'react-bootstrap'
import ServiceConfig from '../data/interests.json'
import Pulse from 'react-reveal/Pulse'

const interests = ServiceConfig.interests

export class Interests extends React.Component {
  render() {
    return(
      <Section id="services" title="Interests">
        <Row>
          { interests.map(s => (
            <Col md={4} key={s.title}>
              <Pulse delay={s.delay}>
                <ServiceBox title={s.title} image={s.photo} backgroundColor={s.backgroundColor}>
                  <div className="mb-0" dangerouslySetInnerHTML={ { __html: s.content } } />
                </ServiceBox>
              </Pulse>
            </Col>
          ))}
        </Row>
      </Section>
    )
  }
}

export default Interests;
