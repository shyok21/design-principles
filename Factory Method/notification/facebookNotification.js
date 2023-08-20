//Additional Requirement

class FaceBookNotification {
    constructor () {
        this.type = "FaceBook Notification"
    }

    send (name) {
        console.log(`FaceBook Notification Sent to ${name}`);
    }
}

module.exports = FaceBookNotification;