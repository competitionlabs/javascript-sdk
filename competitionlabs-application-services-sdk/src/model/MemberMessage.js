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
import EventRefType from './EventRefType';
import MemberMessageAllOf from './MemberMessageAllOf';
import MessageStatus from './MessageStatus';
import MessageType from './MessageType';
import Metadata from './Metadata';
import ModelDefault from './ModelDefault';
import TagsReduced from './TagsReduced';

/**
 * The MemberMessage model module.
 * @module model/MemberMessage
 * @version 3.0.1
 */
class MemberMessage {
    /**
     * Constructs a new <code>MemberMessage</code>.
     * @alias module:model/MemberMessage
     * @implements module:model/ModelDefault
     * @implements module:model/MemberMessageAllOf
     * @param id {String} A unique system generated identifier
     * @param spaceName {String} This is the space name which is linked to the account
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     * @param eventRefType {module:model/EventRefType} 
     * @param eventReferenceId {String} The reference ID of the event object
     * @param messageType {module:model/MessageType} 
     * @param subject {String} The title of the message
     * @param body {String} The context of the message
     * @param prize {String} Unique system identifier of an Award
     * @param status {module:model/MessageStatus} 
     * @param expiry {Date} The time that the message will disappear after. ISO8601 timestamp
     */
    constructor(id, spaceName, created, eventRefType, eventReferenceId, messageType, subject, body, prize, status, expiry) { 
        ModelDefault.initialize(this, id, spaceName, created);MemberMessageAllOf.initialize(this, eventRefType, eventReferenceId, messageType, subject, body, prize, status, expiry);
        MemberMessage.initialize(this, id, spaceName, created, eventRefType, eventReferenceId, messageType, subject, body, prize, status, expiry);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, spaceName, created, eventRefType, eventReferenceId, messageType, subject, body, prize, status, expiry) { 
        obj['id'] = id;
        obj['spaceName'] = spaceName;
        obj['created'] = created;
        obj['eventRefType'] = eventRefType;
        obj['eventReferenceId'] = eventReferenceId;
        obj['messageType'] = messageType;
        obj['subject'] = subject;
        obj['body'] = body;
        obj['prize'] = prize;
        obj['status'] = status;
        obj['expiry'] = expiry;
    }

    /**
     * Constructs a <code>MemberMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MemberMessage} obj Optional instance to populate.
     * @return {module:model/MemberMessage} The populated <code>MemberMessage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MemberMessage();
            ModelDefault.constructFromObject(data, obj);
            MemberMessageAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('spaceName')) {
                obj['spaceName'] = ApiClient.convertToType(data['spaceName'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('eventRefType')) {
                obj['eventRefType'] = EventRefType.constructFromObject(data['eventRefType']);
            }
            if (data.hasOwnProperty('eventReferenceId')) {
                obj['eventReferenceId'] = ApiClient.convertToType(data['eventReferenceId'], 'String');
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
            if (data.hasOwnProperty('prize')) {
                obj['prize'] = ApiClient.convertToType(data['prize'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = MessageStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('expiry')) {
                obj['expiry'] = ApiClient.convertToType(data['expiry'], 'Date');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], [Metadata]);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], [TagsReduced]);
            }
        }
        return obj;
    }


}

/**
 * A unique system generated identifier
 * @member {String} id
 */
MemberMessage.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
MemberMessage.prototype['spaceName'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
MemberMessage.prototype['created'] = undefined;

/**
 * @member {module:model/EventRefType} eventRefType
 */
MemberMessage.prototype['eventRefType'] = undefined;

/**
 * The reference ID of the event object
 * @member {String} eventReferenceId
 */
MemberMessage.prototype['eventReferenceId'] = undefined;

/**
 * @member {module:model/MessageType} messageType
 */
MemberMessage.prototype['messageType'] = undefined;

/**
 * The title of the message
 * @member {String} subject
 */
MemberMessage.prototype['subject'] = undefined;

/**
 * The context of the message
 * @member {String} body
 */
MemberMessage.prototype['body'] = undefined;

/**
 * Unique system identifier of an Award
 * @member {String} prize
 */
MemberMessage.prototype['prize'] = undefined;

/**
 * @member {module:model/MessageStatus} status
 */
MemberMessage.prototype['status'] = undefined;

/**
 * The time that the message will disappear after. ISO8601 timestamp
 * @member {Date} expiry
 */
MemberMessage.prototype['expiry'] = undefined;

/**
 * @member {Array.<module:model/Metadata>} metadata
 */
MemberMessage.prototype['metadata'] = undefined;

/**
 * A list of Strings of groups that the message belongs to.
 * @member {Array.<module:model/TagsReduced>} tags
 */
MemberMessage.prototype['tags'] = undefined;


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
// Implement MemberMessageAllOf interface:
/**
 * @member {module:model/EventRefType} eventRefType
 */
MemberMessageAllOf.prototype['eventRefType'] = undefined;
/**
 * The reference ID of the event object
 * @member {String} eventReferenceId
 */
MemberMessageAllOf.prototype['eventReferenceId'] = undefined;
/**
 * @member {module:model/MessageType} messageType
 */
MemberMessageAllOf.prototype['messageType'] = undefined;
/**
 * The title of the message
 * @member {String} subject
 */
MemberMessageAllOf.prototype['subject'] = undefined;
/**
 * The context of the message
 * @member {String} body
 */
MemberMessageAllOf.prototype['body'] = undefined;
/**
 * Unique system identifier of an Award
 * @member {String} prize
 */
MemberMessageAllOf.prototype['prize'] = undefined;
/**
 * @member {module:model/MessageStatus} status
 */
MemberMessageAllOf.prototype['status'] = undefined;
/**
 * The time that the message will disappear after. ISO8601 timestamp
 * @member {Date} expiry
 */
MemberMessageAllOf.prototype['expiry'] = undefined;
/**
 * @member {Array.<module:model/Metadata>} metadata
 */
MemberMessageAllOf.prototype['metadata'] = undefined;
/**
 * A list of Strings of groups that the message belongs to.
 * @member {Array.<module:model/TagsReduced>} tags
 */
MemberMessageAllOf.prototype['tags'] = undefined;




export default MemberMessage;

