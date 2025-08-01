# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

- None

## [2.0.0] - 2025-08-01

### Added

- Added Zod mini schema available at the `zod-package-json/mini` subpath (Thanks @43081j)
- Added `libc` property to `PackageJson`
- Added `devEngines` property to `PackageJson`

### Changed

- Upgraded to Zod 4 (Thanks @43081j)

## [1.2.0] - 2025-06-16

### Changed

- Upgraded dependencies

## [1.1.0] - 2025-01-20

### Changed

- Upgraded dependencies

## [1.0.3] - 2024-06-12

### Changed

- Type of `sideEffects` changed from `boolean | undefined` to `boolean | string[] | undefined` (See https://github.com/velut/zod-package-json/issues/5) (Thanks @Sec-ant)
- Upgraded dependencies

## [1.0.2] - 2024-04-23

### Changed

- Upgrade dependencies: zod@3.23.3

## [1.0.1] - 2024-04-21

### Fixed

- Add booleans to the `browser` object values (a1de691)
- Widen `config` object values to `unknown` (95224f9)

[unreleased]: https://github.com/velut/zod-package-json/compare/v2.0.0...HEAD
[2.0.0]: https://github.com/velut/zod-package-json/compare/v1.2.0...v2.0.0
[1.2.0]: https://github.com/velut/zod-package-json/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/velut/zod-package-json/compare/v1.0.3...v1.1.0
[1.0.3]: https://github.com/velut/zod-package-json/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/velut/zod-package-json/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/velut/zod-package-json/compare/v1.0.0...v1.0.1
