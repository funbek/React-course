import React, {Component} from 'react'
import CommentList from './CommentList'

export default class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }
    render() {
        const {article} = this.props
        const {isOpen} = this.state

        return(
            <div>
                <h1>{article.title}</h1>
                <div>
                    <time>{article.date}</time>
                </div>
                <div>
                    <button onClick={this.toggleOpen}>
                        { isOpen ? 'Close' : 'Open'  }
                    </button>
                </div>
                <div>{this.getBody()}</div>
            </div>
        )
    }
    getBody() {
        if (!this.state.isOpen) return null

        const {article} = this.props
        return (
            <div>
                <section>{article.text}</section>
                <CommentList comments = {article.comments} />
            </div>
        )
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
