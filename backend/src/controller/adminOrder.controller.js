const orderService = require("../services/order.service.js");

const getAllOrders = async(req,res) => {
    const orderId = req.params.orderId;
    try {
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}

const confirmedOrders = async(req,res) => {
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.confirmedOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}

const shippOrders = async(req,res) => {
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.shipOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}

const deliverOrders = async(req,res) => {
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.deleteOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
} 


const cancelledOrders = async(req,res) => {
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.cancelledOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}

const deleteOrders = async(req,res) => {
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.deleteOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}

module.exports ={
    getAllOrders,
    confirmedOrders,
    shippOrders,
    deliverOrders,
    cancelledOrders,
    deleteOrders
}