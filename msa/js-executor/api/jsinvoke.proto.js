/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.js = (function() {

    /**
     * Namespace js.
     * @exports js
     * @namespace
     */
    var js = {};

    /**
     * JsInvokeErrorCode enum.
     * @name js.JsInvokeErrorCode
     * @enum {string}
     * @property {number} COMPILATION_ERROR=0 COMPILATION_ERROR value
     * @property {number} RUNTIME_ERROR=1 RUNTIME_ERROR value
     * @property {number} TIMEOUT_ERROR=2 TIMEOUT_ERROR value
     */
    js.JsInvokeErrorCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "COMPILATION_ERROR"] = 0;
        values[valuesById[1] = "RUNTIME_ERROR"] = 1;
        values[valuesById[2] = "TIMEOUT_ERROR"] = 2;
        return values;
    })();

    js.RemoteJsRequest = (function() {

        /**
         * Properties of a RemoteJsRequest.
         * @memberof js
         * @interface IRemoteJsRequest
         * @property {string|null} [responseTopic] RemoteJsRequest responseTopic
         * @property {number|Long|null} [requestIdMSB] RemoteJsRequest requestIdMSB
         * @property {number|Long|null} [requestIdLSB] RemoteJsRequest requestIdLSB
         * @property {js.IJsCompileRequest|null} [compileRequest] RemoteJsRequest compileRequest
         * @property {js.IJsInvokeRequest|null} [invokeRequest] RemoteJsRequest invokeRequest
         * @property {js.IJsReleaseRequest|null} [releaseRequest] RemoteJsRequest releaseRequest
         */

        /**
         * Constructs a new RemoteJsRequest.
         * @memberof js
         * @classdesc Represents a RemoteJsRequest.
         * @implements IRemoteJsRequest
         * @constructor
         * @param {js.IRemoteJsRequest=} [properties] Properties to set
         */
        function RemoteJsRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RemoteJsRequest responseTopic.
         * @member {string} responseTopic
         * @memberof js.RemoteJsRequest
         * @instance
         */
        RemoteJsRequest.prototype.responseTopic = "";

        /**
         * RemoteJsRequest requestIdMSB.
         * @member {number|Long} requestIdMSB
         * @memberof js.RemoteJsRequest
         * @instance
         */
        RemoteJsRequest.prototype.requestIdMSB = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RemoteJsRequest requestIdLSB.
         * @member {number|Long} requestIdLSB
         * @memberof js.RemoteJsRequest
         * @instance
         */
        RemoteJsRequest.prototype.requestIdLSB = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RemoteJsRequest compileRequest.
         * @member {js.IJsCompileRequest|null|undefined} compileRequest
         * @memberof js.RemoteJsRequest
         * @instance
         */
        RemoteJsRequest.prototype.compileRequest = null;

        /**
         * RemoteJsRequest invokeRequest.
         * @member {js.IJsInvokeRequest|null|undefined} invokeRequest
         * @memberof js.RemoteJsRequest
         * @instance
         */
        RemoteJsRequest.prototype.invokeRequest = null;

        /**
         * RemoteJsRequest releaseRequest.
         * @member {js.IJsReleaseRequest|null|undefined} releaseRequest
         * @memberof js.RemoteJsRequest
         * @instance
         */
        RemoteJsRequest.prototype.releaseRequest = null;

        /**
         * Creates a new RemoteJsRequest instance using the specified properties.
         * @function create
         * @memberof js.RemoteJsRequest
         * @static
         * @param {js.IRemoteJsRequest=} [properties] Properties to set
         * @returns {js.RemoteJsRequest} RemoteJsRequest instance
         */
        RemoteJsRequest.create = function create(properties) {
            return new RemoteJsRequest(properties);
        };

        /**
         * Encodes the specified RemoteJsRequest message. Does not implicitly {@link js.RemoteJsRequest.verify|verify} messages.
         * @function encode
         * @memberof js.RemoteJsRequest
         * @static
         * @param {js.IRemoteJsRequest} message RemoteJsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RemoteJsRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.responseTopic != null && message.hasOwnProperty("responseTopic"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.responseTopic);
            if (message.requestIdMSB != null && message.hasOwnProperty("requestIdMSB"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.requestIdMSB);
            if (message.requestIdLSB != null && message.hasOwnProperty("requestIdLSB"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.requestIdLSB);
            if (message.compileRequest != null && message.hasOwnProperty("compileRequest"))
                $root.js.JsCompileRequest.encode(message.compileRequest, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.invokeRequest != null && message.hasOwnProperty("invokeRequest"))
                $root.js.JsInvokeRequest.encode(message.invokeRequest, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.releaseRequest != null && message.hasOwnProperty("releaseRequest"))
                $root.js.JsReleaseRequest.encode(message.releaseRequest, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RemoteJsRequest message, length delimited. Does not implicitly {@link js.RemoteJsRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof js.RemoteJsRequest
         * @static
         * @param {js.IRemoteJsRequest} message RemoteJsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RemoteJsRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RemoteJsRequest message from the specified reader or buffer.
         * @function decode
         * @memberof js.RemoteJsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {js.RemoteJsRequest} RemoteJsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RemoteJsRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.js.RemoteJsRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.responseTopic = reader.string();
                    break;
                case 2:
                    message.requestIdMSB = reader.int64();
                    break;
                case 3:
                    message.requestIdLSB = reader.int64();
                    break;
                case 4:
                    message.compileRequest = $root.js.JsCompileRequest.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.invokeRequest = $root.js.JsInvokeRequest.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.releaseRequest = $root.js.JsReleaseRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RemoteJsRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof js.RemoteJsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {js.RemoteJsRequest} RemoteJsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RemoteJsRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RemoteJsRequest message.
         * @function verify
         * @memberof js.RemoteJsRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RemoteJsRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.responseTopic != null && message.hasOwnProperty("responseTopic"))
                if (!$util.isString(message.responseTopic))
                    return "responseTopic: string expected";
            if (message.requestIdMSB != null && message.hasOwnProperty("requestIdMSB"))
                if (!$util.isInteger(message.requestIdMSB) && !(message.requestIdMSB && $util.isInteger(message.requestIdMSB.low) && $util.isInteger(message.requestIdMSB.high)))
                    return "requestIdMSB: integer|Long expected";
            if (message.requestIdLSB != null && message.hasOwnProperty("requestIdLSB"))
                if (!$util.isInteger(message.requestIdLSB) && !(message.requestIdLSB && $util.isInteger(message.requestIdLSB.low) && $util.isInteger(message.requestIdLSB.high)))
                    return "requestIdLSB: integer|Long expected";
            if (message.compileRequest != null && message.hasOwnProperty("compileRequest")) {
                var error = $root.js.JsCompileRequest.verify(message.compileRequest);
                if (error)
                    return "compileRequest." + error;
            }
            if (message.invokeRequest != null && message.hasOwnProperty("invokeRequest")) {
                var error = $root.js.JsInvokeRequest.verify(message.invokeRequest);
                if (error)
                    return "invokeRequest." + error;
            }
            if (message.releaseRequest != null && message.hasOwnProperty("releaseRequest")) {
                var error = $root.js.JsReleaseRequest.verify(message.releaseRequest);
                if (error)
                    return "releaseRequest." + error;
            }
            return null;
        };

        /**
         * Creates a RemoteJsRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof js.RemoteJsRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {js.RemoteJsRequest} RemoteJsRequest
         */
        RemoteJsRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.js.RemoteJsRequest)
                return object;
            var message = new $root.js.RemoteJsRequest();
            if (object.responseTopic != null)
                message.responseTopic = String(object.responseTopic);
            if (object.requestIdMSB != null)
                if ($util.Long)
                    (message.requestIdMSB = $util.Long.fromValue(object.requestIdMSB)).unsigned = false;
                else if (typeof object.requestIdMSB === "string")
                    message.requestIdMSB = parseInt(object.requestIdMSB, 10);
                else if (typeof object.requestIdMSB === "number")
                    message.requestIdMSB = object.requestIdMSB;
                else if (typeof object.requestIdMSB === "object")
                    message.requestIdMSB = new $util.LongBits(object.requestIdMSB.low >>> 0, object.requestIdMSB.high >>> 0).toNumber();
            if (object.requestIdLSB != null)
                if ($util.Long)
                    (message.requestIdLSB = $util.Long.fromValue(object.requestIdLSB)).unsigned = false;
                else if (typeof object.requestIdLSB === "string")
                    message.requestIdLSB = parseInt(object.requestIdLSB, 10);
                else if (typeof object.requestIdLSB === "number")
                    message.requestIdLSB = object.requestIdLSB;
                else if (typeof object.requestIdLSB === "object")
                    message.requestIdLSB = new $util.LongBits(object.requestIdLSB.low >>> 0, object.requestIdLSB.high >>> 0).toNumber();
            if (object.compileRequest != null) {
                if (typeof object.compileRequest !== "object")
                    throw TypeError(".js.RemoteJsRequest.compileRequest: object expected");
                message.compileRequest = $root.js.JsCompileRequest.fromObject(object.compileRequest);
            }
            if (object.invokeRequest != null) {
                if (typeof object.invokeRequest !== "object")
                    throw TypeError(".js.RemoteJsRequest.invokeRequest: object expected");
                message.invokeRequest = $root.js.JsInvokeRequest.fromObject(object.invokeRequest);
            }
            if (object.releaseRequest != null) {
                if (typeof object.releaseRequest !== "object")
                    throw TypeError(".js.RemoteJsRequest.releaseRequest: object expected");
                message.releaseRequest = $root.js.JsReleaseRequest.fromObject(object.releaseRequest);
            }
            return message;
        };

        /**
         * Creates a plain object from a RemoteJsRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof js.RemoteJsRequest
         * @static
         * @param {js.RemoteJsRequest} message RemoteJsRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RemoteJsRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.responseTopic = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.requestIdMSB = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.requestIdMSB = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.requestIdLSB = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.requestIdLSB = options.longs === String ? "0" : 0;
                object.compileRequest = null;
                object.invokeRequest = null;
                object.releaseRequest = null;
            }
            if (message.responseTopic != null && message.hasOwnProperty("responseTopic"))
                object.responseTopic = message.responseTopic;
            if (message.requestIdMSB != null && message.hasOwnProperty("requestIdMSB"))
                if (typeof message.requestIdMSB === "number")
                    object.requestIdMSB = options.longs === String ? String(message.requestIdMSB) : message.requestIdMSB;
                else
                    object.requestIdMSB = options.longs === String ? $util.Long.prototype.toString.call(message.requestIdMSB) : options.longs === Number ? new $util.LongBits(message.requestIdMSB.low >>> 0, message.requestIdMSB.high >>> 0).toNumber() : message.requestIdMSB;
            if (message.requestIdLSB != null && message.hasOwnProperty("requestIdLSB"))
                if (typeof message.requestIdLSB === "number")
                    object.requestIdLSB = options.longs === String ? String(message.requestIdLSB) : message.requestIdLSB;
                else
                    object.requestIdLSB = options.longs === String ? $util.Long.prototype.toString.call(message.requestIdLSB) : options.longs === Number ? new $util.LongBits(message.requestIdLSB.low >>> 0, message.requestIdLSB.high >>> 0).toNumber() : message.requestIdLSB;
            if (message.compileRequest != null && message.hasOwnProperty("compileRequest"))
                object.compileRequest = $root.js.JsCompileRequest.toObject(message.compileRequest, options);
            if (message.invokeRequest != null && message.hasOwnProperty("invokeRequest"))
                object.invokeRequest = $root.js.JsInvokeRequest.toObject(message.invokeRequest, options);
            if (message.releaseRequest != null && message.hasOwnProperty("releaseRequest"))
                object.releaseRequest = $root.js.JsReleaseRequest.toObject(message.releaseRequest, options);
            return object;
        };

        /**
         * Converts this RemoteJsRequest to JSON.
         * @function toJSON
         * @memberof js.RemoteJsRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RemoteJsRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RemoteJsRequest;
    })();

    js.RemoteJsResponse = (function() {

        /**
         * Properties of a RemoteJsResponse.
         * @memberof js
         * @interface IRemoteJsResponse
         * @property {number|Long|null} [requestIdMSB] RemoteJsResponse requestIdMSB
         * @property {number|Long|null} [requestIdLSB] RemoteJsResponse requestIdLSB
         * @property {js.IJsCompileResponse|null} [compileResponse] RemoteJsResponse compileResponse
         * @property {js.IJsInvokeResponse|null} [invokeResponse] RemoteJsResponse invokeResponse
         * @property {js.IJsReleaseResponse|null} [releaseResponse] RemoteJsResponse releaseResponse
         */

        /**
         * Constructs a new RemoteJsResponse.
         * @memberof js
         * @classdesc Represents a RemoteJsResponse.
         * @implements IRemoteJsResponse
         * @constructor
         * @param {js.IRemoteJsResponse=} [properties] Properties to set
         */
        function RemoteJsResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RemoteJsResponse requestIdMSB.
         * @member {number|Long} requestIdMSB
         * @memberof js.RemoteJsResponse
         * @instance
         */
        RemoteJsResponse.prototype.requestIdMSB = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RemoteJsResponse requestIdLSB.
         * @member {number|Long} requestIdLSB
         * @memberof js.RemoteJsResponse
         * @instance
         */
        RemoteJsResponse.prototype.requestIdLSB = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RemoteJsResponse compileResponse.
         * @member {js.IJsCompileResponse|null|undefined} compileResponse
         * @memberof js.RemoteJsResponse
         * @instance
         */
        RemoteJsResponse.prototype.compileResponse = null;

        /**
         * RemoteJsResponse invokeResponse.
         * @member {js.IJsInvokeResponse|null|undefined} invokeResponse
         * @memberof js.RemoteJsResponse
         * @instance
         */
        RemoteJsResponse.prototype.invokeResponse = null;

        /**
         * RemoteJsResponse releaseResponse.
         * @member {js.IJsReleaseResponse|null|undefined} releaseResponse
         * @memberof js.RemoteJsResponse
         * @instance
         */
        RemoteJsResponse.prototype.releaseResponse = null;

        /**
         * Creates a new RemoteJsResponse instance using the specified properties.
         * @function create
         * @memberof js.RemoteJsResponse
         * @static
         * @param {js.IRemoteJsResponse=} [properties] Properties to set
         * @returns {js.RemoteJsResponse} RemoteJsResponse instance
         */
        RemoteJsResponse.create = function create(properties) {
            return new RemoteJsResponse(properties);
        };

        /**
         * Encodes the specified RemoteJsResponse message. Does not implicitly {@link js.RemoteJsResponse.verify|verify} messages.
         * @function encode
         * @memberof js.RemoteJsResponse
         * @static
         * @param {js.IRemoteJsResponse} message RemoteJsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RemoteJsResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.requestIdMSB != null && message.hasOwnProperty("requestIdMSB"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.requestIdMSB);
            if (message.requestIdLSB != null && message.hasOwnProperty("requestIdLSB"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.requestIdLSB);
            if (message.compileResponse != null && message.hasOwnProperty("compileResponse"))
                $root.js.JsCompileResponse.encode(message.compileResponse, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.invokeResponse != null && message.hasOwnProperty("invokeResponse"))
                $root.js.JsInvokeResponse.encode(message.invokeResponse, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.releaseResponse != null && message.hasOwnProperty("releaseResponse"))
                $root.js.JsReleaseResponse.encode(message.releaseResponse, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RemoteJsResponse message, length delimited. Does not implicitly {@link js.RemoteJsResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof js.RemoteJsResponse
         * @static
         * @param {js.IRemoteJsResponse} message RemoteJsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RemoteJsResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RemoteJsResponse message from the specified reader or buffer.
         * @function decode
         * @memberof js.RemoteJsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {js.RemoteJsResponse} RemoteJsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RemoteJsResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.js.RemoteJsResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.requestIdMSB = reader.int64();
                    break;
                case 2:
                    message.requestIdLSB = reader.int64();
                    break;
                case 3:
                    message.compileResponse = $root.js.JsCompileResponse.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.invokeResponse = $root.js.JsInvokeResponse.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.releaseResponse = $root.js.JsReleaseResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RemoteJsResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof js.RemoteJsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {js.RemoteJsResponse} RemoteJsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RemoteJsResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RemoteJsResponse message.
         * @function verify
         * @memberof js.RemoteJsResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RemoteJsResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.requestIdMSB != null && message.hasOwnProperty("requestIdMSB"))
                if (!$util.isInteger(message.requestIdMSB) && !(message.requestIdMSB && $util.isInteger(message.requestIdMSB.low) && $util.isInteger(message.requestIdMSB.high)))
                    return "requestIdMSB: integer|Long expected";
            if (message.requestIdLSB != null && message.hasOwnProperty("requestIdLSB"))
                if (!$util.isInteger(message.requestIdLSB) && !(message.requestIdLSB && $util.isInteger(message.requestIdLSB.low) && $util.isInteger(message.requestIdLSB.high)))
                    return "requestIdLSB: integer|Long expected";
            if (message.compileResponse != null && message.hasOwnProperty("compileResponse")) {
                var error = $root.js.JsCompileResponse.verify(message.compileResponse);
                if (error)
                    return "compileResponse." + error;
            }
            if (message.invokeResponse != null && message.hasOwnProperty("invokeResponse")) {
                var error = $root.js.JsInvokeResponse.verify(message.invokeResponse);
                if (error)
                    return "invokeResponse." + error;
            }
            if (message.releaseResponse != null && message.hasOwnProperty("releaseResponse")) {
                var error = $root.js.JsReleaseResponse.verify(message.releaseResponse);
                if (error)
                    return "releaseResponse." + error;
            }
            return null;
        };

        /**
         * Creates a RemoteJsResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof js.RemoteJsResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {js.RemoteJsResponse} RemoteJsResponse
         */
        RemoteJsResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.js.RemoteJsResponse)
                return object;
            var message = new $root.js.RemoteJsResponse();
            if (object.requestIdMSB != null)
                if ($util.Long)
                    (message.requestIdMSB = $util.Long.fromValue(object.requestIdMSB)).unsigned = false;
                else if (typeof object.requestIdMSB === "string")
                    message.requestIdMSB = parseInt(object.requestIdMSB, 10);
                else if (typeof object.requestIdMSB === "number")
                    message.requestIdMSB = object.requestIdMSB;
                else if (typeof object.requestIdMSB === "object")
                    message.requestIdMSB = new $util.LongBits(object.requestIdMSB.low >>> 0, object.requestIdMSB.high >>> 0).toNumber();
            if (object.requestIdLSB != null)
                if ($util.Long)
                    (message.requestIdLSB = $util.Long.fromValue(object.requestIdLSB)).unsigned = false;
                else if (typeof object.requestIdLSB === "string")
                    message.requestIdLSB = parseInt(object.requestIdLSB, 10);
                else if (typeof object.requestIdLSB === "number")
                    message.requestIdLSB = object.requestIdLSB;
                else if (typeof object.requestIdLSB === "object")
                    message.requestIdLSB = new $util.LongBits(object.requestIdLSB.low >>> 0, object.requestIdLSB.high >>> 0).toNumber();
            if (object.compileResponse != null) {
                if (typeof object.compileResponse !== "object")
                    throw TypeError(".js.RemoteJsResponse.compileResponse: object expected");
                message.compileResponse = $root.js.JsCompileResponse.fromObject(object.compileResponse);
            }
            if (object.invokeResponse != null) {
                if (typeof object.invokeResponse !== "object")
                    throw TypeError(".js.RemoteJsResponse.invokeResponse: object expected");
                message.invokeResponse = $root.js.JsInvokeResponse.fromObject(object.invokeResponse);
            }
            if (object.releaseResponse != null) {
                if (typeof object.releaseResponse !== "object")
                    throw TypeError(".js.RemoteJsResponse.releaseResponse: object expected");
                message.releaseResponse = $root.js.JsReleaseResponse.fromObject(object.releaseResponse);
            }
            return message;
        };

        /**
         * Creates a plain object from a RemoteJsResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof js.RemoteJsResponse
         * @static
         * @param {js.RemoteJsResponse} message RemoteJsResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RemoteJsResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.requestIdMSB = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.requestIdMSB = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.requestIdLSB = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.requestIdLSB = options.longs === String ? "0" : 0;
                object.compileResponse = null;
                object.invokeResponse = null;
                object.releaseResponse = null;
            }
            if (message.requestIdMSB != null && message.hasOwnProperty("requestIdMSB"))
                if (typeof message.requestIdMSB === "number")
                    object.requestIdMSB = options.longs === String ? String(message.requestIdMSB) : message.requestIdMSB;
                else
                    object.requestIdMSB = options.longs === String ? $util.Long.prototype.toString.call(message.requestIdMSB) : options.longs === Number ? new $util.LongBits(message.requestIdMSB.low >>> 0, message.requestIdMSB.high >>> 0).toNumber() : message.requestIdMSB;
            if (message.requestIdLSB != null && message.hasOwnProperty("requestIdLSB"))
                if (typeof message.requestIdLSB === "number")
                    object.requestIdLSB = options.longs === String ? String(message.requestIdLSB) : message.requestIdLSB;
                else
                    object.requestIdLSB = options.longs === String ? $util.Long.prototype.toString.call(message.requestIdLSB) : options.longs === Number ? new $util.LongBits(message.requestIdLSB.low >>> 0, message.requestIdLSB.high >>> 0).toNumber() : message.requestIdLSB;
            if (message.compileResponse != null && message.hasOwnProperty("compileResponse"))
                object.compileResponse = $root.js.JsCompileResponse.toObject(message.compileResponse, options);
            if (message.invokeResponse != null && message.hasOwnProperty("invokeResponse"))
                object.invokeResponse = $root.js.JsInvokeResponse.toObject(message.invokeResponse, options);
            if (message.releaseResponse != null && message.hasOwnProperty("releaseResponse"))
                object.releaseResponse = $root.js.JsReleaseResponse.toObject(message.releaseResponse, options);
            return object;
        };

        /**
         * Converts this RemoteJsResponse to JSON.
         * @function toJSON
         * @memberof js.RemoteJsResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RemoteJsResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RemoteJsResponse;
    })();

    js.JsCompileRequest = (function() {

        /**
         * Properties of a JsCompileRequest.
         * @memberof js
         * @interface IJsCompileRequest
         * @property {number|Long|null} [scriptIdMSB] JsCompileRequest scriptIdMSB
         * @property {number|Long|null} [scriptIdLSB] JsCompileRequest scriptIdLSB
         * @property {string|null} [functionName] JsCompileRequest functionName
         * @property {string|null} [scriptBody] JsCompileRequest scriptBody
         */

        /**
         * Constructs a new JsCompileRequest.
         * @memberof js
         * @classdesc Represents a JsCompileRequest.
         * @implements IJsCompileRequest
         * @constructor
         * @param {js.IJsCompileRequest=} [properties] Properties to set
         */
        function JsCompileRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JsCompileRequest scriptIdMSB.
         * @member {number|Long} scriptIdMSB
         * @memberof js.JsCompileRequest
         * @instance
         */
        JsCompileRequest.prototype.scriptIdMSB = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JsCompileRequest scriptIdLSB.
         * @member {number|Long} scriptIdLSB
         * @memberof js.JsCompileRequest
         * @instance
         */
        JsCompileRequest.prototype.scriptIdLSB = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JsCompileRequest functionName.
         * @member {string} functionName
         * @memberof js.JsCompileRequest
         * @instance
         */
        JsCompileRequest.prototype.functionName = "";

        /**
         * JsCompileRequest scriptBody.
         * @member {string} scriptBody
         * @memberof js.JsCompileRequest
         * @instance
         */
        JsCompileRequest.prototype.scriptBody = "";

        /**
         * Creates a new JsCompileRequest instance using the specified properties.
         * @function create
         * @memberof js.JsCompileRequest
         * @static
         * @param {js.IJsCompileRequest=} [properties] Properties to set
         * @returns {js.JsCompileRequest} JsCompileRequest instance
         */
        JsCompileRequest.create = function create(properties) {
            return new JsCompileRequest(properties);
        };

        /**
         * Encodes the specified JsCompileRequest message. Does not implicitly {@link js.JsCompileRequest.verify|verify} messages.
         * @function encode
         * @memberof js.JsCompileRequest
         * @static
         * @param {js.IJsCompileRequest} message JsCompileRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JsCompileRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.scriptIdMSB != null && message.hasOwnProperty("scriptIdMSB"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.scriptIdMSB);
            if (message.scriptIdLSB != null && message.hasOwnProperty("scriptIdLSB"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.scriptIdLSB);
            if (message.functionName != null && message.hasOwnProperty("functionName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.functionName);
            if (message.scriptBody != null && message.hasOwnProperty("scriptBody"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.scriptBody);
            return writer;
        };

        /**
         * Encodes the specified JsCompileRequest message, length delimited. Does not implicitly {@link js.JsCompileRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof js.JsCompileRequest
         * @static
         * @param {js.IJsCompileRequest} message JsCompileRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JsCompileRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JsCompileRequest message from the specified reader or buffer.
         * @function decode
         * @memberof js.JsCompileRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {js.JsCompileRequest} JsCompileRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JsCompileRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.js.JsCompileRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.scriptIdMSB = reader.int64();
                    break;
                case 2:
                    message.scriptIdLSB = reader.int64();
                    break;
                case 3:
                    message.functionName = reader.string();
                    break;
                case 4:
                    message.scriptBody = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JsCompileRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof js.JsCompileRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {js.JsCompileRequest} JsCompileRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JsCompileRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JsCompileRequest message.
         * @function verify
         * @memberof js.JsCompileRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JsCompileRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.scriptIdMSB != null && message.hasOwnProperty("scriptIdMSB"))
                if (!$util.isInteger(message.scriptIdMSB) && !(message.scriptIdMSB && $util.isInteger(message.scriptIdMSB.low) && $util.isInteger(message.scriptIdMSB.high)))
                    return "scriptIdMSB: integer|Long expected";
            if (message.scriptIdLSB != null && message.hasOwnProperty("scriptIdLSB"))
                if (!$util.isInteger(message.scriptIdLSB) && !(message.scriptIdLSB && $util.isInteger(message.scriptIdLSB.low) && $util.isInteger(message.scriptIdLSB.high)))
                    return "scriptIdLSB: integer|Long expected";
            if (message.functionName != null && message.hasOwnProperty("functionName"))
                if (!$util.isString(message.functionName))
                    return "functionName: string expected";
            if (message.scriptBody != null && message.hasOwnProperty("scriptBody"))
                if (!$util.isString(message.scriptBody))
                    return "scriptBody: string expected";
            return null;
        };

        /**
         * Creates a JsCompileRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof js.JsCompileRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {js.JsCompileRequest} JsCompileRequest
         */
        JsCompileRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.js.JsCompileRequest)
                return object;
            var message = new $root.js.JsCompileRequest();
            if (object.scriptIdMSB != null)
                if ($util.Long)
                    (message.scriptIdMSB = $util.Long.fromValue(object.scriptIdMSB)).unsigned = false;
                else if (typeof object.scriptIdMSB === "string")
                    message.scriptIdMSB = parseInt(object.scriptIdMSB, 10);
                else if (typeof object.scriptIdMSB === "number")
                    message.scriptIdMSB = object.scriptIdMSB;
                else if (typeof object.scriptIdMSB === "object")
                    message.scriptIdMSB = new $util.LongBits(object.scriptIdMSB.low >>> 0, object.scriptIdMSB.high >>> 0).toNumber();
            if (object.scriptIdLSB != null)
                if ($util.Long)
                    (message.scriptIdLSB = $util.Long.fromValue(object.scriptIdLSB)).unsigned = false;
                else if (typeof object.scriptIdLSB === "string")
                    message.scriptIdLSB = parseInt(object.scriptIdLSB, 10);
                else if (typeof object.scriptIdLSB === "number")
                    message.scriptIdLSB = object.scriptIdLSB;
                else if (typeof object.scriptIdLSB === "object")
                    message.scriptIdLSB = new $util.LongBits(object.scriptIdLSB.low >>> 0, object.scriptIdLSB.high >>> 0).toNumber();
            if (object.functionName != null)
                message.functionName = String(object.functionName);
            if (object.scriptBody != null)
                message.scriptBody = String(object.scriptBody);
            return message;
        };

        /**
         * Creates a plain object from a JsCompileRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof js.JsCompileRequest
         * @static
         * @param {js.JsCompileRequest} message JsCompileRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JsCompileRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.scriptIdMSB = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.scriptIdMSB = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.scriptIdLSB = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.scriptIdLSB = options.longs === String ? "0" : 0;
                object.functionName = "";
                object.scriptBody = "";
            }
            if (message.scriptIdMSB != null && message.hasOwnProperty("scriptIdMSB"))
                if (typeof message.scriptIdMSB === "number")
                    object.scriptIdMSB = options.longs === String ? String(message.scriptIdMSB) : message.scriptIdMSB;
                else
                    object.scriptIdMSB = options.longs === String ? $util.Long.prototype.toString.call(message.scriptIdMSB) : options.longs === Number ? new $util.LongBits(message.scriptIdMSB.low >>> 0, message.scriptIdMSB.high >>> 0).toNumber() : message.scriptIdMSB;
            if (message.scriptIdLSB != null && message.hasOwnProperty("scriptIdLSB"))
                if (typeof message.scriptIdLSB === "number")
                    object.scriptIdLSB = options.longs === String ? String(message.scriptIdLSB) : message.scriptIdLSB;
                else
                    object.scriptIdLSB = options.longs === String ? $util.Long.prototype.toString.call(message.scriptIdLSB) : options.longs === Number ? new $util.LongBits(message.scriptIdLSB.low >>> 0, message.scriptIdLSB.high >>> 0).toNumber() : message.scriptIdLSB;
            if (message.functionName != null && message.hasOwnProperty("functionName"))
                object.functionName = message.functionName;
            if (message.scriptBody != null && message.hasOwnProperty("scriptBody"))
                object.scriptBody = message.scriptBody;
            return object;
        };

        /**
         * Converts this JsCompileRequest to JSON.
         * @function toJSON
         * @memberof js.JsCompileRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JsCompileRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JsCompileRequest;
    })();

    js.JsReleaseRequest = (function() {

        /**
         * Properties of a JsReleaseRequest.
         * @memberof js
         * @interface IJsReleaseRequest
         * @property {number|Long|null} [scriptIdMSB] JsReleaseRequest scriptIdMSB
         * @property {number|Long|null} [scriptIdLSB] JsReleaseRequest scriptIdLSB
         * @property {string|null} [functionName] JsReleaseRequest functionName
         */

        /**
         * Constructs a new JsReleaseRequest.
         * @memberof js
         * @classdesc Represents a JsReleaseRequest.
         * @implements IJsReleaseRequest
         * @constructor
         * @param {js.IJsReleaseRequest=} [properties] Properties to set
         */
        function JsReleaseRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JsReleaseRequest scriptIdMSB.
         * @member {number|Long} scriptIdMSB
         * @memberof js.JsReleaseRequest
         * @instance
         */
        JsReleaseRequest.prototype.scriptIdMSB = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JsReleaseRequest scriptIdLSB.
         * @member {number|Long} scriptIdLSB
         * @memberof js.JsReleaseRequest
         * @instance
         */
        JsReleaseRequest.prototype.scriptIdLSB = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JsReleaseRequest functionName.
         * @member {string} functionName
         * @memberof js.JsReleaseRequest
         * @instance
         */
        JsReleaseRequest.prototype.functionName = "";

        /**
         * Creates a new JsReleaseRequest instance using the specified properties.
         * @function create
         * @memberof js.JsReleaseRequest
         * @static
         * @param {js.IJsReleaseRequest=} [properties] Properties to set
         * @returns {js.JsReleaseRequest} JsReleaseRequest instance
         */
        JsReleaseRequest.create = function create(properties) {
            return new JsReleaseRequest(properties);
        };

        /**
         * Encodes the specified JsReleaseRequest message. Does not implicitly {@link js.JsReleaseRequest.verify|verify} messages.
         * @function encode
         * @memberof js.JsReleaseRequest
         * @static
         * @param {js.IJsReleaseRequest} message JsReleaseRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JsReleaseRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.scriptIdMSB != null && message.hasOwnProperty("scriptIdMSB"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.scriptIdMSB);
            if (message.scriptIdLSB != null && message.hasOwnProperty("scriptIdLSB"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.scriptIdLSB);
            if (message.functionName != null && message.hasOwnProperty("functionName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.functionName);
            return writer;
        };

        /**
         * Encodes the specified JsReleaseRequest message, length delimited. Does not implicitly {@link js.JsReleaseRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof js.JsReleaseRequest
         * @static
         * @param {js.IJsReleaseRequest} message JsReleaseRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JsReleaseRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JsReleaseRequest message from the specified reader or buffer.
         * @function decode
         * @memberof js.JsReleaseRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {js.JsReleaseRequest} JsReleaseRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JsReleaseRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.js.JsReleaseRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.scriptIdMSB = reader.int64();
                    break;
                case 2:
                    message.scriptIdLSB = reader.int64();
                    break;
                case 3:
                    message.functionName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JsReleaseRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof js.JsReleaseRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {js.JsReleaseRequest} JsReleaseRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JsReleaseRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JsReleaseRequest message.
         * @function verify
         * @memberof js.JsReleaseRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JsReleaseRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.scriptIdMSB != null && message.hasOwnProperty("scriptIdMSB"))
                if (!$util.isInteger(message.scriptIdMSB) && !(message.scriptIdMSB && $util.isInteger(message.scriptIdMSB.low) && $util.isInteger(message.scriptIdMSB.high)))
                    return "scriptIdMSB: integer|Long expected";
            if (message.scriptIdLSB != null && message.hasOwnProperty("scriptIdLSB"))
                if (!$util.isInteger(message.scriptIdLSB) && !(message.scriptIdLSB && $util.isInteger(message.scriptIdLSB.low) && $util.isInteger(message.scriptIdLSB.high)))
                    return "scriptIdLSB: integer|Long expected";
            if (message.functionName != null && message.hasOwnProperty("functionName"))
                if (!$util.isString(message.functionName))
                    return "functionName: string expected";
            return null;
        };

        /**
         * Creates a JsReleaseRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof js.JsReleaseRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {js.JsReleaseRequest} JsReleaseRequest
         */
        JsReleaseRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.js.JsReleaseRequest)
                return object;
            var message = new $root.js.JsReleaseRequest();
            if (object.scriptIdMSB != null)
                if ($util.Long)
                    (message.scriptIdMSB = $util.Long.fromValue(object.scriptIdMSB)).unsigned = false;
                else if (typeof object.scriptIdMSB === "string")
                    message.scriptIdMSB = parseInt(object.scriptIdMSB, 10);
                else if (typeof object.scriptIdMSB === "number")
                    message.scriptIdMSB = object.scriptIdMSB;
                else if (typeof object.scriptIdMSB === "object")
                    message.scriptIdMSB = new $util.LongBits(object.scriptIdMSB.low >>> 0, object.scriptIdMSB.high >>> 0).toNumber();
            if (object.scriptIdLSB != null)
                if ($util.Long)
                    (message.scriptIdLSB = $util.Long.fromValue(object.scriptIdLSB)).unsigned = false;
                else if (typeof object.scriptIdLSB === "string")
                    message.scriptIdLSB = parseInt(object.scriptIdLSB, 10);
                else if (typeof object.scriptIdLSB === "number")
                    message.scriptIdLSB = object.scriptIdLSB;
                else if (typeof object.scriptIdLSB === "object")
                    message.scriptIdLSB = new $util.LongBits(object.scriptIdLSB.low >>> 0, object.scriptIdLSB.high >>> 0).toNumber();
            if (object.functionName != null)
                message.functionName = String(object.functionName);
            return message;
        };

        /**
         * Creates a plain object from a JsReleaseRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof js.JsReleaseRequest
         * @static
         * @param {js.JsReleaseRequest} message JsReleaseRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JsReleaseRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.scriptIdMSB = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.scriptIdMSB = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.scriptIdLSB = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.scriptIdLSB = options.longs === String ? "0" : 0;
                object.functionName = "";
            }
            if (message.scriptIdMSB != null && message.hasOwnProperty("scriptIdMSB"))
                if (typeof message.scriptIdMSB === "number")
                    object.scriptIdMSB = options.longs === String ? String(message.scriptIdMSB) : message.scriptIdMSB;
                else
                    object.scriptIdMSB = options.longs === String ? $util.Long.prototype.toString.call(message.scriptIdMSB) : options.longs === Number ? new $util.LongBits(message.scriptIdMSB.low >>> 0, message.scriptIdMSB.high >>> 0).toNumber() : message.scriptIdMSB;
            if (message.scriptIdLSB != null && message.hasOwnProperty("scriptIdLSB"))
                if (typeof message.scriptIdLSB === "number")
                    object.scriptIdLSB = options.longs === String ? String(message.scriptIdLSB) : message.scriptIdLSB;
                else
                    object.scriptIdLSB = options.longs === String ? $util.Long.prototype.toString.call(message.scriptIdLSB) : options.longs === Number ? new $util.LongBits(message.scriptIdLSB.low >>> 0, message.scriptIdLSB.high >>> 0).toNumber() : message.scriptIdLSB;
            if (message.functionName != null && message.hasOwnProperty("functionName"))
                object.functionName = message.functionName;
            return object;
        };

        /**
         * Converts this JsReleaseRequest to JSON.
         * @function toJSON
         * @memberof js.JsReleaseRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JsReleaseRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JsReleaseRequest;
    })();

    js.JsReleaseResponse = (function() {

        /**
         * Properties of a JsReleaseResponse.
         * @memberof js
         * @interface IJsReleaseResponse
         * @property {boolean|null} [success] JsReleaseResponse success
         * @property {number|Long|null} [scriptIdMSB] JsReleaseResponse scriptIdMSB
         * @property {number|Long|null} [scriptIdLSB] JsReleaseResponse scriptIdLSB
         */

        /**
         * Constructs a new JsReleaseResponse.
         * @memberof js
         * @classdesc Represents a JsReleaseResponse.
         * @implements IJsReleaseResponse
         * @constructor
         * @param {js.IJsReleaseResponse=} [properties] Properties to set
         */
        function JsReleaseResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JsReleaseResponse success.
         * @member {boolean} success
         * @memberof js.JsReleaseResponse
         * @instance
         */
        JsReleaseResponse.prototype.success = false;

        /**
         * JsReleaseResponse scriptIdMSB.
         * @member {number|Long} scriptIdMSB
         * @memberof js.JsReleaseResponse
         * @instance
         */
        JsReleaseResponse.prototype.scriptIdMSB = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JsReleaseResponse scriptIdLSB.
         * @member {number|Long} scriptIdLSB
         * @memberof js.JsReleaseResponse
         * @instance
         */
        JsReleaseResponse.prototype.scriptIdLSB = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new JsReleaseResponse instance using the specified properties.
         * @function create
         * @memberof js.JsReleaseResponse
         * @static
         * @param {js.IJsReleaseResponse=} [properties] Properties to set
         * @returns {js.JsReleaseResponse} JsReleaseResponse instance
         */
        JsReleaseResponse.create = function create(properties) {
            return new JsReleaseResponse(properties);
        };

        /**
         * Encodes the specified JsReleaseResponse message. Does not implicitly {@link js.JsReleaseResponse.verify|verify} messages.
         * @function encode
         * @memberof js.JsReleaseResponse
         * @static
         * @param {js.IJsReleaseResponse} message JsReleaseResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JsReleaseResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.success != null && message.hasOwnProperty("success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            if (message.scriptIdMSB != null && message.hasOwnProperty("scriptIdMSB"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.scriptIdMSB);
            if (message.scriptIdLSB != null && message.hasOwnProperty("scriptIdLSB"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.scriptIdLSB);
            return writer;
        };

        /**
         * Encodes the specified JsReleaseResponse message, length delimited. Does not implicitly {@link js.JsReleaseResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof js.JsReleaseResponse
         * @static
         * @param {js.IJsReleaseResponse} message JsReleaseResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JsReleaseResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JsReleaseResponse message from the specified reader or buffer.
         * @function decode
         * @memberof js.JsReleaseResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {js.JsReleaseResponse} JsReleaseResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JsReleaseResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.js.JsReleaseResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.success = reader.bool();
                    break;
                case 2:
                    message.scriptIdMSB = reader.int64();
                    break;
                case 3:
                    message.scriptIdLSB = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JsReleaseResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof js.JsReleaseResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {js.JsReleaseResponse} JsReleaseResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JsReleaseResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JsReleaseResponse message.
         * @function verify
         * @memberof js.JsReleaseResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JsReleaseResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            if (message.scriptIdMSB != null && message.hasOwnProperty("scriptIdMSB"))
                if (!$util.isInteger(message.scriptIdMSB) && !(message.scriptIdMSB && $util.isInteger(message.scriptIdMSB.low) && $util.isInteger(message.scriptIdMSB.high)))
                    return "scriptIdMSB: integer|Long expected";
            if (message.scriptIdLSB != null && message.hasOwnProperty("scriptIdLSB"))
                if (!$util.isInteger(message.scriptIdLSB) && !(message.scriptIdLSB && $util.isInteger(message.scriptIdLSB.low) && $util.isInteger(message.scriptIdLSB.high)))
                    return "scriptIdLSB: integer|Long expected";
            return null;
        };

        /**
         * Creates a JsReleaseResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof js.JsReleaseResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {js.JsReleaseResponse} JsReleaseResponse
         */
        JsReleaseResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.js.JsReleaseResponse)
                return object;
            var message = new $root.js.JsReleaseResponse();
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.scriptIdMSB != null)
                if ($util.Long)
                    (message.scriptIdMSB = $util.Long.fromValue(object.scriptIdMSB)).unsigned = false;
                else if (typeof object.scriptIdMSB === "string")
                    message.scriptIdMSB = parseInt(object.scriptIdMSB, 10);
                else if (typeof object.scriptIdMSB === "number")
                    message.scriptIdMSB = object.scriptIdMSB;
                else if (typeof object.scriptIdMSB === "object")
                    message.scriptIdMSB = new $util.LongBits(object.scriptIdMSB.low >>> 0, object.scriptIdMSB.high >>> 0).toNumber();
            if (object.scriptIdLSB != null)
                if ($util.Long)
                    (message.scriptIdLSB = $util.Long.fromValue(object.scriptIdLSB)).unsigned = false;
                else if (typeof object.scriptIdLSB === "string")
                    message.scriptIdLSB = parseInt(object.scriptIdLSB, 10);
                else if (typeof object.scriptIdLSB === "number")
                    message.scriptIdLSB = object.scriptIdLSB;
                else if (typeof object.scriptIdLSB === "object")
                    message.scriptIdLSB = new $util.LongBits(object.scriptIdLSB.low >>> 0, object.scriptIdLSB.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a JsReleaseResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof js.JsReleaseResponse
         * @static
         * @param {js.JsReleaseResponse} message JsReleaseResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JsReleaseResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.success = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.scriptIdMSB = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.scriptIdMSB = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.scriptIdLSB = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.scriptIdLSB = options.longs === String ? "0" : 0;
            }
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.scriptIdMSB != null && message.hasOwnProperty("scriptIdMSB"))
                if (typeof message.scriptIdMSB === "number")
                    object.scriptIdMSB = options.longs === String ? String(message.scriptIdMSB) : message.scriptIdMSB;
                else
                    object.scriptIdMSB = options.longs === String ? $util.Long.prototype.toString.call(message.scriptIdMSB) : options.longs === Number ? new $util.LongBits(message.scriptIdMSB.low >>> 0, message.scriptIdMSB.high >>> 0).toNumber() : message.scriptIdMSB;
            if (message.scriptIdLSB != null && message.hasOwnProperty("scriptIdLSB"))
                if (typeof message.scriptIdLSB === "number")
                    object.scriptIdLSB = options.longs === String ? String(message.scriptIdLSB) : message.scriptIdLSB;
                else
                    object.scriptIdLSB = options.longs === String ? $util.Long.prototype.toString.call(message.scriptIdLSB) : options.longs === Number ? new $util.LongBits(message.scriptIdLSB.low >>> 0, message.scriptIdLSB.high >>> 0).toNumber() : message.scriptIdLSB;
            return object;
        };

        /**
         * Converts this JsReleaseResponse to JSON.
         * @function toJSON
         * @memberof js.JsReleaseResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JsReleaseResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JsReleaseResponse;
    })();

    js.JsCompileResponse = (function() {

        /**
         * Properties of a JsCompileResponse.
         * @memberof js
         * @interface IJsCompileResponse
         * @property {boolean|null} [success] JsCompileResponse success
         * @property {number|Long|null} [scriptIdMSB] JsCompileResponse scriptIdMSB
         * @property {number|Long|null} [scriptIdLSB] JsCompileResponse scriptIdLSB
         * @property {js.JsInvokeErrorCode|null} [errorCode] JsCompileResponse errorCode
         * @property {string|null} [errorDetails] JsCompileResponse errorDetails
         */

        /**
         * Constructs a new JsCompileResponse.
         * @memberof js
         * @classdesc Represents a JsCompileResponse.
         * @implements IJsCompileResponse
         * @constructor
         * @param {js.IJsCompileResponse=} [properties] Properties to set
         */
        function JsCompileResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JsCompileResponse success.
         * @member {boolean} success
         * @memberof js.JsCompileResponse
         * @instance
         */
        JsCompileResponse.prototype.success = false;

        /**
         * JsCompileResponse scriptIdMSB.
         * @member {number|Long} scriptIdMSB
         * @memberof js.JsCompileResponse
         * @instance
         */
        JsCompileResponse.prototype.scriptIdMSB = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JsCompileResponse scriptIdLSB.
         * @member {number|Long} scriptIdLSB
         * @memberof js.JsCompileResponse
         * @instance
         */
        JsCompileResponse.prototype.scriptIdLSB = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JsCompileResponse errorCode.
         * @member {js.JsInvokeErrorCode} errorCode
         * @memberof js.JsCompileResponse
         * @instance
         */
        JsCompileResponse.prototype.errorCode = 0;

        /**
         * JsCompileResponse errorDetails.
         * @member {string} errorDetails
         * @memberof js.JsCompileResponse
         * @instance
         */
        JsCompileResponse.prototype.errorDetails = "";

        /**
         * Creates a new JsCompileResponse instance using the specified properties.
         * @function create
         * @memberof js.JsCompileResponse
         * @static
         * @param {js.IJsCompileResponse=} [properties] Properties to set
         * @returns {js.JsCompileResponse} JsCompileResponse instance
         */
        JsCompileResponse.create = function create(properties) {
            return new JsCompileResponse(properties);
        };

        /**
         * Encodes the specified JsCompileResponse message. Does not implicitly {@link js.JsCompileResponse.verify|verify} messages.
         * @function encode
         * @memberof js.JsCompileResponse
         * @static
         * @param {js.IJsCompileResponse} message JsCompileResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JsCompileResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.success != null && message.hasOwnProperty("success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            if (message.scriptIdMSB != null && message.hasOwnProperty("scriptIdMSB"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.scriptIdMSB);
            if (message.scriptIdLSB != null && message.hasOwnProperty("scriptIdLSB"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.scriptIdLSB);
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.errorCode);
            if (message.errorDetails != null && message.hasOwnProperty("errorDetails"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.errorDetails);
            return writer;
        };

        /**
         * Encodes the specified JsCompileResponse message, length delimited. Does not implicitly {@link js.JsCompileResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof js.JsCompileResponse
         * @static
         * @param {js.IJsCompileResponse} message JsCompileResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JsCompileResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JsCompileResponse message from the specified reader or buffer.
         * @function decode
         * @memberof js.JsCompileResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {js.JsCompileResponse} JsCompileResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JsCompileResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.js.JsCompileResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.success = reader.bool();
                    break;
                case 2:
                    message.scriptIdMSB = reader.int64();
                    break;
                case 3:
                    message.scriptIdLSB = reader.int64();
                    break;
                case 4:
                    message.errorCode = reader.int32();
                    break;
                case 5:
                    message.errorDetails = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JsCompileResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof js.JsCompileResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {js.JsCompileResponse} JsCompileResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JsCompileResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JsCompileResponse message.
         * @function verify
         * @memberof js.JsCompileResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JsCompileResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            if (message.scriptIdMSB != null && message.hasOwnProperty("scriptIdMSB"))
                if (!$util.isInteger(message.scriptIdMSB) && !(message.scriptIdMSB && $util.isInteger(message.scriptIdMSB.low) && $util.isInteger(message.scriptIdMSB.high)))
                    return "scriptIdMSB: integer|Long expected";
            if (message.scriptIdLSB != null && message.hasOwnProperty("scriptIdLSB"))
                if (!$util.isInteger(message.scriptIdLSB) && !(message.scriptIdLSB && $util.isInteger(message.scriptIdLSB.low) && $util.isInteger(message.scriptIdLSB.high)))
                    return "scriptIdLSB: integer|Long expected";
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                switch (message.errorCode) {
                default:
                    return "errorCode: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.errorDetails != null && message.hasOwnProperty("errorDetails"))
                if (!$util.isString(message.errorDetails))
                    return "errorDetails: string expected";
            return null;
        };

        /**
         * Creates a JsCompileResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof js.JsCompileResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {js.JsCompileResponse} JsCompileResponse
         */
        JsCompileResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.js.JsCompileResponse)
                return object;
            var message = new $root.js.JsCompileResponse();
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.scriptIdMSB != null)
                if ($util.Long)
                    (message.scriptIdMSB = $util.Long.fromValue(object.scriptIdMSB)).unsigned = false;
                else if (typeof object.scriptIdMSB === "string")
                    message.scriptIdMSB = parseInt(object.scriptIdMSB, 10);
                else if (typeof object.scriptIdMSB === "number")
                    message.scriptIdMSB = object.scriptIdMSB;
                else if (typeof object.scriptIdMSB === "object")
                    message.scriptIdMSB = new $util.LongBits(object.scriptIdMSB.low >>> 0, object.scriptIdMSB.high >>> 0).toNumber();
            if (object.scriptIdLSB != null)
                if ($util.Long)
                    (message.scriptIdLSB = $util.Long.fromValue(object.scriptIdLSB)).unsigned = false;
                else if (typeof object.scriptIdLSB === "string")
                    message.scriptIdLSB = parseInt(object.scriptIdLSB, 10);
                else if (typeof object.scriptIdLSB === "number")
                    message.scriptIdLSB = object.scriptIdLSB;
                else if (typeof object.scriptIdLSB === "object")
                    message.scriptIdLSB = new $util.LongBits(object.scriptIdLSB.low >>> 0, object.scriptIdLSB.high >>> 0).toNumber();
            switch (object.errorCode) {
            case "COMPILATION_ERROR":
            case 0:
                message.errorCode = 0;
                break;
            case "RUNTIME_ERROR":
            case 1:
                message.errorCode = 1;
                break;
            case "TIMEOUT_ERROR":
            case 2:
                message.errorCode = 2;
                break;
            }
            if (object.errorDetails != null)
                message.errorDetails = String(object.errorDetails);
            return message;
        };

        /**
         * Creates a plain object from a JsCompileResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof js.JsCompileResponse
         * @static
         * @param {js.JsCompileResponse} message JsCompileResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JsCompileResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.success = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.scriptIdMSB = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.scriptIdMSB = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.scriptIdLSB = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.scriptIdLSB = options.longs === String ? "0" : 0;
                object.errorCode = options.enums === String ? "COMPILATION_ERROR" : 0;
                object.errorDetails = "";
            }
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.scriptIdMSB != null && message.hasOwnProperty("scriptIdMSB"))
                if (typeof message.scriptIdMSB === "number")
                    object.scriptIdMSB = options.longs === String ? String(message.scriptIdMSB) : message.scriptIdMSB;
                else
                    object.scriptIdMSB = options.longs === String ? $util.Long.prototype.toString.call(message.scriptIdMSB) : options.longs === Number ? new $util.LongBits(message.scriptIdMSB.low >>> 0, message.scriptIdMSB.high >>> 0).toNumber() : message.scriptIdMSB;
            if (message.scriptIdLSB != null && message.hasOwnProperty("scriptIdLSB"))
                if (typeof message.scriptIdLSB === "number")
                    object.scriptIdLSB = options.longs === String ? String(message.scriptIdLSB) : message.scriptIdLSB;
                else
                    object.scriptIdLSB = options.longs === String ? $util.Long.prototype.toString.call(message.scriptIdLSB) : options.longs === Number ? new $util.LongBits(message.scriptIdLSB.low >>> 0, message.scriptIdLSB.high >>> 0).toNumber() : message.scriptIdLSB;
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                object.errorCode = options.enums === String ? $root.js.JsInvokeErrorCode[message.errorCode] : message.errorCode;
            if (message.errorDetails != null && message.hasOwnProperty("errorDetails"))
                object.errorDetails = message.errorDetails;
            return object;
        };

        /**
         * Converts this JsCompileResponse to JSON.
         * @function toJSON
         * @memberof js.JsCompileResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JsCompileResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JsCompileResponse;
    })();

    js.JsInvokeRequest = (function() {

        /**
         * Properties of a JsInvokeRequest.
         * @memberof js
         * @interface IJsInvokeRequest
         * @property {number|Long|null} [scriptIdMSB] JsInvokeRequest scriptIdMSB
         * @property {number|Long|null} [scriptIdLSB] JsInvokeRequest scriptIdLSB
         * @property {string|null} [functionName] JsInvokeRequest functionName
         * @property {string|null} [scriptBody] JsInvokeRequest scriptBody
         * @property {number|null} [timeout] JsInvokeRequest timeout
         * @property {Array.<string>|null} [args] JsInvokeRequest args
         */

        /**
         * Constructs a new JsInvokeRequest.
         * @memberof js
         * @classdesc Represents a JsInvokeRequest.
         * @implements IJsInvokeRequest
         * @constructor
         * @param {js.IJsInvokeRequest=} [properties] Properties to set
         */
        function JsInvokeRequest(properties) {
            this.args = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JsInvokeRequest scriptIdMSB.
         * @member {number|Long} scriptIdMSB
         * @memberof js.JsInvokeRequest
         * @instance
         */
        JsInvokeRequest.prototype.scriptIdMSB = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JsInvokeRequest scriptIdLSB.
         * @member {number|Long} scriptIdLSB
         * @memberof js.JsInvokeRequest
         * @instance
         */
        JsInvokeRequest.prototype.scriptIdLSB = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JsInvokeRequest functionName.
         * @member {string} functionName
         * @memberof js.JsInvokeRequest
         * @instance
         */
        JsInvokeRequest.prototype.functionName = "";

        /**
         * JsInvokeRequest scriptBody.
         * @member {string} scriptBody
         * @memberof js.JsInvokeRequest
         * @instance
         */
        JsInvokeRequest.prototype.scriptBody = "";

        /**
         * JsInvokeRequest timeout.
         * @member {number} timeout
         * @memberof js.JsInvokeRequest
         * @instance
         */
        JsInvokeRequest.prototype.timeout = 0;

        /**
         * JsInvokeRequest args.
         * @member {Array.<string>} args
         * @memberof js.JsInvokeRequest
         * @instance
         */
        JsInvokeRequest.prototype.args = $util.emptyArray;

        /**
         * Creates a new JsInvokeRequest instance using the specified properties.
         * @function create
         * @memberof js.JsInvokeRequest
         * @static
         * @param {js.IJsInvokeRequest=} [properties] Properties to set
         * @returns {js.JsInvokeRequest} JsInvokeRequest instance
         */
        JsInvokeRequest.create = function create(properties) {
            return new JsInvokeRequest(properties);
        };

        /**
         * Encodes the specified JsInvokeRequest message. Does not implicitly {@link js.JsInvokeRequest.verify|verify} messages.
         * @function encode
         * @memberof js.JsInvokeRequest
         * @static
         * @param {js.IJsInvokeRequest} message JsInvokeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JsInvokeRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.scriptIdMSB != null && message.hasOwnProperty("scriptIdMSB"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.scriptIdMSB);
            if (message.scriptIdLSB != null && message.hasOwnProperty("scriptIdLSB"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.scriptIdLSB);
            if (message.functionName != null && message.hasOwnProperty("functionName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.functionName);
            if (message.scriptBody != null && message.hasOwnProperty("scriptBody"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.scriptBody);
            if (message.timeout != null && message.hasOwnProperty("timeout"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.timeout);
            if (message.args != null && message.args.length)
                for (var i = 0; i < message.args.length; ++i)
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.args[i]);
            return writer;
        };

        /**
         * Encodes the specified JsInvokeRequest message, length delimited. Does not implicitly {@link js.JsInvokeRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof js.JsInvokeRequest
         * @static
         * @param {js.IJsInvokeRequest} message JsInvokeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JsInvokeRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JsInvokeRequest message from the specified reader or buffer.
         * @function decode
         * @memberof js.JsInvokeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {js.JsInvokeRequest} JsInvokeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JsInvokeRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.js.JsInvokeRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.scriptIdMSB = reader.int64();
                    break;
                case 2:
                    message.scriptIdLSB = reader.int64();
                    break;
                case 3:
                    message.functionName = reader.string();
                    break;
                case 4:
                    message.scriptBody = reader.string();
                    break;
                case 5:
                    message.timeout = reader.int32();
                    break;
                case 6:
                    if (!(message.args && message.args.length))
                        message.args = [];
                    message.args.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JsInvokeRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof js.JsInvokeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {js.JsInvokeRequest} JsInvokeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JsInvokeRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JsInvokeRequest message.
         * @function verify
         * @memberof js.JsInvokeRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JsInvokeRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.scriptIdMSB != null && message.hasOwnProperty("scriptIdMSB"))
                if (!$util.isInteger(message.scriptIdMSB) && !(message.scriptIdMSB && $util.isInteger(message.scriptIdMSB.low) && $util.isInteger(message.scriptIdMSB.high)))
                    return "scriptIdMSB: integer|Long expected";
            if (message.scriptIdLSB != null && message.hasOwnProperty("scriptIdLSB"))
                if (!$util.isInteger(message.scriptIdLSB) && !(message.scriptIdLSB && $util.isInteger(message.scriptIdLSB.low) && $util.isInteger(message.scriptIdLSB.high)))
                    return "scriptIdLSB: integer|Long expected";
            if (message.functionName != null && message.hasOwnProperty("functionName"))
                if (!$util.isString(message.functionName))
                    return "functionName: string expected";
            if (message.scriptBody != null && message.hasOwnProperty("scriptBody"))
                if (!$util.isString(message.scriptBody))
                    return "scriptBody: string expected";
            if (message.timeout != null && message.hasOwnProperty("timeout"))
                if (!$util.isInteger(message.timeout))
                    return "timeout: integer expected";
            if (message.args != null && message.hasOwnProperty("args")) {
                if (!Array.isArray(message.args))
                    return "args: array expected";
                for (var i = 0; i < message.args.length; ++i)
                    if (!$util.isString(message.args[i]))
                        return "args: string[] expected";
            }
            return null;
        };

        /**
         * Creates a JsInvokeRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof js.JsInvokeRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {js.JsInvokeRequest} JsInvokeRequest
         */
        JsInvokeRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.js.JsInvokeRequest)
                return object;
            var message = new $root.js.JsInvokeRequest();
            if (object.scriptIdMSB != null)
                if ($util.Long)
                    (message.scriptIdMSB = $util.Long.fromValue(object.scriptIdMSB)).unsigned = false;
                else if (typeof object.scriptIdMSB === "string")
                    message.scriptIdMSB = parseInt(object.scriptIdMSB, 10);
                else if (typeof object.scriptIdMSB === "number")
                    message.scriptIdMSB = object.scriptIdMSB;
                else if (typeof object.scriptIdMSB === "object")
                    message.scriptIdMSB = new $util.LongBits(object.scriptIdMSB.low >>> 0, object.scriptIdMSB.high >>> 0).toNumber();
            if (object.scriptIdLSB != null)
                if ($util.Long)
                    (message.scriptIdLSB = $util.Long.fromValue(object.scriptIdLSB)).unsigned = false;
                else if (typeof object.scriptIdLSB === "string")
                    message.scriptIdLSB = parseInt(object.scriptIdLSB, 10);
                else if (typeof object.scriptIdLSB === "number")
                    message.scriptIdLSB = object.scriptIdLSB;
                else if (typeof object.scriptIdLSB === "object")
                    message.scriptIdLSB = new $util.LongBits(object.scriptIdLSB.low >>> 0, object.scriptIdLSB.high >>> 0).toNumber();
            if (object.functionName != null)
                message.functionName = String(object.functionName);
            if (object.scriptBody != null)
                message.scriptBody = String(object.scriptBody);
            if (object.timeout != null)
                message.timeout = object.timeout | 0;
            if (object.args) {
                if (!Array.isArray(object.args))
                    throw TypeError(".js.JsInvokeRequest.args: array expected");
                message.args = [];
                for (var i = 0; i < object.args.length; ++i)
                    message.args[i] = String(object.args[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a JsInvokeRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof js.JsInvokeRequest
         * @static
         * @param {js.JsInvokeRequest} message JsInvokeRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JsInvokeRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.args = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.scriptIdMSB = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.scriptIdMSB = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.scriptIdLSB = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.scriptIdLSB = options.longs === String ? "0" : 0;
                object.functionName = "";
                object.scriptBody = "";
                object.timeout = 0;
            }
            if (message.scriptIdMSB != null && message.hasOwnProperty("scriptIdMSB"))
                if (typeof message.scriptIdMSB === "number")
                    object.scriptIdMSB = options.longs === String ? String(message.scriptIdMSB) : message.scriptIdMSB;
                else
                    object.scriptIdMSB = options.longs === String ? $util.Long.prototype.toString.call(message.scriptIdMSB) : options.longs === Number ? new $util.LongBits(message.scriptIdMSB.low >>> 0, message.scriptIdMSB.high >>> 0).toNumber() : message.scriptIdMSB;
            if (message.scriptIdLSB != null && message.hasOwnProperty("scriptIdLSB"))
                if (typeof message.scriptIdLSB === "number")
                    object.scriptIdLSB = options.longs === String ? String(message.scriptIdLSB) : message.scriptIdLSB;
                else
                    object.scriptIdLSB = options.longs === String ? $util.Long.prototype.toString.call(message.scriptIdLSB) : options.longs === Number ? new $util.LongBits(message.scriptIdLSB.low >>> 0, message.scriptIdLSB.high >>> 0).toNumber() : message.scriptIdLSB;
            if (message.functionName != null && message.hasOwnProperty("functionName"))
                object.functionName = message.functionName;
            if (message.scriptBody != null && message.hasOwnProperty("scriptBody"))
                object.scriptBody = message.scriptBody;
            if (message.timeout != null && message.hasOwnProperty("timeout"))
                object.timeout = message.timeout;
            if (message.args && message.args.length) {
                object.args = [];
                for (var j = 0; j < message.args.length; ++j)
                    object.args[j] = message.args[j];
            }
            return object;
        };

        /**
         * Converts this JsInvokeRequest to JSON.
         * @function toJSON
         * @memberof js.JsInvokeRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JsInvokeRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JsInvokeRequest;
    })();

    js.JsInvokeResponse = (function() {

        /**
         * Properties of a JsInvokeResponse.
         * @memberof js
         * @interface IJsInvokeResponse
         * @property {boolean|null} [success] JsInvokeResponse success
         * @property {string|null} [result] JsInvokeResponse result
         * @property {js.JsInvokeErrorCode|null} [errorCode] JsInvokeResponse errorCode
         * @property {string|null} [errorDetails] JsInvokeResponse errorDetails
         */

        /**
         * Constructs a new JsInvokeResponse.
         * @memberof js
         * @classdesc Represents a JsInvokeResponse.
         * @implements IJsInvokeResponse
         * @constructor
         * @param {js.IJsInvokeResponse=} [properties] Properties to set
         */
        function JsInvokeResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JsInvokeResponse success.
         * @member {boolean} success
         * @memberof js.JsInvokeResponse
         * @instance
         */
        JsInvokeResponse.prototype.success = false;

        /**
         * JsInvokeResponse result.
         * @member {string} result
         * @memberof js.JsInvokeResponse
         * @instance
         */
        JsInvokeResponse.prototype.result = "";

        /**
         * JsInvokeResponse errorCode.
         * @member {js.JsInvokeErrorCode} errorCode
         * @memberof js.JsInvokeResponse
         * @instance
         */
        JsInvokeResponse.prototype.errorCode = 0;

        /**
         * JsInvokeResponse errorDetails.
         * @member {string} errorDetails
         * @memberof js.JsInvokeResponse
         * @instance
         */
        JsInvokeResponse.prototype.errorDetails = "";

        /**
         * Creates a new JsInvokeResponse instance using the specified properties.
         * @function create
         * @memberof js.JsInvokeResponse
         * @static
         * @param {js.IJsInvokeResponse=} [properties] Properties to set
         * @returns {js.JsInvokeResponse} JsInvokeResponse instance
         */
        JsInvokeResponse.create = function create(properties) {
            return new JsInvokeResponse(properties);
        };

        /**
         * Encodes the specified JsInvokeResponse message. Does not implicitly {@link js.JsInvokeResponse.verify|verify} messages.
         * @function encode
         * @memberof js.JsInvokeResponse
         * @static
         * @param {js.IJsInvokeResponse} message JsInvokeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JsInvokeResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.success != null && message.hasOwnProperty("success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            if (message.result != null && message.hasOwnProperty("result"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.result);
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.errorCode);
            if (message.errorDetails != null && message.hasOwnProperty("errorDetails"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.errorDetails);
            return writer;
        };

        /**
         * Encodes the specified JsInvokeResponse message, length delimited. Does not implicitly {@link js.JsInvokeResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof js.JsInvokeResponse
         * @static
         * @param {js.IJsInvokeResponse} message JsInvokeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JsInvokeResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JsInvokeResponse message from the specified reader or buffer.
         * @function decode
         * @memberof js.JsInvokeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {js.JsInvokeResponse} JsInvokeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JsInvokeResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.js.JsInvokeResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.success = reader.bool();
                    break;
                case 2:
                    message.result = reader.string();
                    break;
                case 3:
                    message.errorCode = reader.int32();
                    break;
                case 4:
                    message.errorDetails = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JsInvokeResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof js.JsInvokeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {js.JsInvokeResponse} JsInvokeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JsInvokeResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JsInvokeResponse message.
         * @function verify
         * @memberof js.JsInvokeResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JsInvokeResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isString(message.result))
                    return "result: string expected";
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                switch (message.errorCode) {
                default:
                    return "errorCode: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.errorDetails != null && message.hasOwnProperty("errorDetails"))
                if (!$util.isString(message.errorDetails))
                    return "errorDetails: string expected";
            return null;
        };

        /**
         * Creates a JsInvokeResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof js.JsInvokeResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {js.JsInvokeResponse} JsInvokeResponse
         */
        JsInvokeResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.js.JsInvokeResponse)
                return object;
            var message = new $root.js.JsInvokeResponse();
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.result != null)
                message.result = String(object.result);
            switch (object.errorCode) {
            case "COMPILATION_ERROR":
            case 0:
                message.errorCode = 0;
                break;
            case "RUNTIME_ERROR":
            case 1:
                message.errorCode = 1;
                break;
            case "TIMEOUT_ERROR":
            case 2:
                message.errorCode = 2;
                break;
            }
            if (object.errorDetails != null)
                message.errorDetails = String(object.errorDetails);
            return message;
        };

        /**
         * Creates a plain object from a JsInvokeResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof js.JsInvokeResponse
         * @static
         * @param {js.JsInvokeResponse} message JsInvokeResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JsInvokeResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.success = false;
                object.result = "";
                object.errorCode = options.enums === String ? "COMPILATION_ERROR" : 0;
                object.errorDetails = "";
            }
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                object.errorCode = options.enums === String ? $root.js.JsInvokeErrorCode[message.errorCode] : message.errorCode;
            if (message.errorDetails != null && message.hasOwnProperty("errorDetails"))
                object.errorDetails = message.errorDetails;
            return object;
        };

        /**
         * Converts this JsInvokeResponse to JSON.
         * @function toJSON
         * @memberof js.JsInvokeResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JsInvokeResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JsInvokeResponse;
    })();

    return js;
})();

module.exports = $root;
