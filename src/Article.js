import React, {Component} from 'react'
import Comment from './Comment'

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
            <section>
                {article.text}
                <Comment comments = {article.comments} />
            </section>
        )
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
