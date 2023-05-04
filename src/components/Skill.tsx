import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'

interface Props {
  title: string
  backgroundColor?: string
}

interface State {
  completed: number
  loaded: boolean
}

export class Skill extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props)

    this.state = {
      completed: 0,
      loaded: false
    }
  }

  onChange = (isVisible: boolean) => {
    if (isVisible && !this.state.loaded) {
      this.setState({
        loaded: true
      })
    }
  }

  render() {
    const props = this.props

    return(
      <div className="skill-item mb-4">
        <VisibilitySensor onChange={this.onChange}>
          <div className="skill-info clearfix">
            <h4 className="float-start mb-3 mt-0">{props.title}</h4>
           
          </div>
        </VisibilitySensor>
      </div>
    )
  }
}

export default Skill
