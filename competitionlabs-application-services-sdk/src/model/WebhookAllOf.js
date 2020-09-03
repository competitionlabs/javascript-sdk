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

/**
 * The WebhookAllOf model module.
 * @module model/WebhookAllOf
 * @version 1.0.5
 */
class WebhookAllOf {
    /**
     * Constructs a new <code>WebhookAllOf</code>.
     * @alias module:model/WebhookAllOf
     * @param postToUrl {String} A URL to post the webhook to
     * @param triggers {Array.<String>} A list of event triggers
     */
    constructor(postToUrl, triggers) { 
        
        WebhookAllOf.initialize(this, postToUrl, triggers);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, postToUrl, triggers) { 
        obj['postToUrl'] = postToUrl;
        obj['triggers'] = triggers;
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

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

        obj["fields"]['postToUrl'] = { "type": 'String', "system": false };
        obj["fields"]['triggers'] = [{ "type": 'String', "system": false }];
        obj["fields"]['description'] = { "type": 'String', "system": false };
        obj["fields"]['headers'] = [new Metadata().modelMap()];
        obj["fields"]['transformerId'] = { "type": 'String', "system": false };
        obj["fields"]['metadata'] = [new Metadata().modelMap()];

        
        obj["requiredFields"]['postToUrl'] = { "type": 'String', "system": false };
        obj["requiredFields"]['triggers'] = [{ "type": 'String', "system": false }];

        return obj;
    }

    /**
     * Constructs a <code>WebhookAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookAllOf} obj Optional instance to populate.
     * @return {module:model/WebhookAllOf} The populated <code>WebhookAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookAllOf();

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






export default WebhookAllOf;

