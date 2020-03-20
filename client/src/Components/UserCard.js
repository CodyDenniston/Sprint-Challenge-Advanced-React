import React from 'react';

import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';

const UserCard = (props) => {
    return (
        <>
          {props.user.map(user => (
            <div key={user.id} className="user">
              <Card>
                <CardBody>
                <CardTitle>{user.name}</CardTitle>
                <CardSubtitle>{user.country}</CardSubtitle>
                <CardText>{user.searches}</CardText>
                </CardBody>
              </Card>
            </div>
          ))}
        </>
      );
};

export default UserCard;