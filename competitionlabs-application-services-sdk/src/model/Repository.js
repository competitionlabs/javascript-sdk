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
import CustomFieldReduced from './CustomFieldReduced';
import HostingOptions from './HostingOptions';
import Metadata from './Metadata';
import ModelDefault from './ModelDefault';
import OptParamModels from './OptParamModels';
import RepositoryAllOf from './RepositoryAllOf';
import TagsReduced from './TagsReduced';

/**
 * The Repository model module.
 * @module model/Repository
 * @version 3.0.1
 */
class Repository {
    /**
     * Constructs a new <code>Repository</code>.
     * @alias module:model/Repository
     * @implements module:model/ModelDefault
     * @implements module:model/OptParamModels
     * @implements module:model/RepositoryAllOf
     * @param id {String} A unique system generated identifier
     * @param spaceName {String} This is the space name which is linked to the account
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     * @param name {String} The name of the repository. This cannot contain spaces or specil characters.
     * @param constraints {Array.<String>} Additional constraints
     * @param hostingOptions {module:model/HostingOptions} 
     */
    constructor(id, spaceName, created, name, constraints, hostingOptions) { 
        ModelDefault.initialize(this, id, spaceName, created);OptParamModels.initialize(this);RepositoryAllOf.initialize(this, name, constraints, hostingOptions);
        Repository.initialize(this, id, spaceName, created, name, constraints, hostingOptions);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, spaceName, created, name, constraints, hostingOptions) { 
        obj['id'] = id;
        obj['spaceName'] = spaceName;
        obj['created'] = created;
        obj['name'] = name;
        obj['constraints'] = constraints;
        obj['hostingOptions'] = hostingOptions;
    }

    /**
     * Constructs a <code>Repository</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Repository} obj Optional instance to populate.
     * @return {module:model/Repository} The populated <code>Repository</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Repository();
            ModelDefault.constructFromObject(data, obj);
            OptParamModels.constructFromObject(data, obj);
            RepositoryAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('spaceName')) {
                obj['spaceName'] = ApiClient.convertToType(data['spaceName'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('customFields')) {
                obj['customFields'] = ApiClient.convertToType(data['customFields'], [CustomFieldReduced]);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], [TagsReduced]);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], [Metadata]);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
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
 * A unique system generated identifier
 * @member {String} id
 */
Repository.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
Repository.prototype['spaceName'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
Repository.prototype['created'] = undefined;

/**
 * @member {Array.<module:model/CustomFieldReduced>} customFields
 */
Repository.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<module:model/TagsReduced>} tags
 */
Repository.prototype['tags'] = undefined;

/**
 * @member {Array.<module:model/Metadata>} metadata
 */
Repository.prototype['metadata'] = undefined;

/**
 * The name of the repository. This cannot contain spaces or specil characters.
 * @member {String} name
 */
Repository.prototype['name'] = undefined;

/**
 * The description of the promotion page
 * @member {String} description
 */
Repository.prototype['description'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
Repository.prototype['constraints'] = undefined;

/**
 * @member {module:model/HostingOptions} hostingOptions
 */
Repository.prototype['hostingOptions'] = undefined;


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
// Implement OptParamModels interface:
/**
 * @member {Array.<module:model/CustomFieldReduced>} customFields
 */
OptParamModels.prototype['customFields'] = undefined;
/**
 * A list of id's used to tag models
 * @member {Array.<module:model/TagsReduced>} tags
 */
OptParamModels.prototype['tags'] = undefined;
/**
 * @member {Array.<module:model/Metadata>} metadata
 */
OptParamModels.prototype['metadata'] = undefined;
// Implement RepositoryAllOf interface:
/**
 * The name of the repository. This cannot contain spaces or specil characters.
 * @member {String} name
 */
RepositoryAllOf.prototype['name'] = undefined;
/**
 * The description of the promotion page
 * @member {String} description
 */
RepositoryAllOf.prototype['description'] = undefined;
/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
RepositoryAllOf.prototype['constraints'] = undefined;
/**
 * @member {module:model/HostingOptions} hostingOptions
 */
RepositoryAllOf.prototype['hostingOptions'] = undefined;




export default Repository;

