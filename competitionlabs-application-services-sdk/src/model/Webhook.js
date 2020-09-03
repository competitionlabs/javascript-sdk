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
import Metadata from './Metadata';
import ModelDefault from './ModelDefault';
import WebhookAllOf from './WebhookAllOf';

/**
 * The Webhook model module.
 * @module model/Webhook
 * @version 1.0.5
 */
class Webhook {
    /**
     * Constructs a new <code>Webhook</code>.
     * @alias module:model/Webhook
     * @implements module:model/ModelDefault
     * @implements module:model/WebhookAllOf
     * @param id {String} A unique system generated identifier
     * @param spaceName {String} This is the space name which is linked to the account
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     * @param postToUrl {String} A URL to post the webhook to
     * @param triggers {Array.<String>} A list of event triggers
     */
    constructor(id, spaceName, created, postToUrl, triggers) { 
        ModelDefault.initialize(this, id, spaceName, created);WebhookAllOf.initialize(this, postToUrl, triggers);
        Webhook.initialize(this, id, spaceName, created, postToUrl, triggers);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, spaceName, created, postToUrl, triggers) { 
        obj['id'] = id;
        obj['spaceName'] = spaceName;
        obj['created'] = created;
        obj['postToUrl'] = postToUrl;
        obj['triggers'] = triggers;
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['id'] = null;
        obj['spaceName'] = null;
        obj['created'] = null;
        obj['postToUrl'] = null;
        obj['triggers'] = [null];
        obj['description'] = null;
        obj['headers'] = [new Metadata().model()];
        obj['transformerId'] = null;
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

        obj["fields"]['id'] = { "type": 'String', "system": true };
        obj["fields"]['spaceName'] = { "type": 'String', "system": true };
        obj["fields"]['created'] = { "type": 'Date', "system": true };
        obj["fields"]['postToUrl'] = { "type": 'String', "system": false };
        obj["fields"]['triggers'] = [{ "type": 'String', "system": false }];
        obj["fields"]['description'] = { "type": 'String', "system": false };
        obj["fields"]['headers'] = [new Metadata().modelMap()];
        obj["fields"]['transformerId'] = { "type": 'String', "system": false };
        obj["fields"]['metadata'] = [new Metadata().modelMap()];

        
        obj["requiredFields"]['id'] = { "type": 'String', "system": true };
        obj["requiredFields"]['spaceName'] = { "type": 'String', "system": true };
        obj["requiredFields"]['created'] = { "type": 'Date', "system": true };
        obj["requiredFields"]['postToUrl'] = { "type": 'String', "system": false };
        obj["requiredFields"]['triggers'] = [{ "type": 'String', "system": false }];

        return obj;
    }

    /**
     * Constructs a <code>Webhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Webhook} obj Optional instance to populate.
     * @return {module:model/Webhook} The populated <code>Webhook</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Webhook();
            ModelDefault.constructFromObject(data, obj);
            WebhookAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('spaceName')) {
                obj['spaceName'] = ApiClient.convertToType(data['spaceName'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('postToUrl')) {
                obj['postToUrl'] = ApiClient.convertToType(data['postToUrl'], 'String');
            }
            if (data.hasOwnProperty('triggers')) {
                obj['triggers'] = ApiClient.convertToType(data['triggers'], ['String']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('headers')) {
                obj['headers'] = ApiClient.convertToType(data['headers'], [Metadata]);
            }
            if (data.hasOwnProperty('transformerId')) {
                obj['transformerId'] = ApiClient.convertToType(data['transformerId'], 'String');
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
Webhook.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
Webhook.prototype['spaceName'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
Webhook.prototype['created'] = undefined;

/**
 * A URL to post the webhook to
 * @member {String} postToUrl
 */
Webhook.prototype['postToUrl'] = undefined;

/**
 * A list of event triggers
 * @member {Array.<String>} triggers
 */
Webhook.prototype['triggers'] = undefined;

/**
 * The description of a Webhook
 * @member {String} description
 */
Webhook.prototype['description'] = undefined;

/**
 * @member {Array.<module:model/Metadata>} headers
 */
Webhook.prototype['headers'] = undefined;

/**
 * The identifier of the transformer
 * @member {String} transformerId
 */
Webhook.prototype['transformerId'] = undefined;

/**
 * @member {Array.<module:model/Metadata>} metadata
 */
Webhook.prototype['metadata'] = undefined;


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
// Implement WebhookAllOf interface:
/**
 * A URL to post the webhook to
 * @member {String} postToUrl
 */
WebhookAllOf.prototype['postToUrl'] = undefined;
/**
 * A list of event triggers
 * @member {Array.<String>} triggers
 */
WebhookAllOf.prototype['triggers'] = undefined;
/**
 * The description of a Webhook
 * @member {String} description
 */
WebhookAllOf.prototype['description'] = undefined;
/**
 * @member {Array.<module:model/Metadata>} headers
 */
WebhookAllOf.prototype['headers'] = undefined;
/**
 * The identifier of the transformer
 * @member {String} transformerId
 */
WebhookAllOf.prototype['transformerId'] = undefined;
/**
 * @member {Array.<module:model/Metadata>} metadata
 */
WebhookAllOf.prototype['metadata'] = undefined;




export default Webhook;

