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

/**
 * The Relation model module.
 * @module model/Relation
 * @version 3.0.1
 */
class Relation {
    /**
     * Constructs a new <code>Relation</code>.
     * @alias module:model/Relation
     * @param id {String} A unique system identifier to which this record is related to
     * @param relationType {String} Entity type of the id
     */
    constructor(id, relationType) { 
        
        Relation.initialize(this, id, relationType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, relationType) { 
        obj['id'] = id;
        obj['relationType'] = relationType;
    }

    /**
     * Constructs a <code>Relation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Relation} obj Optional instance to populate.
     * @return {module:model/Relation} The populated <code>Relation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Relation();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('relationType')) {
                obj['relationType'] = ApiClient.convertToType(data['relationType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A unique system identifier to which this record is related to
 * @member {String} id
 */
Relation.prototype['id'] = undefined;

/**
 * Entity type of the id
 * @member {String} relationType
 */
Relation.prototype['relationType'] = undefined;






export default Relation;

