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
import Connection from './Connection';
import ModelDefault from './ModelDefault';
import RabbitMqConnectionAllOf from './RabbitMqConnectionAllOf';

/**
 * The RabbitMqConnection model module.
 * @module model/RabbitMqConnection
 * @version 1.0.1
 */
class RabbitMqConnection {
    /**
     * Constructs a new <code>RabbitMqConnection</code>.
     * @alias module:model/RabbitMqConnection
     * @extends module:model/Connection
     * @implements module:model/Connection
     * @implements module:model/ModelDefault
     * @implements module:model/RabbitMqConnectionAllOf
     * @param id {String} A unique system generated identifier
     * @param spaceName {String} This is the space name which is linked to the account
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     * @param objectType {String} The type of consumer to create
     * @param name {String} The name of the consumer
     * @param uri {String} The SQS endpoint.
     * @param virtualHost {String} The virtual host of the rabbitmq broker
     * @param port {Number} The port number on which consumer will connect on rabbitmq broker
     * @param useSsl {Boolean} Whether the connection is SSL enabled or not
     * @param username {String} Consumer username for authentication
     * @param password {String} Consumer password for authentication
     * @param queueName {String} Name of the queue
     * @param lastKnownStatus {String} Last known status of the connection
     * @param lastKnownStatusCode {Number} Status code correspoding to the last known status
     */
    constructor(id, spaceName, created, objectType, name, uri, virtualHost, port, useSsl, username, password, queueName, lastKnownStatus, lastKnownStatusCode) { 
        Connection.initialize(this, id, spaceName, created, objectType);ModelDefault.initialize(this, id, spaceName, created);RabbitMqConnectionAllOf.initialize(this, name, uri, virtualHost, port, useSsl, username, password, queueName, lastKnownStatus, lastKnownStatusCode);
        RabbitMqConnection.initialize(this, id, spaceName, created, objectType, name, uri, virtualHost, port, useSsl, username, password, queueName, lastKnownStatus, lastKnownStatusCode);
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['id'] = null;
        obj['spaceName'] = null;
        obj['created'] = null;
        obj['name'] = null;
        obj['uri'] = null;
        obj['virtualHost'] = null;
        obj['port'] = null;
        obj['useSsl'] = null;
        obj['username'] = null;
        obj['password'] = null;
        obj['queueName'] = null;
        obj['exchange'] = null;
        obj['routingKey'] = null;
        obj['lastKnownStatus'] = null;
        obj['lastKnownStatusCode'] = null;

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

        obj["fields"]['id'] = { "type": 'String' };
        obj["fields"]['spaceName'] = { "type": 'String' };
        obj["fields"]['created'] = { "type": 'Date' };
        obj["fields"]['name'] = { "type": 'String' };
        obj["fields"]['uri'] = { "type": 'String' };
        obj["fields"]['virtualHost'] = { "type": 'String' };
        obj["fields"]['port'] = { "type": 'Number' };
        obj["fields"]['useSsl'] = { "type": 'Boolean' };
        obj["fields"]['username'] = { "type": 'String' };
        obj["fields"]['password'] = { "type": 'String' };
        obj["fields"]['queueName'] = { "type": 'String' };
        obj["fields"]['exchange'] = { "type": 'String' };
        obj["fields"]['routingKey'] = { "type": 'String' };
        obj["fields"]['lastKnownStatus'] = { "type": 'String' };
        obj["fields"]['lastKnownStatusCode'] = { "type": 'Number' };

        
        obj["requiredFields"]['id'] = { "type": 'String' };
        obj["requiredFields"]['spaceName'] = { "type": 'String' };
        obj["requiredFields"]['created'] = { "type": 'Date' };
        obj["requiredFields"]['name'] = { "type": 'String' };
        obj["requiredFields"]['uri'] = { "type": 'String' };
        obj["requiredFields"]['virtualHost'] = { "type": 'String' };
        obj["requiredFields"]['port'] = { "type": 'Number' };
        obj["requiredFields"]['useSsl'] = { "type": 'Boolean' };
        obj["requiredFields"]['username'] = { "type": 'String' };
        obj["requiredFields"]['password'] = { "type": 'String' };
        obj["requiredFields"]['queueName'] = { "type": 'String' };
        obj["requiredFields"]['lastKnownStatus'] = { "type": 'String' };
        obj["requiredFields"]['lastKnownStatusCode'] = { "type": 'Number' };

        return obj;
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, spaceName, created, objectType, name, uri, virtualHost, port, useSsl, username, password, queueName, lastKnownStatus, lastKnownStatusCode) { 
        obj['id'] = id;
        obj['spaceName'] = spaceName;
        obj['created'] = created;
        obj['name'] = name;
        obj['uri'] = uri;
        obj['virtualHost'] = virtualHost;
        obj['port'] = port;
        obj['useSsl'] = useSsl;
        obj['username'] = username;
        obj['password'] = password;
        obj['queueName'] = queueName;
        obj['lastKnownStatus'] = lastKnownStatus;
        obj['lastKnownStatusCode'] = lastKnownStatusCode;
    }

    /**
     * Constructs a <code>RabbitMqConnection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RabbitMqConnection} obj Optional instance to populate.
     * @return {module:model/RabbitMqConnection} The populated <code>RabbitMqConnection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RabbitMqConnection();
            Connection.constructFromObject(data, obj);
            Connection.constructFromObject(data, obj);
            ModelDefault.constructFromObject(data, obj);
            RabbitMqConnectionAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('spaceName')) {
                obj['spaceName'] = ApiClient.convertToType(data['spaceName'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('uri')) {
                obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
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
            if (data.hasOwnProperty('lastKnownStatus')) {
                obj['lastKnownStatus'] = ApiClient.convertToType(data['lastKnownStatus'], 'String');
            }
            if (data.hasOwnProperty('lastKnownStatusCode')) {
                obj['lastKnownStatusCode'] = ApiClient.convertToType(data['lastKnownStatusCode'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * A unique system generated identifier
 * @member {String} id
 */
RabbitMqConnection.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
RabbitMqConnection.prototype['spaceName'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
RabbitMqConnection.prototype['created'] = undefined;

/**
 * The name of the consumer
 * @member {String} name
 */
RabbitMqConnection.prototype['name'] = undefined;

/**
 * The SQS endpoint.
 * @member {String} uri
 */
RabbitMqConnection.prototype['uri'] = undefined;

/**
 * The virtual host of the rabbitmq broker
 * @member {String} virtualHost
 * @default '/'
 */
RabbitMqConnection.prototype['virtualHost'] = '/';

/**
 * The port number on which consumer will connect on rabbitmq broker
 * @member {Number} port
 * @default 5672
 */
RabbitMqConnection.prototype['port'] = 5672;

/**
 * Whether the connection is SSL enabled or not
 * @member {Boolean} useSsl
 */
RabbitMqConnection.prototype['useSsl'] = undefined;

/**
 * Consumer username for authentication
 * @member {String} username
 */
RabbitMqConnection.prototype['username'] = undefined;

/**
 * Consumer password for authentication
 * @member {String} password
 */
RabbitMqConnection.prototype['password'] = undefined;

/**
 * Name of the queue
 * @member {String} queueName
 */
RabbitMqConnection.prototype['queueName'] = undefined;

/**
 * Exchange to connect to
 * @member {String} exchange
 */
RabbitMqConnection.prototype['exchange'] = undefined;

/**
 * Routing key to use
 * @member {String} routingKey
 */
RabbitMqConnection.prototype['routingKey'] = undefined;

/**
 * Last known status of the connection
 * @member {String} lastKnownStatus
 */
RabbitMqConnection.prototype['lastKnownStatus'] = undefined;

/**
 * Status code correspoding to the last known status
 * @member {Number} lastKnownStatusCode
 */
RabbitMqConnection.prototype['lastKnownStatusCode'] = undefined;


// Implement Connection interface:
/**
 * A unique system generated identifier
 * @member {String} id
 */
Connection.prototype['id'] = undefined;
/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
Connection.prototype['spaceName'] = undefined;
/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
Connection.prototype['created'] = undefined;
/**
 * The type of consumer to create
 * @member {String} objectType
 */
Connection.prototype['objectType'] = undefined;
// Implement ModelDefault interface:
/**
 * A unique system generated identifier
 * @member {String} id
 */
ModelDefault.prototype['id'] = undefined;
/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
ModelDefault.prototype['spaceName'] = undefined;
/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
ModelDefault.prototype['created'] = undefined;
// Implement RabbitMqConnectionAllOf interface:
/**
 * The name of the consumer
 * @member {String} name
 */
RabbitMqConnectionAllOf.prototype['name'] = undefined;
/**
 * The SQS endpoint.
 * @member {String} uri
 */
RabbitMqConnectionAllOf.prototype['uri'] = undefined;
/**
 * The virtual host of the rabbitmq broker
 * @member {String} virtualHost
 * @default '/'
 */
RabbitMqConnectionAllOf.prototype['virtualHost'] = '/';
/**
 * The port number on which consumer will connect on rabbitmq broker
 * @member {Number} port
 * @default 5672
 */
RabbitMqConnectionAllOf.prototype['port'] = 5672;
/**
 * Whether the connection is SSL enabled or not
 * @member {Boolean} useSsl
 */
RabbitMqConnectionAllOf.prototype['useSsl'] = undefined;
/**
 * Consumer username for authentication
 * @member {String} username
 */
RabbitMqConnectionAllOf.prototype['username'] = undefined;
/**
 * Consumer password for authentication
 * @member {String} password
 */
RabbitMqConnectionAllOf.prototype['password'] = undefined;
/**
 * Name of the queue
 * @member {String} queueName
 */
RabbitMqConnectionAllOf.prototype['queueName'] = undefined;
/**
 * Exchange to connect to
 * @member {String} exchange
 */
RabbitMqConnectionAllOf.prototype['exchange'] = undefined;
/**
 * Routing key to use
 * @member {String} routingKey
 */
RabbitMqConnectionAllOf.prototype['routingKey'] = undefined;
/**
 * Last known status of the connection
 * @member {String} lastKnownStatus
 */
RabbitMqConnectionAllOf.prototype['lastKnownStatus'] = undefined;
/**
 * Status code correspoding to the last known status
 * @member {Number} lastKnownStatusCode
 */
RabbitMqConnectionAllOf.prototype['lastKnownStatusCode'] = undefined;




export default RabbitMqConnection;

