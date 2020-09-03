/**
 * CompetitionLabs Application Services
 * The services listed below are referred as CompetitionLabs Application Services.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@competitionlabs.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CreateRabbitMqConnectionRequestAllOf model module.
 * @module model/CreateRabbitMqConnectionRequestAllOf
 * @version 1.0.1
 */
class CreateRabbitMqConnectionRequestAllOf {
    /**
     * Constructs a new <code>CreateRabbitMqConnectionRequestAllOf</code>.
     * @alias module:model/CreateRabbitMqConnectionRequestAllOf
     * @param name {String} The name of the consumer
     * @param uri {String} The SQS endpoint.
     * @param transformerId {String} The id of the transformer to handle incoming messages
     * @param virtualHost {String} The virtual host of the rabbitmq broker
     * @param port {Number} The port number on which consumer will connect on rabbitmq broker
     * @param useSsl {Boolean} Whether the connection is SSL enabled or not
     * @param username {String} Consumer username for authentication
     * @param password {String} Consumer password for authentication
     * @param queueName {String} Name of the queue
     */
    constructor(name, uri, transformerId, virtualHost, port, useSsl, username, password, queueName) { 
        
        CreateRabbitMqConnectionRequestAllOf.initialize(this, name, uri, transformerId, virtualHost, port, useSsl, username, password, queueName);
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['name'] = null;
        obj['uri'] = null;
        obj['transformerId'] = null;
        obj['virtualHost'] = null;
        obj['port'] = null;
        obj['useSsl'] = null;
        obj['username'] = null;
        obj['password'] = null;
        obj['queueName'] = null;
        obj['exchange'] = null;
        obj['routingKey'] = null;

        return obj;
    }

    /**
    * Constructs a full object Map for all available fields.
    */
    modelMap(){
        var obj = {
            "fields": {},
            "requiredFields": {}
        };

        obj["fields"]['name'] = { "type": 'String', "system": false };
        obj["fields"]['uri'] = { "type": 'String', "system": false };
        obj["fields"]['transformerId'] = { "type": 'String', "system": false };
        obj["fields"]['virtualHost'] = { "type": 'String', "system": false };
        obj["fields"]['port'] = { "type": 'Number', "system": false };
        obj["fields"]['useSsl'] = { "type": 'Boolean', "system": false };
        obj["fields"]['username'] = { "type": 'String', "system": false };
        obj["fields"]['password'] = { "type": 'String', "system": false };
        obj["fields"]['queueName'] = { "type": 'String', "system": false };
        obj["fields"]['exchange'] = { "type": 'String', "system": false };
        obj["fields"]['routingKey'] = { "type": 'String', "system": false };

        
        obj["requiredFields"]['name'] = { "type": 'String', "system": false };
        obj["requiredFields"]['uri'] = { "type": 'String', "system": false };
        obj["requiredFields"]['transformerId'] = { "type": 'String', "system": false };
        obj["requiredFields"]['virtualHost'] = { "type": 'String', "system": false };
        obj["requiredFields"]['port'] = { "type": 'Number', "system": false };
        obj["requiredFields"]['useSsl'] = { "type": 'Boolean', "system": false };
        obj["requiredFields"]['username'] = { "type": 'String', "system": false };
        obj["requiredFields"]['password'] = { "type": 'String', "system": false };
        obj["requiredFields"]['queueName'] = { "type": 'String', "system": false };

        return obj;
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, uri, transformerId, virtualHost, port, useSsl, username, password, queueName) { 
        obj['name'] = name;
        obj['uri'] = uri;
        obj['transformerId'] = transformerId;
        obj['virtualHost'] = virtualHost;
        obj['port'] = port;
        obj['useSsl'] = useSsl;
        obj['username'] = username;
        obj['password'] = password;
        obj['queueName'] = queueName;
    }

    /**
     * Constructs a <code>CreateRabbitMqConnectionRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateRabbitMqConnectionRequestAllOf} obj Optional instance to populate.
     * @return {module:model/CreateRabbitMqConnectionRequestAllOf} The populated <code>CreateRabbitMqConnectionRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateRabbitMqConnectionRequestAllOf();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('uri')) {
                obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
            }
            if (data.hasOwnProperty('transformerId')) {
                obj['transformerId'] = ApiClient.convertToType(data['transformerId'], 'String');
            }
            if (data.hasOwnProperty('virtualHost')) {
                obj['virtualHost'] = ApiClient.convertToType(data['virtualHost'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'Number');
            }
            if (data.hasOwnProperty('useSsl')) {
                obj['useSsl'] = ApiClient.convertToType(data['useSsl'], 'Boolean');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('queueName')) {
                obj['queueName'] = ApiClient.convertToType(data['queueName'], 'String');
            }
            if (data.hasOwnProperty('exchange')) {
                obj['exchange'] = ApiClient.convertToType(data['exchange'], 'String');
            }
            if (data.hasOwnProperty('routingKey')) {
                obj['routingKey'] = ApiClient.convertToType(data['routingKey'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name of the consumer
 * @member {String} name
 */
CreateRabbitMqConnectionRequestAllOf.prototype['name'] = undefined;

/**
 * The SQS endpoint.
 * @member {String} uri
 */
CreateRabbitMqConnectionRequestAllOf.prototype['uri'] = undefined;

/**
 * The id of the transformer to handle incoming messages
 * @member {String} transformerId
 */
CreateRabbitMqConnectionRequestAllOf.prototype['transformerId'] = undefined;

/**
 * The virtual host of the rabbitmq broker
 * @member {String} virtualHost
 * @default '/'
 */
CreateRabbitMqConnectionRequestAllOf.prototype['virtualHost'] = '/';

/**
 * The port number on which consumer will connect on rabbitmq broker
 * @member {Number} port
 * @default 5672
 */
CreateRabbitMqConnectionRequestAllOf.prototype['port'] = 5672;

/**
 * Whether the connection is SSL enabled or not
 * @member {Boolean} useSsl
 */
CreateRabbitMqConnectionRequestAllOf.prototype['useSsl'] = undefined;

/**
 * Consumer username for authentication
 * @member {String} username
 */
CreateRabbitMqConnectionRequestAllOf.prototype['username'] = undefined;

/**
 * Consumer password for authentication
 * @member {String} password
 */
CreateRabbitMqConnectionRequestAllOf.prototype['password'] = undefined;

/**
 * Name of the queue
 * @member {String} queueName
 */
CreateRabbitMqConnectionRequestAllOf.prototype['queueName'] = undefined;

/**
 * Exchange to connect to
 * @member {String} exchange
 */
CreateRabbitMqConnectionRequestAllOf.prototype['exchange'] = undefined;

/**
 * Routing key to use
 * @member {String} routingKey
 */
CreateRabbitMqConnectionRequestAllOf.prototype['routingKey'] = undefined;






export default CreateRabbitMqConnectionRequestAllOf;
