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
import ActionTypeAdjustmentFactor from './ActionTypeAdjustmentFactor';
import Metadata from './Metadata';
import Translation from './Translation';
import UpdateModelDefault from './UpdateModelDefault';
import UpdateProductRequestAllOf from './UpdateProductRequestAllOf';

/**
 * The UpdateProductRequest model module.
 * @module model/UpdateProductRequest
 * @version 1.0.4
 */
class UpdateProductRequest {
    /**
     * Constructs a new <code>UpdateProductRequest</code>.
     * @alias module:model/UpdateProductRequest
     * @implements module:model/UpdateModelDefault
     * @implements module:model/UpdateProductRequestAllOf
     * @param id {String} A unique system generated identifier
     */
    constructor(id) { 
        UpdateModelDefault.initialize(this, id);UpdateProductRequestAllOf.initialize(this);
        UpdateProductRequest.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['id'];
        obj['name'];
        obj['productType'];
        obj['productTypeName'];
        obj['description'];
        obj['adjustmentFactor'];
        obj['productRefId'];
        obj['actionTypeAdjustmentFactors'];
        obj['productGroups'];
        obj['metadata'];
        obj['translations'];

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

        obj["fields"]['id'];
        obj["fields"]['name'];
        obj["fields"]['productType'];
        obj["fields"]['productTypeName'];
        obj["fields"]['description'];
        obj["fields"]['adjustmentFactor'];
        obj["fields"]['productRefId'];
        obj["fields"]['actionTypeAdjustmentFactors'];
        obj["fields"]['productGroups'];
        obj["fields"]['metadata'];
        obj["fields"]['translations'];

        
        obj["requiredFields"]['id'];

        return obj;
    }

    /**
     * Constructs a <code>UpdateProductRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateProductRequest} obj Optional instance to populate.
     * @return {module:model/UpdateProductRequest} The populated <code>UpdateProductRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateProductRequest();
            UpdateModelDefault.constructFromObject(data, obj);
            UpdateProductRequestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('productType')) {
                obj['productType'] = ApiClient.convertToType(data['productType'], 'String');
            }
            if (data.hasOwnProperty('productTypeName')) {
                obj['productTypeName'] = ApiClient.convertToType(data['productTypeName'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('adjustmentFactor')) {
                obj['adjustmentFactor'] = ApiClient.convertToType(data['adjustmentFactor'], 'Number');
            }
            if (data.hasOwnProperty('productRefId')) {
                obj['productRefId'] = ApiClient.convertToType(data['productRefId'], 'String');
            }
            if (data.hasOwnProperty('actionTypeAdjustmentFactors')) {
                obj['actionTypeAdjustmentFactors'] = ApiClient.convertToType(data['actionTypeAdjustmentFactors'], [ActionTypeAdjustmentFactor]);
            }
            if (data.hasOwnProperty('productGroups')) {
                obj['productGroups'] = ApiClient.convertToType(data['productGroups'], ['String']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], [Metadata]);
            }
            if (data.hasOwnProperty('translations')) {
                obj['translations'] = ApiClient.convertToType(data['translations'], [Translation]);
            }
        }
        return obj;
    }


}

/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateProductRequest.prototype['id'] = undefined;

/**
 * The name of the product
 * @member {String} name
 */
UpdateProductRequest.prototype['name'] = undefined;

/**
 * The categorisation of this product by its type
 * @member {String} productType
 */
UpdateProductRequest.prototype['productType'] = undefined;

/**
 * The name of this product by its type
 * @member {String} productTypeName
 */
UpdateProductRequest.prototype['productTypeName'] = undefined;

/**
 * The description of the product for your reference
 * @member {String} description
 */
UpdateProductRequest.prototype['description'] = undefined;

/**
 * The multiplier to apply to source values received for this product events
 * @member {Number} adjustmentFactor
 */
UpdateProductRequest.prototype['adjustmentFactor'] = undefined;

/**
 * The reference to this product in your system. The reference identifier can not be changed after the product has been created
 * @member {String} productRefId
 */
UpdateProductRequest.prototype['productRefId'] = undefined;

/**
 * @member {Array.<module:model/ActionTypeAdjustmentFactor>} actionTypeAdjustmentFactors
 */
UpdateProductRequest.prototype['actionTypeAdjustmentFactors'] = undefined;

/**
 * A list of Strings used to tag products with taxonomy terms
 * @member {Array.<String>} productGroups
 */
UpdateProductRequest.prototype['productGroups'] = undefined;

/**
 * @member {Array.<module:model/Metadata>} metadata
 */
UpdateProductRequest.prototype['metadata'] = undefined;

/**
 * @member {Array.<module:model/Translation>} translations
 */
UpdateProductRequest.prototype['translations'] = undefined;


// Implement UpdateModelDefault interface:
/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateModelDefault.prototype['id'] = undefined;
// Implement UpdateProductRequestAllOf interface:
/**
 * The name of the product
 * @member {String} name
 */
UpdateProductRequestAllOf.prototype['name'] = undefined;
/**
 * The categorisation of this product by its type
 * @member {String} productType
 */
UpdateProductRequestAllOf.prototype['productType'] = undefined;
/**
 * The name of this product by its type
 * @member {String} productTypeName
 */
UpdateProductRequestAllOf.prototype['productTypeName'] = undefined;
/**
 * The description of the product for your reference
 * @member {String} description
 */
UpdateProductRequestAllOf.prototype['description'] = undefined;
/**
 * The multiplier to apply to source values received for this product events
 * @member {Number} adjustmentFactor
 */
UpdateProductRequestAllOf.prototype['adjustmentFactor'] = undefined;
/**
 * The reference to this product in your system. The reference identifier can not be changed after the product has been created
 * @member {String} productRefId
 */
UpdateProductRequestAllOf.prototype['productRefId'] = undefined;
/**
 * @member {Array.<module:model/ActionTypeAdjustmentFactor>} actionTypeAdjustmentFactors
 */
UpdateProductRequestAllOf.prototype['actionTypeAdjustmentFactors'] = undefined;
/**
 * A list of Strings used to tag products with taxonomy terms
 * @member {Array.<String>} productGroups
 */
UpdateProductRequestAllOf.prototype['productGroups'] = undefined;
/**
 * @member {Array.<module:model/Metadata>} metadata
 */
UpdateProductRequestAllOf.prototype['metadata'] = undefined;
/**
 * @member {Array.<module:model/Translation>} translations
 */
UpdateProductRequestAllOf.prototype['translations'] = undefined;




export default UpdateProductRequest;

