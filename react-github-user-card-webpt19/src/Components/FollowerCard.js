import React from 'react';

const FollowerCard = (props) => {
    return(
        <div>
            <img src={props.follower.avatar_url}/>
            <h2>Follower's Github Username: {props.follower.login}</h2>
            <h5>Follower's Github URL: {props.follower.html_url}</h5>
        </div>
    )
}

export default FollowerCard;