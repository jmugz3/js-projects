'use strict';

module.exports = function checkUsersValid (goodUsers){
    return function allUsersValid(submittedUsers){ 
        return submittedUsers.every( user => goodUsers.some(valid => user.id === valid.id));
    }
}