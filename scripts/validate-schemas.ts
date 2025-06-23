import { readdir, readFile } from 'fs/promises';
import { join } from 'path';
import { validateSchema } from '../lib/schema-validator';

async function validateAllSchemas() {
  try {
    // Define directories containing schema files
    const dirs = [
      join(process.cwd(), 'app/portfolio'),
      join(process.cwd(), 'app/services'),
    ];

    for (const dir of dirs) {
      const files = await readdir(dir, { withFileTypes: true });
      
      for (const file of files) {
        if (file.isFile() && file.name.endsWith('.tsx')) {
          const content = await readFile(join(dir, file.name), 'utf-8');
          
          // Extract schema objects from the file content
          const schemaMatch = content.match(/const\s+schema\s*=\s*({[\s\S]*?});/);
          
          if (schemaMatch) {
            try {
              const schema = eval('(' + schemaMatch[1] + ')');
              const result = validateSchema(schema, 'project');
              
              if (!result.valid) {
                console.error(`❌ Schema validation failed for ${file.name}:`, result.errors);
                process.exit(1);
              } else {
                console.log(`✅ Schema validated successfully for ${file.name}`);
              }
            } catch (err) {
              console.error(`❌ Failed to parse schema in ${file.name}:`, err);
              process.exit(1);
            }
          }
        }
      }
    }
    
    console.log('✅ All schemas validated successfully');
  } catch (error) {
    console.error('❌ Schema validation failed:', error);
    process.exit(1);
  }
}

validateAllSchemas();
