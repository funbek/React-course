import React, {Component} from 'react'

export default class Comment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    render() {
        const {comments} = this.props
        const {isOpen} = this.state

        console.log('===', {comments} );

        return(
            <div>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        // if ( !{comments} ) return null

        const {comments} = this.props

        return {comments}
    }
}
