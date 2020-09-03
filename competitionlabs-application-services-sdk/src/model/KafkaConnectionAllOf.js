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
 * The KafkaConnectionAllOf model module.
 * @module model/KafkaConnectionAllOf
 * @version 1.0.5
 */
class KafkaConnectionAllOf {
    /**
     * Constructs a new <code>KafkaConnectionAllOf</code>.
     * @alias module:model/KafkaConnectionAllOf
     * @param name {String} The name of the consumer
     * @param brokers {Array.<String>} Kafka broker endpoints.
     * @param groupId {String} Group Id for connection
     * @param topic {String} Topic name
     * @param lastKnownStatus {String} Last known status of the connection
     * @param lastKnownStatusCode {Number} Status code correspoding to the last known status
     */
    constructor(name, brokers, groupId, topic, lastKnownStatus, lastKnownStatusCode) { 
        
        KafkaConnectionAllOf.initialize(this, name, brokers, groupId, topic, lastKnownStatus, lastKnownStatusCode);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, brokers, groupId, topic, lastKnownStatus, lastKnownStatusCode) { 
        obj['name'] = name;
        obj['brokers'] = brokers;
        obj['groupId'] = groupId;
        obj['topic'] = topic;
        obj['lastKnownStatus'] = lastKnownStatus;
        obj['lastKnownStatusCode'] = lastKnownStatusCode;
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['name'] = null;
        obj['brokers'] = [null];
        obj['groupId'] = null;
        obj['topic'] = null;
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

        obj["fields"]['name'] = { "type": 'String', "system": false };
        obj["fields"]['brokers'] = [{ "type": 'String', "system": false }];
        obj["fields"]['groupId'] = { "type": 'String', "system": false };
        obj["fields"]['topic'] = { "type": 'String', "system": false };
        obj["fields"]['lastKnownStatus'] = { "type": 'String', "system": false };
        obj["fields"]['lastKnownStatusCode'] = { "type": 'Number', "system": false };

        
        obj["requiredFields"]['name'] = { "type": 'String', "system": false };
        obj["requiredFields"]['brokers'] = [{ "type": 'String', "system": false }];
        obj["requiredFields"]['groupId'] = { "type": 'String', "system": false };
        obj["requiredFields"]['topic'] = { "type": 'String', "system": false };
        obj["requiredFields"]['lastKnownStatus'] = { "type": 'String', "system": false };
        obj["requiredFields"]['lastKnownStatusCode'] = { "type": 'Number', "system": false };

        return obj;
    }

    /**
     * Constructs a <code>KafkaConnectionAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KafkaConnectionAllOf} obj Optional instance to populate.
     * @return {module:model/KafkaConnectionAllOf} The populated <code>KafkaConnectionAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KafkaConnectionAllOf();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('brokers')) {
                obj['brokers'] = ApiClient.convertToType(data['brokers'], ['String']);
            }
            if (data.hasOwnProperty('groupId')) {
                obj['groupId'] = ApiClient.convertToType(data['groupId'], 'String');
            }
            if (data.hasOwnProperty('topic')) {
                obj['topic'] = ApiClient.convertToType(data['topic'], 'String');
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
 * The name of the consumer
 * @member {String} name
 */
KafkaConnectionAllOf.prototype['name'] = undefined;

/**
 * Kafka broker endpoints.
 * @member {Array.<String>} brokers
 */
KafkaConnectionAllOf.prototype['brokers'] = undefined;

/**
 * Group Id for connection
 * @member {String} groupId
 */
KafkaConnectionAllOf.prototype['groupId'] = undefined;

/**
 * Topic name
 * @member {String} topic
 */
KafkaConnectionAllOf.prototype['topic'] = undefined;

/**
 * Last known status of the connection
 * @member {String} lastKnownStatus
 */
KafkaConnectionAllOf.prototype['lastKnownStatus'] = undefined;

/**
 * Status code correspoding to the last known status
 * @member {Number} lastKnownStatusCode
 */
KafkaConnectionAllOf.prototype['lastKnownStatusCode'] = undefined;






export default KafkaConnectionAllOf;

