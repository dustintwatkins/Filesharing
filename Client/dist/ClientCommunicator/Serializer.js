var Serializer = /** @class */ (function () {
    function Serializer() {
    }
    Serializer.serialize = function (obj) {
        return JSON.stringify(obj);
    };
    Serializer.deserialize = function (str) {
        return JSON.parse(str);
    };
    return Serializer;
}());
export default Serializer;
//# sourceMappingURL=Serializer.js.map