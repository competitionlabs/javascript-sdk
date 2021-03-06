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
import Metadata from './Metadata';
import Reward from './Reward';
import Scheduling from './Scheduling';
import TranslationValue from './TranslationValue';
import UpdateMessageRequestAllOf from './UpdateMessageRequestAllOf';
import UpdateModelDefault from './UpdateModelDefault';
import UpdateOptParamModels from './UpdateOptParamModels';

/**
 * The UpdateMessageRequest model module.
 * @module model/UpdateMessageRequest
 * @version 3.0.1
 */
class UpdateMessageRequest {
    /**
     * Constructs a new <code>UpdateMessageRequest</code>.
     * @alias module:model/UpdateMessageRequest
     * @implements module:model/UpdateModelDefault
     * @implements module:model/UpdateOptParamModels
     * @implements module:model/UpdateMessageRequestAllOf
     * @param id {String} A unique system generated identifier
     * @param messageType {module:model/MessageType} 
     * @param subject {String} The title of the message
     * @param body {String} The context of the message
     * @param scheduling {module:model/Scheduling} 
     * @param constraints {Array.<String>} Additional constraints, if the value is present it means the
     */
    constructor(id, messageType, subject, body, scheduling, constraints) { 
        UpdateModelDefault.initialize(this, id);UpdateOptParamModels.initialize(this);UpdateMessageRequestAllOf.initialize(this, messageType, subject, body, scheduling, constraints);
        UpdateMessageRequest.initialize(this, id, messageType, subject, body, scheduling, constraints);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, messageType, subject, body, scheduling, constraints) { 
        obj['id'] = id;
        obj['messageType'] = messageType;
        obj['subject'] = subject;
        obj['body'] = body;
        obj['scheduling'] = scheduling;
        obj['constraints'] = constraints;
    }

    /**
     * Constructs a <code>UpdateMessageRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateMessageRequest} obj Optional instance to populate.
     * @return {module:model/UpdateMessageRequest} The populated <code>UpdateMessageRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateMessageRequest();
            UpdateModelDefault.constructFromObject(data, obj);
            UpdateOptParamModels.constructFromObject(data, obj);
            UpdateMessageRequestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('customFields')) {
                obj['customFields'] = ApiClient.convertToType(data['customFields'], ['String']);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], [Metadata]);
            }
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
 * A unique system generated identifier
 * @member {String} id
 */
UpdateMessageRequest.prototype['id'] = undefined;

/**
 * A list of id's used to add cutom fields
 * @member {Array.<String>} customFields
 */
UpdateMessageRequest.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
UpdateMessageRequest.prototype['tags'] = undefined;

/**
 * @member {Array.<module:model/Metadata>} metadata
 */
UpdateMessageRequest.prototype['metadata'] = undefined;

/**
 * @member {Array.<module:model/Dependancy>} dependantOn
 */
UpdateMessageRequest.prototype['dependantOn'] = undefined;

/**
 * @member {module:model/MessageType} messageType
 */
UpdateMessageRequest.prototype['messageType'] = undefined;

/**
 * The title of the message
 * @member {String} subject
 */
UpdateMessageRequest.prototype['subject'] = undefined;

/**
 * The context of the message
 * @member {String} body
 */
UpdateMessageRequest.prototype['body'] = undefined;

/**
 * @member {module:model/MessageStatus} status
 */
UpdateMessageRequest.prototype['status'] = undefined;

/**
 * @member {module:model/Scheduling} scheduling
 */
UpdateMessageRequest.prototype['scheduling'] = undefined;

/**
 * @member {Array.<Object.<String, module:model/TranslationValue>>} translations
 */
UpdateMessageRequest.prototype['translations'] = undefined;

/**
 * Message translatable fields
 * @member {Array.<String>} translatableFields
 */
UpdateMessageRequest.prototype['translatableFields'] = undefined;

/**
 * @member {module:model/Reward} prize
 */
UpdateMessageRequest.prototype['prize'] = undefined;

/**
 * Additional constraints, if the value is present it means the
 * @member {Array.<String>} constraints
 */
UpdateMessageRequest.prototype['constraints'] = undefined;

/**
 * @member {String} eventReferenceId
 */
UpdateMessageRequest.prototype['eventReferenceId'] = undefined;

/**
 * @member {String} eventRefType
 */
UpdateMessageRequest.prototype['eventRefType'] = undefined;


// Implement UpdateModelDefault interface:
/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateModelDefault.prototype['id'] = undefined;
// Implement UpdateOptParamModels interface:
/**
 * A list of id's used to add cutom fields
 * @member {Array.<String>} customFields
 */
UpdateOptParamModels.prototype['customFields'] = undefined;
/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
UpdateOptParamModels.prototype['tags'] = undefined;
/**
 * @member {Array.<module:model/Metadata>} metadata
 */
UpdateOptParamModels.prototype['metadata'] = undefined;
// Implement UpdateMessageRequestAllOf interface:
/**
 * @member {Array.<module:model/Dependancy>} dependantOn
 */
UpdateMessageRequestAllOf.prototype['dependantOn'] = undefined;
/**
 * @member {module:model/MessageType} messageType
 */
UpdateMessageRequestAllOf.prototype['messageType'] = undefined;
/**
 * The title of the message
 * @member {String} subject
 */
UpdateMessageRequestAllOf.prototype['subject'] = undefined;
/**
 * The context of the message
 * @member {String} body
 */
UpdateMessageRequestAllOf.prototype['body'] = undefined;
/**
 * @member {module:model/MessageStatus} status
 */
UpdateMessageRequestAllOf.prototype['status'] = undefined;
/**
 * @member {module:model/Scheduling} scheduling
 */
UpdateMessageRequestAllOf.prototype['scheduling'] = undefined;
/**
 * @member {Array.<Object.<String, module:model/TranslationValue>>} translations
 */
UpdateMessageRequestAllOf.prototype['translations'] = undefined;
/**
 * Message translatable fields
 * @member {Array.<String>} translatableFields
 */
UpdateMessageRequestAllOf.prototype['translatableFields'] = undefined;
/**
 * @member {module:model/Reward} prize
 */
UpdateMessageRequestAllOf.prototype['prize'] = undefined;
/**
 * Additional constraints, if the value is present it means the
 * @member {Array.<String>} constraints
 */
UpdateMessageRequestAllOf.prototype['constraints'] = undefined;
/**
 * @member {String} eventReferenceId
 */
UpdateMessageRequestAllOf.prototype['eventReferenceId'] = undefined;
/**
 * @member {String} eventRefType
 */
UpdateMessageRequestAllOf.prototype['eventRefType'] = undefined;




export default UpdateMessageRequest;

