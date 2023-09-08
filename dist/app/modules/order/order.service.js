"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createOrder = (customerId, data) => __awaiter(void 0, void 0, void 0, function* () {
    const customerInfo = yield prisma_1.default.user.findFirst({
        where: {
            id: customerId
        }
    });
    if (!customerInfo) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Customer Not Found');
    }
    const result = yield prisma_1.default.order.create({
        data: Object.assign(Object.assign({}, data), { user: {
                connect: {
                    id: customerInfo === null || customerInfo === void 0 ? void 0 : customerInfo.id
                }
            } })
    });
    return result;
});
const getAllOrdersByCustomer = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    const customerInfo = yield prisma_1.default.user.findFirst({
        where: {
            id: customerId
        }
    });
    if (customerInfo) {
        // throw new ApiError(httpStatus.BAD_REQUEST, 'Customer Not Found');
        const result = yield prisma_1.default.order.findMany({
            where: {
                user: {
                    id: customerInfo === null || customerInfo === void 0 ? void 0 : customerInfo.id
                }
            }
        });
        return result;
    }
    const result = yield prisma_1.default.order.findMany({});
    return result;
});
const getOrderById = (customerId, id) => __awaiter(void 0, void 0, void 0, function* () {
    const customerInfo = yield prisma_1.default.user.findFirst({
        where: {
            id: customerId
        }
    });
    if (customerInfo) {
        // throw new ApiError(httpStatus.BAD_REQUEST, 'Customer Not Found');
        const result = yield prisma_1.default.order.findUnique({
            where: {
                id,
                user: {
                    id: customerInfo === null || customerInfo === void 0 ? void 0 : customerInfo.id
                }
            }
        });
        return result;
    }
    const result = yield prisma_1.default.order.findUnique({
        where: {
            id
        }
    });
    return result;
});
exports.OrderService = {
    createOrder,
    getAllOrdersByCustomer,
    getOrderById
};
