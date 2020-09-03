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
 * The SqsConnectionAllOf model module.
 * @module model/SqsConnectionAllOf
 * @version 1.0.0
 */
class SqsConnectionAllOf {
    /**
     * Constructs a new <code>SqsConnectionAllOf</code>.
     * @alias module:model/SqsConnectionAllOf
     * @param name {String} The type of the consumer
     * @param uri {String} The SQS endpoint.
     * @param acessKey {String} The access key of the IAM user
     * @param lastKnownStatus {String} Last known status of the connection
     * @param lastKnownStatusCode {Number} Status code correspoding to the last known status
     */
    constructor(name, uri, acessKey, lastKnownStatus, lastKnownStatusCode) { 
        
        SqsConnectionAllOf.initialize(this, name, uri, acessKey, lastKnownStatus, lastKnownStatusCode);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, uri, acessKey, lastKnownStatus, lastKnownStatusCode) { 
        obj['name'] = name;
        obj['uri'] = uri;
        obj['acessKey'] = acessKey;
        obj['lastKnownStatus'] = lastKnownStatus;
        obj['lastKnownStatusCode'] = lastKnownStatusCode;
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['name'];
        obj['uri'];
        obj['acessKey'];
        obj['lastKnownStatus'];
        obj['lastKnownStatusCode'];

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

        obj["fields"]['name'];
        obj["fields"]['uri'];
        obj["fields"]['acessKey'];
        obj["fields"]['lastKnownStatus'];
        obj["fields"]['lastKnownStatusCode'];

        
        obj["requiredFields"]['name'];
        obj["requiredFields"]['uri'];
        obj["requiredFields"]['acessKey'];
        obj["requiredFields"]['lastKnownStatus'];
        obj["requiredFields"]['lastKnownStatusCode'];

        return obj;
    }

    /**
     * Constructs a <code>SqsConnectionAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SqsConnectionAllOf} obj Optional instance to populate.
     * @return {module:model/SqsConnectionAllOf} The populated <code>SqsConnectionAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SqsConnectionAllOf();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('uri')) {
                obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
            }
            if (data.hasOwnProperty('acessKey')) {
                obj['acessKey'] = ApiClient.convertToType(data['acessKey'], 'String');
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
 * The type of the consumer
 * @member {String} name
 */
SqsConnectionAllOf.prototype['name'] = undefined;

/**
 * The SQS endpoint.
 * @member {String} uri
 */
SqsConnectionAllOf.prototype['uri'] = undefined;

/**
 * The access key of the IAM user
 * @member {String} acessKey
 */
SqsConnectionAllOf.prototype['acessKey'] = undefined;

/**
 * Last known status of the connection
 * @member {String} lastKnownStatus
 */
SqsConnectionAllOf.prototype['lastKnownStatus'] = undefined;

/**
 * Status code correspoding to the last known status
 * @member {Number} lastKnownStatusCode
 */
SqsConnectionAllOf.prototype['lastKnownStatusCode'] = undefined;






export default SqsConnectionAllOf;

