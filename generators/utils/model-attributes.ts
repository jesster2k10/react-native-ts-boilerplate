import uniq from 'lodash/uniq';

export const extractModelAttributes = (
  text: string,
): {
  attributes: {type: string; name: string}[];
  types: string[];
} => {
  if (!text) {
    return {
      attributes: [],
      types: [],
    };
  }

  const attributes = text.split(' ').map((attribute) => {
    const [name, type] = attribute.split(':');
    return {
      name,
      type,
    };
  });
  const types = uniq(attributes.map((attribute) => attribute.type));

  return {
    attributes,
    types,
  };
};
