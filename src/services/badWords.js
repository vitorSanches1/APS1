const validateMessageChat = (message, badWords) => {
    var words = message.split(' ');
    var returnWords = [];
    words.forEach(word => {
        if (badWords.includes(word.toLowerCase())) {
            word = '[BOBBA]';
        }
        returnWords.push(word);
    });
    return returnWords.join(' ');
};

export default validateMessageChat;