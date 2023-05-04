import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Section, Timeline } from '../components'
import history from '../data/history.json'

const career = history.career
//C:\Users\16363\Documents\GitHub\react-resume-template\public\images\service-1.svg

export class Experience extends React.Component {
  render() {

    return(
      <Section id="experience" title="Experience">
        <Row>
          <Col md={12}>
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">

              { career.map(c => (
                <Timeline key={c.company} time={c.period} title={c.title} icon={['fas', 'briefcase']} left="-7px">
                  <p><strong>{c.company}</strong></p>
                  <div className="des"><div dangerouslySetInnerHTML={ { __html: c.description } } /> </div>
                </Timeline>
              ))}

              <span className="line" />
            </div>
          </Col>
        </Row>
      </Section>
    )
  }
}

export default Experience
