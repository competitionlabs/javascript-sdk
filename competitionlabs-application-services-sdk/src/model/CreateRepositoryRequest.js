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
import Metadata from './Metadata';

/**
 * The CreateRepositoryRequest model module.
 * @module model/CreateRepositoryRequest
 * @version 1.0.5
 */
class CreateRepositoryRequest {
    /**
     * Constructs a new <code>CreateRepositoryRequest</code>.
     * Create a new repository object
     * @alias module:model/CreateRepositoryRequest
     * @param name {String} The name of the repository. No special charaters or spaces permitted
     * @param tags {Array.<String>} The tags used to categorize the repository
     * @param hostingOptions {module:model/HostingOptions} 
     */
    constructor(name, tags, hostingOptions) { 
        
        CreateRepositoryRequest.initialize(this, name, tags, hostingOptions);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, tags, hostingOptions) { 
        obj['name'] = name;
        obj['tags'] = tags;
        obj['hostingOptions'] = hostingOptions;
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

        obj["fields"]['name'] = { "type": 'String', "system": false };
        obj["fields"]['description'] = { "type": 'String', "system": false };
        obj["fields"]['tags'] = [{ "type": 'String', "system": false }];
        obj["fields"]['constraints'] = [{ "type": 'String', "system": false }];
        obj["fields"]['hostingOptions'] = new HostingOptions().modelMap();
        obj["fields"]['metadata'] = [new Metadata().modelMap()];

        
        obj["requiredFields"]['name'] = { "type": 'String', "system": false };
        obj["requiredFields"]['tags'] = [{ "type": 'String', "system": false }];
        obj["requiredFields"]['hostingOptions'] = new HostingOptions().modelMap();

        return obj;
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
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], [Metadata]);
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

/**
 * Metadata used to describe this file. Content type application/json
 * @member {Array.<module:model/Metadata>} metadata
 */
CreateRepositoryRequest.prototype['metadata'] = undefined;






export default CreateRepositoryRequest;

