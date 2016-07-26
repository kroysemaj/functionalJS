function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function(submittedUser){
      return goodUsers.some(function(goodUser){
        return goodUser.id === submittedUser.id;
      });
    });
  };
}

module.exports = checkUsersValid

//is this user listed among good users?
//are all the submitted users good?