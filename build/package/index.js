"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Modal_1 = require("./Modal");
var RouteModal_1 = require("./RouteModal");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var Modal_2 = require("./Modal");
exports.Modal = Modal_2.Modal;
exports.ModalContent = Modal_2.ModalContent;
exports.ModalFooter = Modal_2.ModalFooter;
exports.ModalHeader = Modal_2.ModalHeader;
var RouteModal_2 = require("./RouteModal");
exports.RouteModal = RouteModal_2.RouteModal;
var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
    ModalModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [
                Modal_1.Modal,
                RouteModal_1.RouteModal,
                Modal_1.ModalHeader,
                Modal_1.ModalContent,
                Modal_1.ModalFooter,
            ],
            exports: [
                Modal_1.Modal,
                RouteModal_1.RouteModal,
                Modal_1.ModalHeader,
                Modal_1.ModalContent,
                Modal_1.ModalFooter,
            ],
        })
    ], ModalModule);
    return ModalModule;
}());
exports.ModalModule = ModalModule;
//# sourceMappingURL=index.js.map