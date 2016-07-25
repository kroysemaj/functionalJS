function getShortMessages(messages) {
  return messages.filter( (payload) => payload.message.length < 50 )
                 .map( (payload) => payload.message );
}

module.exports = getShortMessages
