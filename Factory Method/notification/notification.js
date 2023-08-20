const EmailNotification = require('./emailNotification');
const SMSNotification = require('./smsNotification');
const PushNotification = require('./pushNotification');

const FaceBookNotification = require('./facebookNotification');  // Additional Requirement

const notificationByType = {
    1: new EmailNotification(),
    2: new SMSNotification(),
    3: new PushNotification(),

    4: new FaceBookNotification() // Additional Requirement
}

const notificationFactory = (type) => {
    const create = () => {
        return notificationByType[type]
    }

    return create;
}

module.exports = {
    notificationFactory
}