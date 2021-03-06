/**
 * CompetitionLabs Admin Services
 * CompetitionLabs Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.1
 * Contact: support@competitionlabs.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CreateConnectionRequest from './CreateConnectionRequest';
import CreateOptParamModels from './CreateOptParamModels';
import CreateRabbitMqConnectionRequestAllOf from './CreateRabbitMqConnectionRequestAllOf';
import Metadata from './Metadata';

/**
 * The CreateRabbitMqConnectionRequest model module.
 * @module model/CreateRabbitMqConnectionRequest
 * @version 3.0.1
 */
class CreateRabbitMqConnectionRequest {
    /**
     * Constructs a new <code>CreateRabbitMqConnectionRequest</code>.
     * @alias module:model/CreateRabbitMqConnectionRequest
     * @extends module:model/CreateConnectionRequest
     * @implements module:model/CreateConnectionRequest
     * @implements module:model/CreateOptParamModels
     * @implements module:model/CreateRabbitMqConnectionRequestAllOf
     * @param objectType {String} The type of consumer to create like Kafka, RabbitMQ or SQS
     * @param name {String} The name of the consumer
     * @param uri {String} The SQS endpoint.
     * @param acessKey {String} The access key of the IAM user
     * @param secretKey {String} The secret key of IAM user
     * @param transformerId {String} The id of the transformer to handle incoming messages
     * @param brokers {String} Kafka broker endpoints.
     * @param groupId {String} Group Id for connection
     * @param topic {String} Topic name
     * @param virtualHost {String} The virtual host of the rabbitmq broker
     * @param port {Number} The port number on which consumer will connect on rabbitmq broker
     * @param userName {String} Consumer username for authentication
     * @param password {String} Consumer password for authentication
     * @param queueName {String} Name of the queue
     * @param constraints {Array.<String>} Additional constraints
     */
    constructor(objectType, name, uri, acessKey, secretKey, transformerId, brokers, groupId, topic, virtualHost, port, userName, password, queueName, constraints) { 
        CreateConnectionRequest.initialize(this, objectType, name, uri, acessKey, secretKey, transformerId, brokers, groupId, topic);CreateOptParamModels.initialize(this);CreateRabbitMqConnectionRequestAllOf.initialize(this, name, uri, transformerId, virtualHost, port, userName, password, queueName, constraints);
        CreateRabbitMqConnectionRequest.initialize(this, objectType, name, uri, acessKey, secretKey, transformerId, brokers, groupId, topic, virtualHost, port, userName, password, queueName, constraints);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objectType, name, uri, acessKey, secretKey, transformerId, brokers, groupId, topic, virtualHost, port, userName, password, queueName, constraints) { 
        obj['name'] = name;
        obj['uri'] = uri;
        obj['transformerId'] = transformerId;
        obj['virtualHost'] = virtualHost;
        obj['port'] = port;
        obj['userName'] = userName;
        obj['password'] = password;
        obj['queueName'] = queueName;
        obj['constraints'] = constraints;
    }

    /**
     * Constructs a <code>CreateRabbitMqConnectionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateRabbitMqConnectionRequest} obj Optional instance to populate.
     * @return {module:model/CreateRabbitMqConnectionRequest} The populated <code>CreateRabbitMqConnectionRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateRabbitMqConnectionRequest();
            CreateConnectionRequest.constructFromObject(data, obj);
            CreateConnectionRequest.constructFromObject(data, obj);
            CreateOptParamModels.constructFromObject(data, obj);
            CreateRabbitMqConnectionRequestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('customFields')) {
                obj['customFields'] = ApiClient.convertToType(data['customFields'], ['String']);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], [Metadata]);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
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
            if (data.hasOwnProperty('userName')) {
                obj['userName'] = ApiClient.convertToType(data['userName'], 'String');
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
            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * A list of id's used to add cutom fields
 * @member {Array.<String>} customFields
 */
CreateRabbitMqConnectionRequest.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
CreateRabbitMqConnectionRequest.prototype['tags'] = undefined;

/**
 * @member {Array.<module:model/Metadata>} metadata
 */
CreateRabbitMqConnectionRequest.prototype['metadata'] = undefined;

/**
 * The name of the consumer
 * @member {String} name
 */
CreateRabbitMqConnectionRequest.prototype['name'] = undefined;

/**
 * The description of the consumer
 * @member {String} description
 */
CreateRabbitMqConnectionRequest.prototype['description'] = undefined;

/**
 * The SQS endpoint.
 * @member {String} uri
 */
CreateRabbitMqConnectionRequest.prototype['uri'] = undefined;

/**
 * The id of the transformer to handle incoming messages
 * @member {String} transformerId
 */
CreateRabbitMqConnectionRequest.prototype['transformerId'] = undefined;

/**
 * The virtual host of the rabbitmq broker
 * @member {String} virtualHost
 */
CreateRabbitMqConnectionRequest.prototype['virtualHost'] = undefined;

/**
 * The port number on which consumer will connect on rabbitmq broker
 * @member {Number} port
 */
CreateRabbitMqConnectionRequest.prototype['port'] = undefined;

/**
 * Consumer username for authentication
 * @member {String} userName
 */
CreateRabbitMqConnectionRequest.prototype['userName'] = undefined;

/**
 * Consumer password for authentication
 * @member {String} password
 */
CreateRabbitMqConnectionRequest.prototype['password'] = undefined;

/**
 * Name of the queue
 * @member {String} queueName
 */
CreateRabbitMqConnectionRequest.prototype['queueName'] = undefined;

/**
 * Exchange to connect to
 * @member {String} exchange
 */
CreateRabbitMqConnectionRequest.prototype['exchange'] = undefined;

/**
 * Routing key to use
 * @member {String} routingKey
 */
CreateRabbitMqConnectionRequest.prototype['routingKey'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
CreateRabbitMqConnectionRequest.prototype['constraints'] = undefined;


// Implement CreateConnectionRequest interface:
/**
 * The type of consumer to create like Kafka, RabbitMQ or SQS
 * @member {String} objectType
 */
CreateConnectionRequest.prototype['objectType'] = undefined;
/**
 * A list of id's used to add cutom fields
 * @member {Array.<String>} customFields
 */
CreateConnectionRequest.prototype['customFields'] = undefined;
/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
CreateConnectionRequest.prototype['tags'] = undefined;
/**
 * @member {Array.<module:model/Metadata>} metadata
 */
CreateConnectionRequest.prototype['metadata'] = undefined;
/**
 * The name of the consumer
 * @member {String} name
 */
CreateConnectionRequest.prototype['name'] = undefined;
/**
 * The SQS endpoint.
 * @member {String} uri
 */
CreateConnectionRequest.prototype['uri'] = undefined;
/**
 * The access key of the IAM user
 * @member {String} acessKey
 */
CreateConnectionRequest.prototype['acessKey'] = undefined;
/**
 * The secret key of IAM user
 * @member {String} secretKey
 */
CreateConnectionRequest.prototype['secretKey'] = undefined;
/**
 * The id of the transformer to handle incoming messages
 * @member {String} transformerId
 */
CreateConnectionRequest.prototype['transformerId'] = undefined;
/**
 * The description of the consumer
 * @member {String} description
 */
CreateConnectionRequest.prototype['description'] = undefined;
/**
 * Kafka broker endpoints.
 * @member {String} brokers
 */
CreateConnectionRequest.prototype['brokers'] = undefined;
/**
 * Group Id for connection
 * @member {String} groupId
 */
CreateConnectionRequest.prototype['groupId'] = undefined;
/**
 * Topic name
 * @member {String} topic
 */
CreateConnectionRequest.prototype['topic'] = undefined;
// Implement CreateOptParamModels interface:
/**
 * A list of id's used to add cutom fields
 * @member {Array.<String>} customFields
 */
CreateOptParamModels.prototype['customFields'] = undefined;
/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
CreateOptParamModels.prototype['tags'] = undefined;
/**
 * @member {Array.<module:model/Metadata>} metadata
 */
CreateOptParamModels.prototype['metadata'] = undefined;
// Implement CreateRabbitMqConnectionRequestAllOf interface:
/**
 * The name of the consumer
 * @member {String} name
 */
CreateRabbitMqConnectionRequestAllOf.prototype['name'] = undefined;
/**
 * The description of the consumer
 * @member {String} description
 */
CreateRabbitMqConnectionRequestAllOf.prototype['description'] = undefined;
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
 */
CreateRabbitMqConnectionRequestAllOf.prototype['virtualHost'] = undefined;
/**
 * The port number on which consumer will connect on rabbitmq broker
 * @member {Number} port
 */
CreateRabbitMqConnectionRequestAllOf.prototype['port'] = undefined;
/**
 * Consumer username for authentication
 * @member {String} userName
 */
CreateRabbitMqConnectionRequestAllOf.prototype['userName'] = undefined;
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
/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
CreateRabbitMqConnectionRequestAllOf.prototype['constraints'] = undefined;




export default CreateRabbitMqConnectionRequest;

