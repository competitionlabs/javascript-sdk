/**
 * CompetitionLabs Application Services
 * CompetitionLabs Application Services are used to manage and configure spaces.
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
 * The UpdateKafkaConnectionRequestAllOf model module.
 * @module model/UpdateKafkaConnectionRequestAllOf
 * @version 1.0.0
 */
class UpdateKafkaConnectionRequestAllOf {
    /**
     * Constructs a new <code>UpdateKafkaConnectionRequestAllOf</code>.
     * @alias module:model/UpdateKafkaConnectionRequestAllOf
     * @param name {String} The name of the consumer
     * @param brokers {String} Kafka broker endpoints.
     * @param transformerId {String} The id of the transformer to handle incoming messages
     * @param groupId {String} Group Id for connection
     * @param topic {String} Topic name
     */
    constructor(name, brokers, transformerId, groupId, topic) { 
        
        UpdateKafkaConnectionRequestAllOf.initialize(this, name, brokers, transformerId, groupId, topic);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, brokers, transformerId, groupId, topic) { 
        obj['name'] = name;
        obj['brokers'] = brokers;
        obj['transformerId'] = transformerId;
        obj['groupId'] = groupId;
        obj['topic'] = topic;
    }

    /**
     * Constructs a <code>UpdateKafkaConnectionRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateKafkaConnectionRequestAllOf} obj Optional instance to populate.
     * @return {module:model/UpdateKafkaConnectionRequestAllOf} The populated <code>UpdateKafkaConnectionRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateKafkaConnectionRequestAllOf();

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






export default UpdateKafkaConnectionRequestAllOf;

