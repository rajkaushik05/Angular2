"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var myHeaderSection = (function () {
    function myHeaderSection() {
    }
    myHeaderSection = __decorate([
        core_1.Component({
            selector: 'header-section',
            template: "\n\t\t<h2>Header section.</h2>\n\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae tempore alias ab officia officiis itaque harum placeat ipsum animi velit vero, repellendus nihil magni ipsa! Ipsam, ut eaque odit assumenda.</p>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], myHeaderSection);
    return myHeaderSection;
}());
exports.myHeaderSection = myHeaderSection;
//# sourceMappingURL=header.component.js.map