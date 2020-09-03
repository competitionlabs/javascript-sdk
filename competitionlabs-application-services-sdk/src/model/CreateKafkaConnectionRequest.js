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
import CreateConnectionRequest from './CreateConnectionRequest';
import CreateKafkaConnectionRequestAllOf from './CreateKafkaConnectionRequestAllOf';

/**
 * The CreateKafkaConnectionRequest model module.
 * @module model/CreateKafkaConnectionRequest
 * @version 1.0.1
 */
class CreateKafkaConnectionRequest {
    /**
     * Constructs a new <code>CreateKafkaConnectionRequest</code>.
     * @alias module:model/CreateKafkaConnectionRequest
     * @implements module:model/CreateConnectionRequest
     * @implements module:model/CreateKafkaConnectionRequestAllOf
     * @param objectType {String} The type of consumer to create like Kafka, RabbitMQ or SQS
     * @param name {String} The name of the consumer
     * @param brokers {String} Kafka broker endpoints.
     * @param transformerId {String} The id of the transformer to handle incoming messages
     * @param groupId {String} Group Id for connection
     * @param topic {String} Topic name
     */
    constructor(objectType, name, brokers, transformerId, groupId, topic) { 
        CreateConnectionRequest.initialize(this, objectType);CreateKafkaConnectionRequestAllOf.initialize(this, name, brokers, transformerId, groupId, topic);
        CreateKafkaConnectionRequest.initialize(this, objectType, name, brokers, transformerId, groupId, topic);
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['objectType'] = null;
        obj['name'] = null;
        obj['brokers'] = null;
        obj['transformerId'] = null;
        obj['groupId'] = null;
        obj['topic'] = null;

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

        obj["fields"]['objectType'] = { "type": 'String', "system": false };
        obj["fields"]['name'] = { "type": 'String', "system": false };
        obj["fields"]['brokers'] = { "type": 'String', "system": false };
        obj["fields"]['transformerId'] = { "type": 'String', "system": false };
        obj["fields"]['groupId'] = { "type": 'String', "system": false };
        obj["fields"]['topic'] = { "type": 'String', "system": false };

        
        obj["requiredFields"]['objectType'] = { "type": 'String', "system": false };
        obj["requiredFields"]['name'] = { "type": 'String', "system": false };
        obj["requiredFields"]['brokers'] = { "type": 'String', "system": false };
        obj["requiredFields"]['transformerId'] = { "type": 'String', "system": false };
        obj["requiredFields"]['groupId'] = { "type": 'String', "system": false };
        obj["requiredFields"]['topic'] = { "type": 'String', "system": false };

        return obj;
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objectType, name, brokers, transformerId, groupId, topic) { 
        obj['objectType'] = objectType;
        obj['name'] = name;
        obj['brokers'] = brokers;
        obj['transformerId'] = transformerId;
        obj['groupId'] = groupId;
        obj['topic'] = topic;
    }

    /**
     * Constructs a <code>CreateKafkaConnectionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateKafkaConnectionRequest} obj Optional instance to populate.
     * @return {module:model/CreateKafkaConnectionRequest} The populated <code>CreateKafkaConnectionRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateKafkaConnectionRequest();
            CreateConnectionRequest.constructFromObject(data, obj);
            CreateKafkaConnectionRequestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('objectType')) {
                obj['objectType'] = ApiClient.convertToType(data['objectType'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('brokers')) {
                obj['brokers'] = ApiClient.convertToType(data['brokers'], 'String');
            }
            if (data.hasOwnProperty('transformerId')) {
                obj['transformerId'] = ApiClient.convertToType(data['transformerId'], 'String');
            }
            if (data.hasOwnProperty('groupId')) {
                obj['groupId'] = ApiClient.convertToType(data['groupId'], 'String');
            }
            if (data.hasOwnProperty('topic')) {
                obj['topic'] = ApiClient.convertToType(data['topic'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The type of consumer to create like Kafka, RabbitMQ or SQS
 * @member {String} objectType
 */
CreateKafkaConnectionRequest.prototype['objectType'] = undefined;

/**
 * The name of the consumer
 * @member {String} name
 */
CreateKafkaConnectionRequest.prototype['name'] = undefined;

/**
 * Kafka broker endpoints.
 * @member {String} brokers
 */
CreateKafkaConnectionRequest.prototype['brokers'] = undefined;

/**
 * The id of the transformer to handle incoming messages
 * @member {String} transformerId
 */
CreateKafkaConnectionRequest.prototype['transformerId'] = undefined;

/**
 * Group Id for connection
 * @member {String} groupId
 */
CreateKafkaConnectionRequest.prototype['groupId'] = undefined;

/**
 * Topic name
 * @member {String} topic
 */
CreateKafkaConnectionRequest.prototype['topic'] = undefined;


// Implement CreateConnectionRequest interface:
/**
 * The type of consumer to create like Kafka, RabbitMQ or SQS
 * @member {String} objectType
 */
CreateConnectionRequest.prototype['objectType'] = undefined;
// Implement CreateKafkaConnectionRequestAllOf interface:
/**
 * The name of the consumer
 * @member {String} name
 */
CreateKafkaConnectionRequestAllOf.prototype['name'] = undefined;
/**
 * Kafka broker endpoints.
 * @member {String} brokers
 */
CreateKafkaConnectionRequestAllOf.prototype['brokers'] = undefined;
/**
 * The id of the transformer to handle incoming messages
 * @member {String} transformerId
 */
CreateKafkaConnectionRequestAllOf.prototype['transformerId'] = undefined;
/**
 * Group Id for connection
 * @member {String} groupId
 */
CreateKafkaConnectionRequestAllOf.prototype['groupId'] = undefined;
/**
 * Topic name
 * @member {String} topic
 */
CreateKafkaConnectionRequestAllOf.prototype['topic'] = undefined;




export default CreateKafkaConnectionRequest;
