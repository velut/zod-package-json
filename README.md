# zod-package-json

[![Build status](https://img.shields.io/github/actions/workflow/status/velut/zod-package-json/main.yml?branch=main)](https://github.com/velut/zod-package-json/actions?query=workflow%3ACI)
[![Coverage](https://img.shields.io/codecov/c/gh/velut/zod-package-json)](https://codecov.io/gh/velut/zod-package-json)
[![jsDocs.io](https://img.shields.io/badge/jsDocs.io-reference-blue)](https://www.jsdocs.io/package/zod-package-json)
![Language](https://img.shields.io/github/languages/top/velut/zod-package-json)
[![npm](https://img.shields.io/npm/v/zod-package-json)](https://www.npmjs.com/package/zod-package-json)
[![License](https://img.shields.io/github/license/velut/zod-package-json)](https://github.com/velut/zod-package-json/blob/main/LICENSE)

[Zod](https://www.npmjs.com/package/zod) schema for the [`package.json`](https://docs.npmjs.com/cli/v10/configuring-npm/package-json/) file format.

This package exports a zod schema (and a TypeScript type) named `PackageJson`
that can parse most well-formed `package.json` files.

The schema includes all currently supported properties listed in the
[npm docs](https://docs.npmjs.com/cli/v10/configuring-npm/package-json/)
as well as additional well-known properties specific to TypeScript and Node.js.

The schema also preserves unknown properties, which can be accessed
by indexing the parsed data with the desired string keys.

The schema only validates the listed properties against the expected type
but does not do any additional normalization such as merging similar properties.
If necessary, that can be done by extending the schema with zod methods such as
`.transform()` or `.refine()`.

## Useful resources

- [**Explore the API on jsDocs.io**](https://www.jsdocs.io/package/zod-package-json)
- View package contents on [**unpkg**](https://unpkg.com/zod-package-json/)
- View repository on [**GitHub**](https://github.com/velut/zod-package-json)
- Read the changelog on [**GitHub**](https://github.com/velut/zod-package-json/blob/main/CHANGELOG.md)

## Install

Using `npm`:

```
npm add zod-package-json
```

Using `yarn`:

```
yarn add zod-package-json
```

Using `pnpm`:

```
pnpm add zod-package-json
```

Using `bun`:

```
bun add zod-package-json
```

## Usage examples

```typescript
import { PackageJson } from "zod-package-json";

// Parse data from a `package.json` file.
const packageJson = PackageJson.parse({
	name: "foo",
	version: "1.0.0",
	unknownProp: "who knows",
});

// Access a known property.
packageJson.name; // "foo"

// Access an unknown property.
packageJson["unknownProp"]; // "who knows"
```

## License

```
MIT
```

Copyright (c) 2025 Edoardo Scibona

See [LICENSE](./LICENSE) file.
