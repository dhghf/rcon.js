"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", {value: true});
var net = __importStar(require("net"));
var codec_1 = require("./codec");
var RCONClient = /** @class */ (function () {
    function RCONClient(details) {
        this.client = net.createConnection(details);
    }

    RCONClient.prototype.login = function (password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var encoded = codec_1.encode(codec_1.PacketType.SERVERDATA_AUTH, 22, password);
            _this.client.once('data', function (chunk) {
                var decoded = codec_1.decode(chunk);
                if (decoded.id === -1)
                    reject(decoded);
                else
                    resolve(decoded);
            });
            _this.client.write(encoded);
        });
    };
    RCONClient.prototype.command = function (cmd) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var encoded = codec_1.encode(codec_1.PacketType.SERVERDATA_EXECCOMMAND, 53, cmd);
            _this.client.once('data', function (chunk) {
                var decoded = codec_1.decode(chunk);
                if (decoded.type != codec_1.PacketType.SERVERDATA_RESPONSE_VALUE)
                    reject(decoded);
                else
                    resolve(decoded);
            });
            _this.client.write(encoded);
        });
    };
    RCONClient.prototype.destroy = function () {
        this.client.destroy();
    };
    return RCONClient;
}());
exports.RCONClient = RCONClient;