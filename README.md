This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Proximity Code Challenge

#### Design decisions

Using redux-thunk to dispatch actions as functions

#### Assumptions

The user info to post the comment is located in the state, so there's no need to add those fields in the form.

The posts query will be sent with `?_limit=4` to not display that much information at once. Pagination not included since it was not required.

"Reload comments from server" button will refresh the comments for the specific post, this will result in deleting the local added comments.

### Andrés Mata