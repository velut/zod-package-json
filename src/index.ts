/**
This package exports a Zod schema (and the inferred TypeScript type) named `PackageJson`
that can parse most well-formed `package.json` files.

The schema includes all currently supported properties listed in the
{@link https://docs.npmjs.com/cli/v11/configuring-npm/package-json | npm docs}
as well as additional well-known properties specific to TypeScript and Node.js.

The schema also preserves unknown properties, which can be accessed
by indexing the parsed data with the desired string keys.

The schema only validates the known properties against their expected type
but does not do any additional normalization such as merging similar properties.
If necessary, that can be done by extending the schema with Zod methods such as
`.transform()` or `.refine()`.

@example

```typescript
import { PackageJson } from "zod-package-json";

// Parse data from a `package.json` file.
const packageJson = PackageJson.parse({
  name: "foo",
  version: "1.0.0",
  unknownProp: "who knows"
});

// Access a known property.
packageJson.name; // "foo"

// Access an unknown property.
packageJson["unknownProp"]; // "who knows"
```

@packageDocumentation
*/

export { PackageJson } from "./package-json";
