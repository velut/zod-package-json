import * as z from "zod";

const Bugs = z.union([
	z.string(),
	z.object({
		url: z.optional(z.string()),
		email: z.optional(z.string()),
	}),
]);

const Funding = z.union([
	z.string(),
	z.object({
		url: z.string(),
		type: z.optional(z.string()),
	}),
	z.array(
		z.union([
			z.string(),
			z.object({
				url: z.string(),
				type: z.optional(z.string()),
			}),
		]),
	),
]);

const Person = z.union([
	z.string(),
	z.object({
		name: z.string(),
		email: z.optional(z.string()),
		url: z.optional(z.string()),
	}),
]);

const Repository = z.union([
	z.string(),
	z.object({
		/** Repository type (e.g., `git`). */
		type: z.string(),

		/** Machine-readable repository URL (e.g., `https://github.com/user/repo.git`). */
		url: z.string(),

		/** Directory in a monorepo where the package's source code is located. */
		directory: z.optional(z.string()),
	}),
]);

const DevEngineDependency = z.object({
	name: z.string(),
	version: z.optional(z.string()),
	onFail: z.optional(z.literal(["ignore", "warn", "error"])),
});

const DevEngineDependencies = z.union([DevEngineDependency, z.array(DevEngineDependency)]);

const DevEngines = z.object({
	cpu: z.optional(DevEngineDependencies),
	os: z.optional(DevEngineDependencies),
	libc: z.optional(DevEngineDependencies),
	runtime: z.optional(DevEngineDependencies),
	packageManager: z.optional(DevEngineDependencies),
});

export const PackageJson = z.looseObject({
	/** Package name. */
	name: z.string(),

	/** Package semver version number. */
	version: z.string(),

	/** Description for the package. */
	description: z.optional(z.string()),

	/** List of keywords for searching the package. */
	keywords: z.optional(z.array(z.string())),

	/** URL of the package's homepage. */
	homepage: z.optional(z.string()),

	/** Issue tracker for the package. */
	bugs: z.optional(Bugs),

	/** SPDX license expression or a custom license. */
	license: z.optional(z.string()),

	/** Author of the package. */
	author: z.optional(Person),

	/** Contributors to the package. */
	contributors: z.optional(z.array(Person)),

	/** Maintainers of the package. */
	maintainers: z.optional(z.array(Person)),

	/** Funding options for the package. */
	funding: z.optional(Funding),

	/** File patterns for files to be included when publishing the package. */
	files: z.optional(z.array(z.string())),

	/** Package exports. @see {@link https://nodejs.org/api/packages.html#exports} */
	exports: z.optional(
		z.union([z.null(), z.string(), z.array(z.string()), z.record(z.string(), z.unknown())]),
	),

	/** Type for all the `.js` files in the package, usually `module`. */
	type: z.optional(z.literal(["module", "commonjs"])),

	/** Main entry point for the package, usually CommonJS. */
	main: z.optional(z.string()),

	/**
	Main entry point for the package when used in a browser environment.
	@see {@link https://docs.npmjs.com/cli/v10/configuring-npm/package-json#browser}
	@see {@link https://gist.github.com/defunctzombie/4339901/49493836fb873ddaa4b8a7aa0ef2352119f69211}
	*/
	browser: z.optional(
		z.union([z.string(), z.record(z.string(), z.union([z.string(), z.boolean()]))]),
	),

	/** Executable files. */
	bin: z.optional(z.union([z.string(), z.record(z.string(), z.string())])),

	/** Documentation to be used with the `man` command. */
	man: z.optional(z.union([z.string(), z.array(z.string())])),

	/** Directories in the package. */
	directories: z.optional(z.record(z.string(), z.string())),

	/** Repository for the package's source code. */
	repository: z.optional(Repository),

	/** Scripts used in the package. */
	scripts: z.optional(z.record(z.string(), z.string())),

	/** Configuration values for scripts. */
	config: z.optional(z.record(z.string(), z.unknown())),

	/** Production dependencies. */
	dependencies: z.optional(z.record(z.string(), z.string())),

	/** Development dependencies. */
	devDependencies: z.optional(z.record(z.string(), z.string())),

	/** Peer dependencies. */
	peerDependencies: z.optional(z.record(z.string(), z.string())),

	/** Metadata about peer dependencies. */
	peerDependenciesMeta: z.optional(z.record(z.string(), z.object({ optional: z.boolean() }))),

	/** Dependencies bundled with the package. */
	bundleDependencies: z.optional(z.union([z.boolean(), z.array(z.string())])),

	/** Dependencies bundled with the package (equivalent to `bundleDependencies`). */
	bundledDependencies: z.optional(z.union([z.boolean(), z.array(z.string())])),

	/** Optional dependencies. */
	optionalDependencies: z.optional(z.record(z.string(), z.string())),

	/** Overrides for dependency resolution using npm. */
	overrides: z.optional(z.record(z.string(), z.unknown())),

	/** Runtime systems supported by the package. */
	engines: z.optional(z.record(z.string(), z.string())),

	/** Operating systems supported by the package. */
	os: z.optional(z.array(z.string())),

	/** CPU architectures supported by the package. */
	cpu: z.optional(z.array(z.string())),

	/** Version of libc required to build or run this package on Linux. */
	libc: z.optional(z.string()),

	/** Tooling required to develop the package. */
	devEngines: z.optional(DevEngines),

	/** True if the package should not be published. */
	private: z.optional(z.boolean()),

	/** Configuration values used at publishing time. */
	publishConfig: z.optional(z.record(z.string(), z.unknown())),

	/** File patterns for locating local workspaces. */
	workspaces: z.optional(z.array(z.string())),

	/** Deprecation message. */
	deprecated: z.optional(z.string()),

	/** Main ESM entry point for the package. */
	module: z.optional(z.string()),

	/** Main TypeScript declaration file. */
	types: z.optional(z.string()),

	/** Main TypeScript declaration file (equivalent to `types`). */
	typings: z.optional(z.string()),

	/**
	TypeScript types resolutions.
  @see {@link https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html#version-selection-with-typesversions}
  */
	typesVersions: z.optional(z.record(z.string(), z.record(z.string(), z.array(z.string())))),

	/**
  Corepack package manager.
  @see {@link https://nodejs.org/api/corepack.html}
  */
	packageManager: z.optional(z.string()),

	/**
	False if importing modules from the package does not cause side effects.
	True or a list of file patterns if importing modules from the package causes side effects.
	@see {@link https://webpack.js.org/guides/tree-shaking/#mark-the-file-as-side-effect-free}
	*/
	sideEffects: z.optional(z.union([z.boolean(), z.array(z.string())])),

	/**
	Imports map.
	@see {@link https://nodejs.org/api/packages.html#imports}
	*/
	imports: z.optional(z.record(z.string(), z.unknown())),
});

/**
`PackageJson` describes the manifest for a package found in the `package.json` file.
@see {@link https://docs.npmjs.com/cli/v10/configuring-npm/package-json}
*/
export type PackageJson = z.infer<typeof PackageJson>;
