import React, {Component} from 'react'

export default class Comment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    render() {
        const {comment} = this.props
        const {isOpen} = this.state

        console.log({comment})

        return(
            <div>
                <div>
                    <button onClick = {this.toggleOpen}>Open Comments</button>
                </div>
                <div>
                    {this.getBody()}
                </div>
            </div>
        )
    }

    getBody() {
        const {comment} = this.props


        return
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
