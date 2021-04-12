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
import MessageType from './MessageType';
import Metadata from './Metadata';
import Scheduling from './Scheduling';
import TagsReduced from './TagsReduced';
import TranslationValue from './TranslationValue';
import UpdateMessageRequestAllOf from './UpdateMessageRequestAllOf';
import UpdateModelDefault from './UpdateModelDefault';
import UpdateOptParamModels from './UpdateOptParamModels';

/**
 * The UpdateMessageRequest model module.
 * @module model/UpdateMessageRequest
 * @version 1.0.0
 */
class UpdateMessageRequest {
    /**
     * Constructs a new <code>UpdateMessageRequest</code>.
     * @alias module:model/UpdateMessageRequest
     * @implements module:model/UpdateModelDefault
     * @implements module:model/UpdateOptParamModels
     * @implements module:model/UpdateMessageRequestAllOf
     * @param id {String} A unique system generated identifier
     * @param members {Array.<String>} A list of specified members to which the message will be sent
     * @param messageType {module:model/MessageType} 
     * @param subject {String} The title of the message
     * @param body {String} The context of the message
     * @param scheduling {module:model/Scheduling} 
     * @param constraints {Array.<String>} Additional constraints, if the value is present it means the
     */
    constructor(id, members, messageType, subject, body, scheduling, constraints) { 
        UpdateModelDefault.initialize(this, id);UpdateOptParamModels.initialize(this);UpdateMessageRequestAllOf.initialize(this, members, messageType, subject, body, scheduling, constraints);
        UpdateMessageRequest.initialize(this, id, members, messageType, subject, body, scheduling, constraints);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, members, messageType, subject, body, scheduling, constraints) { 
        obj['id'] = id;
        obj['members'] = members;
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
            if (data.hasOwnProperty('memberGroup')) {
                obj['memberGroup'] = ApiClient.convertToType(data['memberGroup'], [TagsReduced]);
            }
            if (data.hasOwnProperty('members')) {
                obj['members'] = ApiClient.convertToType(data['members'], ['String']);
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
            if (data.hasOwnProperty('scheduling')) {
                obj['scheduling'] = Scheduling.constructFromObject(data['scheduling']);
            }
            if (data.hasOwnProperty('translations')) {
                obj['translations'] = ApiClient.convertToType(data['translations'], [Object]);
            }
            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
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
 * To which member groups the message will be sent
 * @member {Array.<module:model/TagsReduced>} memberGroup
 */
UpdateMessageRequest.prototype['memberGroup'] = undefined;

/**
 * A list of specified members to which the message will be sent
 * @member {Array.<String>} members
 */
UpdateMessageRequest.prototype['members'] = undefined;

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
 * @member {module:model/Scheduling} scheduling
 */
UpdateMessageRequest.prototype['scheduling'] = undefined;

/**
 * @member {Array.<Object.<String, module:model/TranslationValue>>} translations
 */
UpdateMessageRequest.prototype['translations'] = undefined;

/**
 * Additional constraints, if the value is present it means the
 * @member {Array.<String>} constraints
 */
UpdateMessageRequest.prototype['constraints'] = undefined;


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
 * To which member groups the message will be sent
 * @member {Array.<module:model/TagsReduced>} memberGroup
 */
UpdateMessageRequestAllOf.prototype['memberGroup'] = undefined;
/**
 * A list of specified members to which the message will be sent
 * @member {Array.<String>} members
 */
UpdateMessageRequestAllOf.prototype['members'] = undefined;
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
 * @member {module:model/Scheduling} scheduling
 */
UpdateMessageRequestAllOf.prototype['scheduling'] = undefined;
/**
 * @member {Array.<Object.<String, module:model/TranslationValue>>} translations
 */
UpdateMessageRequestAllOf.prototype['translations'] = undefined;
/**
 * Additional constraints, if the value is present it means the
 * @member {Array.<String>} constraints
 */
UpdateMessageRequestAllOf.prototype['constraints'] = undefined;




export default UpdateMessageRequest;

