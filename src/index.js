"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
app.listen(3001, function () {
    console.log('🚀 server is running on http://localhost:3001');
});
