// names of validations you can add to your schema and functions used to check that the field value
// is in the correct format. can add others like max. or greaterThan/lessThan for numbers.
const validationTable = {
  type: (fieldValue, configValue) => 
    fieldValue ? typeof fieldValue === configValue.name.toLowerCase() : true,
  required: (fieldValue, configValue) => 
    configValue ? !!fieldValue : false,
  min: (fieldValue, configValue) => 
    fieldValue ? fieldValue.length >= configValue : true,
  custom: (fieldValue, configValue) => 
    fieldValue ? configValue(fieldValue) : true
};
// validator class is used to run a fieldValue through all validators in validationTable
class Validator {
  constructor(field, config) {
    this.field = field;
    this.config = config;
  }
  validate(obj) {
    const fieldValue = obj[this.field];
    // for each item in config ({ type: String, min: 10, ...})
    return  Object.entries(this.config)
      .map(([validationName, [configValue, message]]) => {
        // find the validator from the validation table
        // validationName is type, min, ....
        // configValue is String, 10, ...
        // message is 'business name must be a string', 'length', ...
        // fieldValue is the value of the field in the object 'hi there'
        return validationTable[validationName](fieldValue, configValue) ? null : message;
      })
      // filter out nulls (those are validations that passed)
      .filter(message => message);
  }
}


class Schema {
  constructor(schema) {
    this.schema = schema;
    // create a new validator for each field in the schema
    this.validators = Object.entries(schema).map(([field, config]) => new Validator(field, config));
  }
  validate(obj) {
    // run all validators against an object
    return this.validators.flatMap(validator => validator.validate(obj));
  }
}


const businessSchema = new Schema({
  name: {
    type: [String, 'business name must be a string'],
    required: [true, 'is required'],
    min: [10, 'length']
  },
  email: {
    type: [String, 'emails must be a string'],
    custom: [email => email.includes('@'), 'invalid email: must include an @']
  }
});


const validateBusiness = newBusiness => {
  return businessSchema.validate(newBusiness);
};
console.log(businessSchema.validate({
  name: 'hi there',
  email: 'ryan'
}));
