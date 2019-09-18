"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var PacketType;
(function (PacketType) {
    PacketType[PacketType["SERVERDATA_RESPONSE_VALUE"] = 0] = "SERVERDATA_RESPONSE_VALUE";
    PacketType[PacketType["SERVERDATA_EXECCOMMAND"] = 2] = "SERVERDATA_EXECCOMMAND";
    PacketType[PacketType["SERVERDATA_AUTH_RESPONSE"] = 2] = "SERVERDATA_AUTH_RESPONSE";
    PacketType[PacketType["SERVERDATA_AUTH"] = 3] = "SERVERDATA_AUTH";
})(PacketType = exports.PacketType || (exports.PacketType = {}));

function encode(type, id, body) {
    var size = Buffer.byteLength(body) + 14, packet = Buffer.alloc(size);
    packet.writeInt32LE(size - 4, 0);
    packet.writeInt32LE(id, 4);
    packet.writeInt32LE(type, 8);
    packet.write(body, 12, size - 2, "ascii");
    packet.writeInt16LE(0, size - 2);
    return packet;
}

exports.encode = encode;

function decode(data) {
    return {
        size: data.readInt32LE(0),
        id: data.readInt32LE(4),
        type: data.readInt32LE(8),
        body: data.toString("ascii", 12, data.length - 2)
    };
}

exports.decode = decode;