const { subscriptionService } = require('./subscription');
const Constant = require('./Constant');

const customers = [
    { name: "Alex", subscription: Constant.TIER_3 },
    { name: "Ben", subscription: Constant.TIER_1 },
    { name: "Cameron", subscription: Constant.TIER_2 },
    { name: "David", subscription: Constant.TIER_4 },
    { name: "Eoin", subscription: Constant.NO_SUBSCRIPTION },
    { name: "Faf", subscription: Constant.TIER_1 },
    { name: "Glen", subscription: Constant.TIER_2 },
    { name: "Harry", subscription: Constant.TIER_3 },
    { name: "Ian", subscription: Constant.TIER_4 },
    { name: "Jack", subscription: Constant.NO_SUBSCRIPTION }
]

const main = () => {
    customers.forEach(({ name, subscription }) => subscriptionService(name, subscription));
}

main();