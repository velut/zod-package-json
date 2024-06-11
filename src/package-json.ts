import { z } from "zod";

const Bugs = z.union([
	z.string(),
	z.object({
		url: z.string().optional(),
		email: z.string().optional(),
	}),
]);

const Funding = z.union([
	z.string(),
	z.object({
		url: z.string(),
		type: z.string().optional(),
	}),
	z.array(
		z.union([
			z.string(),
			z.object({
				url: z.string(),
				type: z.string().optional(),
			}),
		]),
	),
]);

const Person = z.union([
	z.string(),
	z.object({
		name: z.string(),
		email: z.string().optional(),
		url: z.string().optional(),
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
		directory: z.string().optional(),
	}),
]);

export const PackageJson = z
	.object({
		/** Package name. */
		name: z.string(),

		/** Package semver version number. */
		version: z.string(),

		/** Description for the package. */
		description: z.string().optional(),

		/** List of keywords for searching the package. */
		keywords: z.array(z.string()).optional(),

		/** URL of the package's homepage. */
		homepage: z.string().optional(),

		/** Issue tracker for the package. */
		bugs: Bugs.optional(),

		/** SPDX license expression or a custom license. */
		license: z.string().optional(),

		/** Author of the package. */
		author: Person.optional(),

		/** Contributors to the package. */
		contributors: z.array(Person).optional(),

		/** Maintainers of the package. */
		maintainers: z.array(Person).optional(),

		/** Funding options for the package. */
		funding: Funding.optional(),

		/** File patterns for files to be included when publishing the package. */
		files: z.array(z.string()).optional(),

		/** Main entry point for the package, usually CommonJS. */
		main: z.string().optional(),

		/**
		Main entry point for the package when used in a browser environment.
		@see {@link https://docs.npmjs.com/cli/v10/configuring-npm/package-json#browser}
		@see {@link https://gist.github.com/defunctzombie/4339901/49493836fb873ddaa4b8a7aa0ef2352119f69211}
		*/
		browser: z.union([z.string(), z.record(z.union([z.string(), z.boolean()]))]).optional(),

		/** Executable files. */
		bin: z.union([z.string(), z.record(z.string())]).optional(),

		/** Documentation to be used with the `man` command. */
		man: z.union([z.string(), z.array(z.string())]).optional(),

		/** Directories in the package. */
		directories: z.record(z.string()).optional(),

		/** Repository for the package's source code. */
		repository: Repository.optional(),

		/** Scripts used in the package. */
		scripts: z.record(z.string()).optional(),

		/** Configuration values for scripts. */
		config: z.record(z.unknown()).optional(),

		/** Production dependencies. */
		dependencies: z.record(z.string()).optional(),

		/** Development dependencies. */
		devDependencies: z.record(z.string()).optional(),

		/** Peer dependencies. */
		peerDependencies: z.record(z.string()).optional(),

		/** Metadata about peer dependencies. */
		peerDependenciesMeta: z.record(z.object({ optional: z.boolean() })).optional(),

		/** Dependencies bundled with the package. */
		bundleDependencies: z.union([z.boolean(), z.array(z.string())]).optional(),

		/** Dependencies bundled with the package (equivalent to `bundleDependencies`). */
		bundledDependencies: z.union([z.boolean(), z.array(z.string())]).optional(),

		/** Optional dependencies. */
		optionalDependencies: z.record(z.string()).optional(),

		/** Overrides for dependency resolution using npm. */
		overrides: z.record(z.unknown()).optional(),

		/** Runtime systems supported by the package. */
		engines: z.record(z.string()).optional(),

		/** Operating systems supported by the package. */
		os: z.array(z.string()).optional(),

		/** CPU architectures supported by the package. */
		cpu: z.array(z.string()).optional(),

		/** True if the package should not be published. */
		private: z.boolean().optional(),

		/** Configuration values used at publishing time. */
		publishConfig: z.record(z.unknown()).optional(),

		/** File patterns for locating local workspaces. */
		workspaces: z.array(z.string()).optional(),

		/** Deprecation message. */
		deprecated: z.string().optional(),

		/** Main ESM entry point for the package. */
		module: z.string().optional(),

		/** Type for all the `.js` files in the package, usually `module`. */
		type: z.union([z.literal("module"), z.literal("commonjs")]).optional(),

		/** Main TypeScript declaration file. */
		types: z.string().optional(),

		/** Main TypeScript declaration file (equivalent to `types`). */
		typings: z.string().optional(),

		/**
		TypeScript types resolutions.
  	@see {@link https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html#version-selection-with-typesversions}
  	*/
		typesVersions: z.record(z.record(z.array(z.string()))).optional(),

		/**
  	Corepack package manager.
  	@see {@link https://nodejs.org/api/corepack.html}
  	*/
		packageManager: z.string().optional(),

		/**
		False if importing modules from the package does not cause side effects.
		True or a list of file patterns if importing modules from the package causes side effects.
		@see {@link https://webpack.js.org/guides/tree-shaking/#mark-the-file-as-side-effect-free}
		*/
		sideEffects: z.union([z.boolean(), z.array(z.string())]).optional(),

		/**
		Imports map.
		@see {@link https://nodejs.org/api/packages.html#imports}
		*/
		imports: z.record(z.unknown()).optional(),

		/**
		Package exports.
		@see {@link https://nodejs.org/api/packages.html#exports}
		*/
		exports: z.union([z.null(), z.string(), z.array(z.string()), z.record(z.unknown())]).optional(),
	})
	.passthrough();

/**
`PackageJson` describes the manifest for a package found in the `package.json` file.
@see {@link https://docs.npmjs.com/cli/v10/configuring-npm/package-json}
*/
export type PackageJson = z.infer<typeof PackageJson>;
