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
import './Project.css';
var Project = /** @class */ (function (_super) {
    __extends(Project, _super);
    function Project() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Project.prototype.render = function () {
        return (React.createElement("section", { className: 'container' },
            React.createElement("div", { className: 'projects-container' },
                React.createElement("div", { className: "row" },
                    React.createElement("a", null,
                        React.createElement("div", { className: "col-sm-4", id: 'project' },
                            React.createElement("h4", null, "Ticket To Ride"),
                            React.createElement("p", null, "Multi player network game implementation of the board game Ticket to Ride"),
                            React.createElement("h6", null, "View Project"))),
                    React.createElement("div", { className: "col-sm-4", id: 'project' },
                        React.createElement("h4", null)),
                    React.createElement("div", { className: "col-sm-4", id: 'project' }, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.")),
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-sm-4", id: 'project' }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
                    React.createElement("div", { className: "col-sm-4", id: 'project' }, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto."),
                    React.createElement("div", { className: "col-sm-4", id: 'project' }, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.")))));
    };
    return Project;
}(React.Component));
export default Project;
//# sourceMappingURL=Project.js.map