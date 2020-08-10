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
import MessagStatus from './MessagStatus';
import MessageAllOf from './MessageAllOf';
import MessageType from './MessageType';
import Metadata from './Metadata';
import ModelDefault from './ModelDefault';
import Scheduling from './Scheduling';

/**
 * The Message model module.
 * @module model/Message
 * @version 1.0.0
 */
class Message {
    /**
     * Constructs a new <code>Message</code>.
     * @alias module:model/Message
     * @implements module:model/ModelDefault
     * @implements module:model/MessageAllOf
     * @param id {String} A unique system generated identifier
     * @param spaceName {String} This is the space name which is linked to the account
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     * @param members {Array.<String>} A list of specified members to which the message will be sent
     * @param messageType {module:model/MessageType} 
     * @param subject {String} The title of the message
     * @param body {String} The context of the message
     * @param status {module:model/MessagStatus} 
     * @param scheduling {module:model/Scheduling} 
     * @param deprecated {Boolean} A boolean value (true/false) that represents the message state
     */
    constructor(id, spaceName, created, members, messageType, subject, body, status, scheduling, deprecated) { 
        ModelDefault.initialize(this, id, spaceName, created);MessageAllOf.initialize(this, members, messageType, subject, body, status, scheduling, deprecated);
        Message.initialize(this, id, spaceName, created, members, messageType, subject, body, status, scheduling, deprecated);
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['id'] = null;
        obj['spaceName'] = null;
        obj['created'] = null;
        obj['memberGroup'] = [null];
        obj['members'] = [null];
        obj['messageType'] = new MessageType().model();
        obj['subject'] = null;
        obj['body'] = null;
        obj['status'] = new MessagStatus().model();
        obj['scheduling'] = new Scheduling().model();
        obj['deprecated'] = null;
        obj['metadata'] = [new Metadata().model()];

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
        obj["fields"]['memberGroup'] = [{ "type": 'String' }];
        obj["fields"]['members'] = [{ "type": 'String' }];
        obj["fields"]['messageType'] = new MessageType().modelMap();
        obj["fields"]['subject'] = { "type": 'String' };
        obj["fields"]['body'] = { "type": 'String' };
        obj["fields"]['status'] = new MessagStatus().modelMap();
        obj["fields"]['scheduling'] = new Scheduling().modelMap();
        obj["fields"]['deprecated'] = { "type": 'Boolean' };
        obj["fields"]['metadata'] = [new Metadata().modelMap()];

        
        obj["requiredFields"]['id'] = { "type": 'String' };
        obj["requiredFields"]['spaceName'] = { "type": 'String' };
        obj["requiredFields"]['created'] = { "type": 'Date' };
        obj["requiredFields"]['members'] = [{ "type": 'String' }];
        obj["requiredFields"]['messageType'] = new MessageType().modelMap();
        obj["requiredFields"]['subject'] = { "type": 'String' };
        obj["requiredFields"]['body'] = { "type": 'String' };
        obj["requiredFields"]['status'] = new MessagStatus().modelMap();
        obj["requiredFields"]['scheduling'] = new Scheduling().modelMap();
        obj["requiredFields"]['deprecated'] = { "type": 'Boolean' };

        return obj;
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, spaceName, created, members, messageType, subject, body, status, scheduling, deprecated) { 
        obj['id'] = id;
        obj['spaceName'] = spaceName;
        obj['created'] = created;
        obj['members'] = members;
        obj['messageType'] = messageType;
        obj['subject'] = subject;
        obj['body'] = body;
        obj['status'] = status;
        obj['scheduling'] = scheduling;
        obj['deprecated'] = deprecated;
    }

    /**
     * Constructs a <code>Message</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Message} obj Optional instance to populate.
     * @return {module:model/Message} The populated <code>Message</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Message();
            ModelDefault.constructFromObject(data, obj);
            MessageAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('spaceName')) {
                obj['spaceName'] = ApiClient.convertToType(data['spaceName'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('memberGroup')) {
                obj['memberGroup'] = ApiClient.convertToType(data['memberGroup'], ['String']);
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
            if (data.hasOwnProperty('status')) {
                obj['status'] = MessagStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('scheduling')) {
                obj['scheduling'] = Scheduling.constructFromObject(data['scheduling']);
            }
            if (data.hasOwnProperty('deprecated')) {
                obj['deprecated'] = ApiClient.convertToType(data['deprecated'], 'Boolean');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], [Metadata]);
            }
        }
        return obj;
    }


}

/**
 * A unique system generated identifier
 * @member {String} id
 */
Message.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
Message.prototype['spaceName'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
Message.prototype['created'] = undefined;

/**
 * To which member groups the message will be sent
 * @member {Array.<String>} memberGroup
 */
Message.prototype['memberGroup'] = undefined;

/**
 * A list of specified members to which the message will be sent
 * @member {Array.<String>} members
 */
Message.prototype['members'] = undefined;

/**
 * @member {module:model/MessageType} messageType
 */
Message.prototype['messageType'] = undefined;

/**
 * The title of the message
 * @member {String} subject
 */
Message.prototype['subject'] = undefined;

/**
 * The context of the message
 * @member {String} body
 */
Message.prototype['body'] = undefined;

/**
 * @member {module:model/MessagStatus} status
 */
Message.prototype['status'] = undefined;

/**
 * @member {module:model/Scheduling} scheduling
 */
Message.prototype['scheduling'] = undefined;

/**
 * A boolean value (true/false) that represents the message state
 * @member {Boolean} deprecated
 * @default false
 */
Message.prototype['deprecated'] = false;

/**
 * @member {Array.<module:model/Metadata>} metadata
 */
Message.prototype['metadata'] = undefined;


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
// Implement MessageAllOf interface:
/**
 * To which member groups the message will be sent
 * @member {Array.<String>} memberGroup
 */
MessageAllOf.prototype['memberGroup'] = undefined;
/**
 * A list of specified members to which the message will be sent
 * @member {Array.<String>} members
 */
MessageAllOf.prototype['members'] = undefined;
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
 * @member {module:model/MessagStatus} status
 */
MessageAllOf.prototype['status'] = undefined;
/**
 * @member {module:model/Scheduling} scheduling
 */
MessageAllOf.prototype['scheduling'] = undefined;
/**
 * A boolean value (true/false) that represents the message state
 * @member {Boolean} deprecated
 * @default false
 */
MessageAllOf.prototype['deprecated'] = false;
/**
 * @member {Array.<module:model/Metadata>} metadata
 */
MessageAllOf.prototype['metadata'] = undefined;




export default Message;

