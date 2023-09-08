"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_routes_1 = require("../modules/auth/auth.routes");
const books_routes_1 = require("../modules/books/books.routes");
const category_routes_1 = require("../modules/category/category.routes");
const order_routes_1 = require("../modules/order/order.routes");
const profile_routes_1 = require("../modules/profile/profile.routes");
const user_routes_1 = require("../modules/user/user.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    // ... routes
    {
        path: '/auth',
        routes: auth_routes_1.AuthRoutes
    },
    {
        path: '/users',
        routes: user_routes_1.UserRoutes
    },
    {
        path: '/categories',
        routes: category_routes_1.CategoryRoutes
    },
    {
        path: '/books',
        routes: books_routes_1.BookRoutes
    },
    {
        path: '/orders',
        routes: order_routes_1.OrderRoutes
    },
    {
        path: '/profile',
        routes: profile_routes_1.ProfileRoutes
    }
];
moduleRoutes.forEach(route => router.use(route.path, route.routes));
exports.default = router;
