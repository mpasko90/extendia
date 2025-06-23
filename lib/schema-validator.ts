import { Schema, sanitize, validate } from 'schema-inspector';

type ValidationResult = {
  valid: boolean;
  errors?: string[];
};

const schemaValidators = {
  project: {
    type: 'object',
    properties: {
      '@type': { type: 'string', eq: 'Project' },
      '@context': { type: 'string', eq: 'https://schema.org' },
      name: { type: 'string' },
      description: { type: 'string' },
      image: { type: 'string' },
      location: {
        type: 'object',
        properties: {
          '@type': { type: 'string', eq: 'Place' },
          address: {
            type: 'object',
            properties: {
              '@type': { type: 'string', eq: 'PostalAddress' },
              addressLocality: { type: 'string' },
              addressRegion: { type: 'string' },
              addressCountry: { type: 'string' }
            }
          }
        }
      },
      provider: {
        type: 'object',
        properties: {
          '@type': { type: 'string', eq: 'Organization' },
          name: { type: 'string' },
          url: { type: 'string' }
        }
      }
    }
  },
  // Add more schema validators here
};

export function validateSchema(data: unknown, schemaType: keyof typeof schemaValidators): ValidationResult {
  const schema = schemaValidators[schemaType];
  
  if (!schema) {
    return {
      valid: false,
      errors: [`Schema type '${schemaType}' not found`]
    };
  }

  const validation = validate(schema, data);
  
  if (!validation.valid) {
    return {
      valid: false,
      errors: validation.format()
    };
  }

  return { valid: true };
}

export function sanitizeSchema(data: unknown, schemaType: keyof typeof schemaValidators): unknown {
  const schema = schemaValidators[schemaType];
  
  if (!schema) {
    throw new Error(`Schema type '${schemaType}' not found`);
  }

  return sanitize(schema, data).data;
}
