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
import UpdateConnectionRequest from './UpdateConnectionRequest';
import UpdateKafkaConnectionRequestAllOf from './UpdateKafkaConnectionRequestAllOf';

/**
 * The UpdateKafkaConnectionRequest model module.
 * @module model/UpdateKafkaConnectionRequest
 * @version 1.0.4
 */
class UpdateKafkaConnectionRequest {
    /**
     * Constructs a new <code>UpdateKafkaConnectionRequest</code>.
     * @alias module:model/UpdateKafkaConnectionRequest
     * @implements module:model/UpdateConnectionRequest
     * @implements module:model/UpdateKafkaConnectionRequestAllOf
     * @param id {String} A unique system generated identifier
     * @param objectType {String} The type of consumer to create
     */
    constructor(id, objectType) { 
        UpdateConnectionRequest.initialize(this, id, objectType);UpdateKafkaConnectionRequestAllOf.initialize(this);
        UpdateKafkaConnectionRequest.initialize(this, id, objectType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, objectType) { 
        obj['id'] = id;
        obj['objectType'] = objectType;
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['id'];
        obj['objectType'];
        obj['name'];
        obj['brokers'];
        obj['transformerId'];
        obj['groupId'];
        obj['topic'];

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

        obj["fields"]['id'];
        obj["fields"]['objectType'];
        obj["fields"]['name'];
        obj["fields"]['brokers'];
        obj["fields"]['transformerId'];
        obj["fields"]['groupId'];
        obj["fields"]['topic'];

        
        obj["requiredFields"]['id'];
        obj["requiredFields"]['objectType'];

        return obj;
    }

    /**
     * Constructs a <code>UpdateKafkaConnectionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateKafkaConnectionRequest} obj Optional instance to populate.
     * @return {module:model/UpdateKafkaConnectionRequest} The populated <code>UpdateKafkaConnectionRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateKafkaConnectionRequest();
            UpdateConnectionRequest.constructFromObject(data, obj);
            UpdateKafkaConnectionRequestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
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
 * A unique system generated identifier
 * @member {String} id
 */
UpdateKafkaConnectionRequest.prototype['id'] = undefined;

/**
 * The type of consumer to create
 * @member {String} objectType
 */
UpdateKafkaConnectionRequest.prototype['objectType'] = undefined;

/**
 * The name of the consumer
 * @member {String} name
 */
UpdateKafkaConnectionRequest.prototype['name'] = undefined;

/**
 * Kafka broker endpoints.
 * @member {String} brokers
 */
UpdateKafkaConnectionRequest.prototype['brokers'] = undefined;

/**
 * The id of the transformer to handle incoming messages
 * @member {String} transformerId
 */
UpdateKafkaConnectionRequest.prototype['transformerId'] = undefined;

/**
 * Group Id for connection
 * @member {String} groupId
 */
UpdateKafkaConnectionRequest.prototype['groupId'] = undefined;

/**
 * Topic name
 * @member {String} topic
 */
UpdateKafkaConnectionRequest.prototype['topic'] = undefined;


// Implement UpdateConnectionRequest interface:
/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateConnectionRequest.prototype['id'] = undefined;
/**
 * The type of consumer to create
 * @member {String} objectType
 */
UpdateConnectionRequest.prototype['objectType'] = undefined;
// Implement UpdateKafkaConnectionRequestAllOf interface:
/**
 * The name of the consumer
 * @member {String} name
 */
UpdateKafkaConnectionRequestAllOf.prototype['name'] = undefined;
/**
 * Kafka broker endpoints.
 * @member {String} brokers
 */
UpdateKafkaConnectionRequestAllOf.prototype['brokers'] = undefined;
/**
 * The id of the transformer to handle incoming messages
 * @member {String} transformerId
 */
UpdateKafkaConnectionRequestAllOf.prototype['transformerId'] = undefined;
/**
 * Group Id for connection
 * @member {String} groupId
 */
UpdateKafkaConnectionRequestAllOf.prototype['groupId'] = undefined;
/**
 * Topic name
 * @member {String} topic
 */
UpdateKafkaConnectionRequestAllOf.prototype['topic'] = undefined;




export default UpdateKafkaConnectionRequest;

