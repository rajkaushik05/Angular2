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
var myFooterSection = (function () {
    function myFooterSection() {
        this.name = 'Raj Kaushik ';
    }
    myFooterSection = __decorate([
        core_1.Component({
            selector: 'footer-section',
            template: "\n\t\t<h2 class=\"red\">Footer section </h2>\n\t\t<p>Lorem ipsum dolor sit amet, {{name}}consectetur adipisicing elit. Fugit consectetur assumenda illum laborum, dolorum sapiente, tenetur dolorem alias vel esse temporibus minus aliquam quidem et modi eos. Fuga quo, quod!</p>\n\t\t"
        }), 
        __metadata('design:paramtypes', [])
    ], myFooterSection);
    return myFooterSection;
}());
exports.myFooterSection = myFooterSection;
//# sourceMappingURL=footer.component.js.map