import React from "react";
import Photo from './photo'
import propTypes from 'prop-types'
import { Link } from "react-router-dom";

function PhotoWall(props){
    return <div>
    <Link className="addIcon"  to = "/AddPhoto">+</Link>
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