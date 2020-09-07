import React from 'react';

const UserCard = (props) => {
    console.log(props)
    return(
        <div>
            <img src={props.data.avatar_url}/>
            <h2>Github username: {props.data.login}</h2>
            <h5>Api URL: {props.data.url}</h5>
            <h5>Github: URL: {props.data.html_url}</h5>

        </div>
    )
}

export default UserCard;