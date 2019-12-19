import _ from "lodash";

const createIteratee = function(converter, self) {
  return (result, value, key) =>
    _.set(result, converter(key), _.isObjectLike(value) ? self(value) : value);
};

const createHumps = function(keyConverter) {
  return function humps(node) {
    if (_.isArray(node)) return _.map(node, humps);
    if (_.isPlainObject(node)) return _.transform(node, createIteratee(keyConverter, humps));
    return node;
  };
};

const convertObjectToCamel = createHumps(_.camelCase);
const convertObjectToSnake = createHumps(_.snakeCase);

export { convertObjectToCamel, convertObjectToSnake };
