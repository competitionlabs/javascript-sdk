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
 * The CreateWebhookRequest model module.
 * @module model/CreateWebhookRequest
 * @version 1.0.5
 */
class CreateWebhookRequest {
    /**
     * Constructs a new <code>CreateWebhookRequest</code>.
     * @alias module:model/CreateWebhookRequest
     * @param postToUrl {String} A URL to post the webhook to
     * @param triggers {Array.<String>} A list of event triggers
     * @param transformerId {String} The identifier of the transformer
     */
    constructor(postToUrl, triggers, transformerId) { 
        
        CreateWebhookRequest.initialize(this, postToUrl, triggers, transformerId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, postToUrl, triggers, transformerId) { 
        obj['postToUrl'] = postToUrl;
        obj['triggers'] = triggers;
        obj['transformerId'] = transformerId;
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
        obj["requiredFields"]['transformerId'] = { "type": 'String', "system": false };

        return obj;
    }

    /**
     * Constructs a <code>CreateWebhookRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateWebhookRequest} obj Optional instance to populate.
     * @return {module:model/CreateWebhookRequest} The populated <code>CreateWebhookRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateWebhookRequest();

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
CreateWebhookRequest.prototype['postToUrl'] = undefined;

/**
 * A list of event triggers
 * @member {Array.<String>} triggers
 */
CreateWebhookRequest.prototype['triggers'] = undefined;

/**
 * The description of a Webhook
 * @member {String} description
 */
CreateWebhookRequest.prototype['description'] = undefined;

/**
 * @member {Array.<module:model/Metadata>} headers
 */
CreateWebhookRequest.prototype['headers'] = undefined;

/**
 * The identifier of the transformer
 * @member {String} transformerId
 */
CreateWebhookRequest.prototype['transformerId'] = undefined;

/**
 * @member {Array.<module:model/Metadata>} metadata
 */
CreateWebhookRequest.prototype['metadata'] = undefined;






export default CreateWebhookRequest;

