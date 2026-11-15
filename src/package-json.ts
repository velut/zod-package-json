import * as z from "zod";

const Name = z.string();

const Version = z.string();

const Description = z.string();

const Keywords = z.array(z.string());

const Homepage = z.string();

const Bugs = z.union([
  z.string(),
  z.object({
    url: z.optional(z.string()),
    email: z.optional(z.string()),
  }),
]);

const License = z.string();

const Person = z.union([
  z.string(),
  z.object({
    name: z.string(),
    email: z.optional(z.string()),
    url: z.optional(z.string()),
  }),
]);

const People = z.array(Person);

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

const Files = z.array(z.string());

const Exports = z.union([
  z.null(),
  z.string(),
  z.array(z.string()),
  z.record(z.string(), z.unknown()),
]);

const Main = z.string();

const Type = z.literal(["module", "commonjs"]);

const Browser = z.union([z.string(), z.record(z.string(), z.union([z.string(), z.boolean()]))]);

const Bin = z.union([z.string(), z.record(z.string(), z.string())]);

const Man = z.union([z.string(), z.array(z.string())]);

const Directories = z.record(z.string(), z.string());

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

const Scripts = z.record(z.string(), z.string());

const Gypfile = z.boolean();

const Config = z.record(z.string(), z.unknown());

const Dependencies = z.record(z.string(), z.string());

const PeerDependenciesMeta = z.record(z.string(), z.object({ optional: z.boolean() }));

const BundleDependencies = z.union([z.boolean(), z.array(z.string())]);

const Overrides = z.record(z.string(), z.unknown());

const PackageExtensions = z.record(
  z.string(),
  z.object({
    dependencies: z.optional(Dependencies),
    optionalDependencies: z.optional(Dependencies),
    peerDependencies: z.optional(Dependencies),
    peerDependenciesMeta: z.optional(PeerDependenciesMeta),
  }),
);

const Engines = z.record(z.string(), z.string());

const Os = z.array(z.string());

const Cpu = z.array(z.string());

const LibC = z.string();

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

const Private = z.boolean();

const PublishConfig = z.record(z.string(), z.unknown());

const Workspaces = z.array(z.string());

const Deprecated = z.string();

const Module = z.string();

const Types = z.string();

const TypesVersions = z.record(z.string(), z.record(z.string(), z.array(z.string())));

const PackageManager = z.string();

const SideEffects = z.union([z.boolean(), z.array(z.string())]);

const Imports = z.record(z.string(), z.unknown());

export const PackageJson = z.looseObject({
  /** Package name. */
  name: Name,

  /** Package semver version number. */
  version: Version,

  /** Description for the package. */
  description: z.optional(Description),

  /** List of keywords for searching the package. */
  keywords: z.optional(Keywords),

  /** URL of the package's homepage. */
  homepage: z.optional(Homepage),

  /** Issue tracker for the package. */
  bugs: z.optional(Bugs),

  /** SPDX license expression or a custom license. */
  license: z.optional(License),

  /** Author of the package. */
  author: z.optional(Person),

  /** Contributors to the package. */
  contributors: z.optional(People),

  /** Maintainers of the package. */
  maintainers: z.optional(People),

  /** Funding options for the package. */
  funding: z.optional(Funding),

  /** File patterns for files to be included when publishing the package. */
  files: z.optional(Files),

  /**
  Package exports.
  @see {@link https://nodejs.org/api/packages.html#exports}
  */
  exports: z.optional(Exports),

  /** Main entry point for the package, usually CommonJS. */
  main: z.optional(Main),

  /** Type for all the `.js` files in the package, usually `module`. */
  type: z.optional(Type),

  /**
	Main entry point for the package when used in a browser environment.
	@see {@link https://docs.npmjs.com/cli/v10/configuring-npm/package-json#browser}
	@see {@link https://gist.github.com/defunctzombie/4339901/49493836fb873ddaa4b8a7aa0ef2352119f69211}
	*/
  browser: z.optional(Browser),

  /** Executable files. */
  bin: z.optional(Bin),

  /** Documentation to be used with the `man` command. */
  man: z.optional(Man),

  /** Directories in the package. */
  directories: z.optional(Directories),

  /** Repository for the package's source code. */
  repository: z.optional(Repository),

  /** Scripts used in the package. */
  scripts: z.optional(Scripts),

  /**
  Prevent npm from building a module with node-gyp, usually `false`.
  @see {@link https://docs.npmjs.com/cli/v12/configuring-npm/package-json#gypfile}
  */
  gypfile: z.optional(Gypfile),

  /** Configuration values for scripts. */
  config: z.optional(Config),

  /** Production dependencies. */
  dependencies: z.optional(Dependencies),

  /** Development dependencies. */
  devDependencies: z.optional(Dependencies),

  /** Peer dependencies. */
  peerDependencies: z.optional(Dependencies),

  /** Metadata about peer dependencies. */
  peerDependenciesMeta: z.optional(PeerDependenciesMeta),

  /** Dependencies bundled with the package. */
  bundleDependencies: z.optional(BundleDependencies),

  /** Dependencies bundled with the package (equivalent to `bundleDependencies`). */
  bundledDependencies: z.optional(BundleDependencies),

  /** Optional dependencies. */
  optionalDependencies: z.optional(Dependencies),

  /** Overrides for dependency resolution using npm. */
  overrides: z.optional(Overrides),

  /**
  Overrides to let npm repair the manifests of third-party packages.
  Available only in private packages and unpublished packages.
  @see {@link https://docs.npmjs.com/cli/v12/configuring-npm/package-json#packageextensions}
  */
  packageExtensions: z.optional(PackageExtensions),

  /** Runtime systems supported by the package. */
  engines: z.optional(Engines),

  /** Operating systems supported by the package. */
  os: z.optional(Os),

  /** CPU architectures supported by the package. */
  cpu: z.optional(Cpu),

  /** Version of libc required to build or run this package on Linux. */
  libc: z.optional(LibC),

  /** Tooling required to develop the package. */
  devEngines: z.optional(DevEngines),

  /** True if the package should not be published. */
  private: z.optional(Private),

  /** Configuration values used at publishing time. */
  publishConfig: z.optional(PublishConfig),

  /** File patterns for locating local workspaces. */
  workspaces: z.optional(Workspaces),

  /** Deprecation message. */
  deprecated: z.optional(Deprecated),

  /** Main ESM entry point for the package. */
  module: z.optional(Module),

  /** Main TypeScript declaration file. */
  types: z.optional(Types),

  /** Main TypeScript declaration file (equivalent to `types`). */
  typings: z.optional(Types),

  /**
	TypeScript types resolutions.
  @see {@link https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html#version-selection-with-typesversions}
  */
  typesVersions: z.optional(TypesVersions),

  /**
  Corepack package manager.
  @see {@link https://nodejs.org/api/corepack.html}
  */
  packageManager: z.optional(PackageManager),

  /**
	False if importing modules from the package does not cause side effects.
	True or a list of file patterns if importing modules from the package causes side effects.
	@see {@link https://webpack.js.org/guides/tree-shaking/#mark-the-file-as-side-effect-free}
	*/
  sideEffects: z.optional(SideEffects),

  /**
	Imports map.
	@see {@link https://nodejs.org/api/packages.html#imports}
	*/
  imports: z.optional(Imports),
});

/**
`PackageJson` describes the manifest for a package found in the `package.json` file.
@see {@link https://docs.npmjs.com/cli/v10/configuring-npm/package-json}
*/
export type PackageJson = z.infer<typeof PackageJson>;
