import React from "react";
import Photo from './photo'
import propTypes from 'prop-types'

function PhotoWall(props){
    return <div>
        <a  className="addIcon" onClick={props.onNavigate} href = "#AddPhoto">+</a>
    <div className="photoGrid">
    {props.posts.map((post, index) => <Photo key = {index} post = {post} onRemovePhoto = {props.onRemovePhoto} />)}
</div>
</div>
}

PhotoWall.propTypes = {
    posts: propTypes.array.isRequired ,
    onRemovePhoto: propTypes.func.isRequired
}

export default PhotoWall