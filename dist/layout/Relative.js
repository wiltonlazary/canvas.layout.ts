System.register(["./AbstractLayout", "./Size"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __moduleName = context_1 && context_1.id;
    var AbstractLayout_1, Size_1, Relative;
    return {
        setters: [
            function (AbstractLayout_1_1) {
                AbstractLayout_1 = AbstractLayout_1_1;
            },
            function (Size_1_1) {
                Size_1 = Size_1_1;
            }
        ],
        execute: function () {
            Relative = (function (_super) {
                __extends(Relative, _super);
                function Relative() {
                    return _super.apply(this, arguments) || this;
                }
                Relative.prototype.preferred = function (container) {
                    return new Size_1.Size({
                        height: 100,
                        width: 100
                    });
                };
                Relative.prototype.minimum = function (container) {
                    return new Size_1.Size({
                        height: 100,
                        width: 100
                    });
                };
                Relative.prototype.maximum = function (container) {
                    return new Size_1.Size({
                        height: 100,
                        width: 100
                    });
                };
                Relative.prototype.layout = function (container) { };
                return Relative;
            }(AbstractLayout_1.AbstractLayout));
            exports_1("Relative", Relative);
        }
    };
});
