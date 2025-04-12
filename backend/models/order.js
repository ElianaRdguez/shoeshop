const orders = [];

function addOrder(order) {
    orders.push(order);
    return order;
}

module.exports = { orders, addOrder };