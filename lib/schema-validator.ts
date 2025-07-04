import { Schema, sanitize, validate } from 'schema-inspector';

interface ValidationError {
  property: string;
  message: string;
  code?: string;
}

interface ValidationResult {
  valid: boolean;
  errors: ValidationError[];
  errorMessages: string[];
}

type SchemaDefinition = Schema & {
  type: string;
  properties: Record<string, Schema>;
  eq?: string;
  required?: boolean;
  custom?: (value: unknown) => boolean | string;
}

const schemaValidators: Record<string, SchemaDefinition> = {
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
      errors: [{
        property: 'schemaType',
        message: `Schema type '${schemaType}' not found`
      }],
      errorMessages: [`Schema type '${schemaType}' not found`]
    };
  }

  const validation = validate(schema, data);

  return {
    valid: validation.valid,
    errors: validation.valid ? [] : (
      Array.isArray(validation.error) 
        ? validation.error.map(err => ({ property: err.property, message: err.message }))
        : [{ property: 'unknown', message: 'Unknown validation error' }]
    ),
    errorMessages: validation.valid ? [] : (
      Array.isArray(validation.error) 
        ? validation.error.map(err => `${err.property}: ${err.message}`)
        : ['Unknown validation error']
    )
  };
}

export function sanitizeSchema(data: unknown, schemaType: keyof typeof schemaValidators): unknown {
  const schema = schemaValidators[schemaType];

  if (!schema) {
    throw new Error(`Schema type '${schemaType}' not found`);
  }

  return sanitize(schema, data).data;
}
