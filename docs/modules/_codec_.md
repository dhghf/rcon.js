[rcon.js](../README.md) › [Globals](../globals.md) › ["codec"](_codec_.md)

# External module: "codec"

## Index

### Enumerations

* [PacketType](../enums/_codec_.packettype.md)

### Type aliases

* [RCONPacket](_codec_.md#rconpacket)

### Functions

* [decode](_codec_.md#decode)
* [encode](_codec_.md#encode)

## Type aliases

###  RCONPacket

Ƭ **RCONPacket**: *object*

*Defined in [codec.ts:5](https://github.com/dylhack/rcon.js/blob/bf1ab7f/src/codec.ts#L5)*

Credit to Speedhaxx for the Node.JS version of
these functions

#### Type declaration:

* **body**: *string*

* **id**: *number*

* **size**: *number*

* **type**: *[PacketType](../enums/_codec_.packettype.md)*

## Functions

###  decode

▸ **decode**(`data`: Buffer): *[RCONPacket](_codec_.md#rconpacket)*

*Defined in [codec.ts:32](https://github.com/dylhack/rcon.js/blob/bf1ab7f/src/codec.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | Buffer |

**Returns:** *[RCONPacket](_codec_.md#rconpacket)*

___

###  encode

▸ **encode**(`type`: [PacketType](../enums/_codec_.packettype.md), `id`: number, `body`: string): *Buffer*

*Defined in [codec.ts:19](https://github.com/dylhack/rcon.js/blob/bf1ab7f/src/codec.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | [PacketType](../enums/_codec_.packettype.md) |
`id` | number |
`body` | string |

**Returns:** *Buffer*