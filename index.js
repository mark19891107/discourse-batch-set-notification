const SETTINGS = require("./settings.json")
const NOTIFICATION_LEVEL = 3;
const member = require("./members.json");
const categories = require("./categories.json");

const rp = require('request-promise');

member.forEach(member => {
    categories.forEach(category => {
        setNotificationLevel(member, category);
    })
});


function setNotificationLevel(member, category) {
    var options = {
        method: 'POST',
        uri: SETTINGS.host + 'category/' + category + '/notifications',
        qs: {
            api_key: SETTINGS.api_key,
            api_username: member
        },
        formData: {
            notification_level: NOTIFICATION_LEVEL
        }
    };

    rp(options)
        .then(function (body) {
            console.log(body)
        })
}



