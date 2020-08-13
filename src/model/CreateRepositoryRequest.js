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
import HostingOptions from './HostingOptions';

/**
 * The CreateRepositoryRequest model module.
 * @module model/CreateRepositoryRequest
 * @version 1.0.1
 */
class CreateRepositoryRequest {
    /**
     * Constructs a new <code>CreateRepositoryRequest</code>.
     * Create a new repository object
     * @alias module:model/CreateRepositoryRequest
     * @param name {String} The name of the repository. No special charaters or spaces permitted
     */
    constructor(name) { 
        
        CreateRepositoryRequest.initialize(this, name);
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['name'] = null;
        obj['description'] = null;
        obj['tags'] = [null];
        obj['constraints'] = [null];
        obj['hostingOptions'] = new HostingOptions().model();

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

        obj["fields"]['name'] = { "type": 'String' };
        obj["fields"]['description'] = { "type": 'String' };
        obj["fields"]['tags'] = [{ "type": 'String' }];
        obj["fields"]['constraints'] = [{ "type": 'String' }];
        obj["fields"]['hostingOptions'] = new HostingOptions().modelMap();

        
        obj["requiredFields"]['name'] = { "type": 'String' };

        return obj;
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>CreateRepositoryRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateRepositoryRequest} obj Optional instance to populate.
     * @return {module:model/CreateRepositoryRequest} The populated <code>CreateRepositoryRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateRepositoryRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
            }
            if (data.hasOwnProperty('hostingOptions')) {
                obj['hostingOptions'] = HostingOptions.constructFromObject(data['hostingOptions']);
            }
        }
        return obj;
    }


}

/**
 * The name of the repository. No special charaters or spaces permitted
 * @member {String} name
 */
CreateRepositoryRequest.prototype['name'] = undefined;

/**
 * The description of the repository
 * @member {String} description
 */
CreateRepositoryRequest.prototype['description'] = undefined;

/**
 * The tags used to categorize the repository
 * @member {Array.<String>} tags
 */
CreateRepositoryRequest.prototype['tags'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
CreateRepositoryRequest.prototype['constraints'] = undefined;

/**
 * @member {module:model/HostingOptions} hostingOptions
 */
CreateRepositoryRequest.prototype['hostingOptions'] = undefined;






export default CreateRepositoryRequest;

