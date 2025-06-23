declare module 'schema-inspector' {
  export interface Schema {
    type?: string;
    properties?: Record<string, Schema>;
    items?: Schema[];
    required?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  }

  export interface ValidationError {
    property: string;
    message: string;
  }

  export interface ValidationResult {
    valid: boolean;
    error?: ValidationError[];
    format?: () => string;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export function validate(schema: Schema, data: unknown): ValidationResult;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export function sanitize(schema: Schema, data: unknown): { data: unknown };
}
