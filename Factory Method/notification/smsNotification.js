class SMSNotification {
    constructor () {
        this.type = "SMS Notification"
    }

    send (name) {
        console.log(`SMS Sent to ${name}`);
    }
}

module.exports = SMSNotification;