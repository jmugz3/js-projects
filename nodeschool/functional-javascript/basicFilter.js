'use strict';

module.exports = function getShortMessages(messages){
    return messages.map(function (messages) { 
            return messages.message; 
        })
        .filter( function (message) { 
            return (message.length < 50) ? message : "";
        })

}
