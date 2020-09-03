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
 * The CreateAttachmentRequest model module.
 * @module model/CreateAttachmentRequest
 * @version 1.0.0
 */
class CreateAttachmentRequest {
    /**
     * Constructs a new <code>CreateAttachmentRequest</code>.
     * @alias module:model/CreateAttachmentRequest
     * @param fileName {String} Name of the original file uploaded
     * @param mimeType {String} Mime type of the file. Valid mime types - text/csv or application/vmd.ms-excel
     * @param extension {String} Extension of the file uploaded. Valid extensions supported - csv, xlsx, xls
     */
    constructor(fileName, mimeType, extension) { 
        
        CreateAttachmentRequest.initialize(this, fileName, mimeType, extension);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fileName, mimeType, extension) { 
        obj['fileName'] = fileName;
        obj['mimeType'] = mimeType;
        obj['extension'] = extension;
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['fileName'];
        obj['mimeType'];
        obj['extension'];
        obj['permission'];
        obj['metadata'];

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

        obj["fields"]['fileName'];
        obj["fields"]['mimeType'];
        obj["fields"]['extension'];
        obj["fields"]['permission'];
        obj["fields"]['metadata'];

        
        obj["requiredFields"]['fileName'];
        obj["requiredFields"]['mimeType'];
        obj["requiredFields"]['extension'];

        return obj;
    }

    /**
     * Constructs a <code>CreateAttachmentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAttachmentRequest} obj Optional instance to populate.
     * @return {module:model/CreateAttachmentRequest} The populated <code>CreateAttachmentRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAttachmentRequest();

            if (data.hasOwnProperty('fileName')) {
                obj['fileName'] = ApiClient.convertToType(data['fileName'], 'String');
            }
            if (data.hasOwnProperty('mimeType')) {
                obj['mimeType'] = ApiClient.convertToType(data['mimeType'], 'String');
            }
            if (data.hasOwnProperty('extension')) {
                obj['extension'] = ApiClient.convertToType(data['extension'], 'String');
            }
            if (data.hasOwnProperty('permission')) {
                obj['permission'] = ApiClient.convertToType(data['permission'], 'Number');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], [Metadata]);
            }
        }
        return obj;
    }


}

/**
 * Name of the original file uploaded
 * @member {String} fileName
 */
CreateAttachmentRequest.prototype['fileName'] = undefined;

/**
 * Mime type of the file. Valid mime types - text/csv or application/vmd.ms-excel
 * @member {String} mimeType
 */
CreateAttachmentRequest.prototype['mimeType'] = undefined;

/**
 * Extension of the file uploaded. Valid extensions supported - csv, xlsx, xls
 * @member {String} extension
 */
CreateAttachmentRequest.prototype['extension'] = undefined;

/**
 * @member {Number} permission
 */
CreateAttachmentRequest.prototype['permission'] = undefined;

/**
 * @member {Array.<module:model/Metadata>} metadata
 */
CreateAttachmentRequest.prototype['metadata'] = undefined;






export default CreateAttachmentRequest;

