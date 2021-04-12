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
 * The RankingStrategy model module.
 * @module model/RankingStrategy
 * @version 1.0.0
 */
class RankingStrategy {
    /**
     * Constructs a new <code>RankingStrategy</code>.
     * @alias module:model/RankingStrategy
     * @param constraints {Array.<String>} scoreDesc - The Ranking that can be Ascending or Descending based on timeDesc. timeDesc - The Ranking that can be Ascending or Descending based on scoreDesc. scoreFirst - The Ranking that can be score first or time first ignoreTime - The Ranking when time is ignored ignoreScore - The Ranking when score is ignored
     */
    constructor(constraints) { 
        
        RankingStrategy.initialize(this, constraints);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, constraints) { 
        obj['constraints'] = constraints;
    }

    /**
     * Constructs a <code>RankingStrategy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RankingStrategy} obj Optional instance to populate.
     * @return {module:model/RankingStrategy} The populated <code>RankingStrategy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RankingStrategy();

            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * scoreDesc - The Ranking that can be Ascending or Descending based on timeDesc. timeDesc - The Ranking that can be Ascending or Descending based on scoreDesc. scoreFirst - The Ranking that can be score first or time first ignoreTime - The Ranking when time is ignored ignoreScore - The Ranking when score is ignored
 * @member {Array.<String>} constraints
 */
RankingStrategy.prototype['constraints'] = undefined;






export default RankingStrategy;

