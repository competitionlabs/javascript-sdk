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
 * The ErrorDetail model module.
 * @module model/ErrorDetail
 * @version 1.0.0
 */
class ErrorDetail {
    /**
     * Constructs a new <code>ErrorDetail</code>.
     * @alias module:model/ErrorDetail
     * @param errorCode {Number} A unique system identifier that describes this specific error
     * @param message {String} The error description
     */
    constructor(errorCode, message) { 
        
        ErrorDetail.initialize(this, errorCode, message);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, errorCode, message) { 
        obj['errorCode'] = errorCode;
        obj['message'] = message;
    }

    /**
     * Constructs a <code>ErrorDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErrorDetail} obj Optional instance to populate.
     * @return {module:model/ErrorDetail} The populated <code>ErrorDetail</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ErrorDetail();

            if (data.hasOwnProperty('modelId')) {
                obj['modelId'] = ApiClient.convertToType(data['modelId'], 'String');
            }
            if (data.hasOwnProperty('errorCode')) {
                obj['errorCode'] = ApiClient.convertToType(data['errorCode'], 'Number');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The identifier of the record this error relates to (This value only gets set if the error could relate to more than one object)
 * @member {String} modelId
 */
ErrorDetail.prototype['modelId'] = undefined;

/**
 * A unique system identifier that describes this specific error
 * @member {Number} errorCode
 */
ErrorDetail.prototype['errorCode'] = undefined;

/**
 * The error description
 * @member {String} message
 */
ErrorDetail.prototype['message'] = undefined;






export default ErrorDetail;

