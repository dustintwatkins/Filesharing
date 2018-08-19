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
import "./Header.css";
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.render = function () {
        return (React.createElement("section", null,
            React.createElement("div", null,
                React.createElement("div", { className: "header" },
                    React.createElement("a", { href: "#default", className: "logo" }, "SpaceX"),
                    React.createElement("div", { className: "header-right" },
                        React.createElement("a", { href: "#home", className: "about" }, "ABOUT SPACEX"),
                        React.createElement("a", { href: "#contact" }, "CAREERS"),
                        React.createElement("a", { href: "#about" }, "GALLERY"),
                        React.createElement("a", { className: "active", href: "#shop" }, "SHOP"))))));
    };
    return Header;
}(React.Component));
export default Header;
//# sourceMappingURL=header.js.map