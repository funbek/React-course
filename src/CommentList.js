import React from 'react'
import Comment from './Comment'

export default function CommentList({comments}) {
    const commentListElement = comments.map( (comment) => <li key = {comment.id} ><Comment comment = {comment} /></li> )

    return(
        <ul>
            {commentListElement}
        </ul>
    )
}
