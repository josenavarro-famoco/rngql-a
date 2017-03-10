import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

const Profile = ({ currentUser: { username, email } }) => {
  return (
    <div>Hello {username}</div>
  )
}

Profile.fragments = {
  currentUser: gql`
    fragment CurrentUser on User {
      username
      email
    }
  `,
};

export default Profile;
