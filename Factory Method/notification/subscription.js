const { notificationFactory } = require('./notification');
const Constant = require('./Constant');

const notificationTypesBySubscription = {
    [Constant.NO_SUBSCRIPTION]: [1, 2, 3, 4], // 4 Added for Additional Requirement
    [Constant.TIER_1]: [1],
    [Constant.TIER_2]: [2],
    [Constant.TIER_3]: [1, 2],
    [Constant.TIER_4]: [2, 3, 4] // 4 Added for Additional Requirement
}

const subscriptionService = (name, subscriptionType) => {
    notificationTypesBySubscription[subscriptionType].forEach(notificationType => notificationFactory(notificationType)().send(name));
}

module.exports = { subscriptionService };