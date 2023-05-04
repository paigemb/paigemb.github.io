import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Section, Timeline } from '../components'
import history from '../data/history.json'

const projects = history.projects

export class Projects extends React.Component {
  render() {

    return(
      <Section id="projects" title="Projects">
        <Row>
          <Col md={12}>
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">

              { projects.map(e => (
                <Timeline key={e.name} time={e.period} title={e.name} icon={['fas', 'graduation-cap']}>
                  <em>Tech: {e.tech}</em>
                  <div dangerouslySetInnerHTML={ { __html: e.description } } />
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

export default Projects