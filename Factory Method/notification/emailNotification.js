class EmailNotification {
    constructor () {
        this.type = "Email Notification"
    }

    send (name) {
        console.log(`Email Sent to ${name}`);
    }
}

module.exports = EmailNotification;