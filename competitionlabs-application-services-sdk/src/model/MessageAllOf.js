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
import Dependancy from './Dependancy';
import MessageStatus from './MessageStatus';
import MessageType from './MessageType';
import Reward from './Reward';
import Scheduling from './Scheduling';
import TranslationValue from './TranslationValue';

/**
 * The MessageAllOf model module.
 * @module model/MessageAllOf
 * @version 3.0.1
 */
class MessageAllOf {
    /**
     * Constructs a new <code>MessageAllOf</code>.
     * @alias module:model/MessageAllOf
     * @param messageType {module:model/MessageType} 
     * @param subject {String} The title of the message
     * @param body {String} The context of the message
     * @param status {module:model/MessageStatus} 
     * @param scheduling {module:model/Scheduling} 
     * @param constraints {Array.<String>} Additional constraints, if the value is present it means the
     */
    constructor(messageType, subject, body, status, scheduling, constraints) { 
        
        MessageAllOf.initialize(this, messageType, subject, body, status, scheduling, constraints);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, messageType, subject, body, status, scheduling, constraints) { 
        obj['messageType'] = messageType;
        obj['subject'] = subject;
        obj['body'] = body;
        obj['status'] = status;
        obj['scheduling'] = scheduling;
        obj['constraints'] = constraints;
    }

    /**
     * Constructs a <code>MessageAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MessageAllOf} obj Optional instance to populate.
     * @return {module:model/MessageAllOf} The populated <code>MessageAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MessageAllOf();

            if (data.hasOwnProperty('dependantOn')) {
                obj['dependantOn'] = ApiClient.convertToType(data['dependantOn'], [Dependancy]);
            }
            if (data.hasOwnProperty('messageType')) {
                obj['messageType'] = MessageType.constructFromObject(data['messageType']);
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = MessageStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('scheduling')) {
                obj['scheduling'] = Scheduling.constructFromObject(data['scheduling']);
            }
            if (data.hasOwnProperty('translations')) {
                obj['translations'] = ApiClient.convertToType(data['translations'], [Object]);
            }
            if (data.hasOwnProperty('translatableFields')) {
                obj['translatableFields'] = ApiClient.convertToType(data['translatableFields'], ['String']);
            }
            if (data.hasOwnProperty('prize')) {
                obj['prize'] = Reward.constructFromObject(data['prize']);
            }
            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
            }
            if (data.hasOwnProperty('eventReferenceId')) {
                obj['eventReferenceId'] = ApiClient.convertToType(data['eventReferenceId'], 'String');
            }
            if (data.hasOwnProperty('eventRefType')) {
                obj['eventRefType'] = ApiClient.convertToType(data['eventRefType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Dependancy>} dependantOn
 */
MessageAllOf.prototype['dependantOn'] = undefined;

/**
 * @member {module:model/MessageType} messageType
 */
MessageAllOf.prototype['messageType'] = undefined;

/**
 * The title of the message
 * @member {String} subject
 */
MessageAllOf.prototype['subject'] = undefined;

/**
 * The context of the message
 * @member {String} body
 */
MessageAllOf.prototype['body'] = undefined;

/**
 * @member {module:model/MessageStatus} status
 */
MessageAllOf.prototype['status'] = undefined;

/**
 * @member {module:model/Scheduling} scheduling
 */
MessageAllOf.prototype['scheduling'] = undefined;

/**
 * @member {Array.<Object.<String, module:model/TranslationValue>>} translations
 */
MessageAllOf.prototype['translations'] = undefined;

/**
 * Message translatable fields
 * @member {Array.<String>} translatableFields
 */
MessageAllOf.prototype['translatableFields'] = undefined;

/**
 * @member {module:model/Reward} prize
 */
MessageAllOf.prototype['prize'] = undefined;

/**
 * Additional constraints, if the value is present it means the
 * @member {Array.<String>} constraints
 */
MessageAllOf.prototype['constraints'] = undefined;

/**
 * @member {String} eventReferenceId
 */
MessageAllOf.prototype['eventReferenceId'] = undefined;

/**
 * @member {String} eventRefType
 */
MessageAllOf.prototype['eventRefType'] = undefined;






export default MessageAllOf;

