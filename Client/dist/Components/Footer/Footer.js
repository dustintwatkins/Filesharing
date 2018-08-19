var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import './Footer.css';
var Footer = /** @class */ (function (_super) {
    __extends(Footer, _super);
    function Footer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Footer.prototype.render = function () {
        return (React.createElement("section", null,
            React.createElement("div", { className: 'social-media' },
                React.createElement("div", null,
                    React.createElement("a", { href: "https://github.com/dustintwatkins", className: "fa fa-github" })),
                React.createElement("div", null,
                    React.createElement("a", { href: "https://www.linkedin.com/in/dustin-watkins-298648105/", className: "fa fa-linkedin" })),
                React.createElement("div", null,
                    React.createElement("a", { href: "https://www.facebook.com/dustin.watkins.7549", className: "fa fa-facebook" })),
                React.createElement("div", null,
                    React.createElement("a", { href: "https://twitter.com/TurkTheGorilla", className: "fa fa-twitter" })))));
    };
    return Footer;
}(React.Component));
export default Footer;
//# sourceMappingURL=Footer.js.map