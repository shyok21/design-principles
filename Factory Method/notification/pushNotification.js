class PushNotification {
    constructor () {
        this.type = "Push Notification";
    }

    send (name) {
        console.log(`Push Notification Sent to ${name}`);
    }
}

module.exports = PushNotification;