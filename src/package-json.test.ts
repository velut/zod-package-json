import { expect, test } from "vitest";
import { PackageJson } from "./package-json";

test("not an object", () => {
	expect(() => PackageJson.parse("foo")).toThrow();
});

test("missing required properties", () => {
	expect(() => PackageJson.parse({})).toThrow();
});

test("only required properties", () => {
	expect(
		PackageJson.parse({
			name: "foo",
			version: "1.0.0",
		}),
	).toMatchInlineSnapshot(`
		{
		  "name": "foo",
		  "version": "1.0.0",
		}
	`);
});

test("unknown property", () => {
	expect(
		PackageJson.parse({
			name: "foo",
			version: "1.0.0",
			unknownProp: "who knows",
		}),
	).toMatchInlineSnapshot(`
		{
		  "name": "foo",
		  "unknownProp": "who knows",
		  "version": "1.0.0",
		}
	`);
});

test("doc comment", () => {
	// Parse data from a `package.json` file.
	const packageJson = PackageJson.parse({
		name: "foo",
		version: "1.0.0",
		unknownProp: "who knows",
	});

	// Access a known property
	expect(packageJson.name).toBe("foo");

	// Access an unknown property
	expect(packageJson["unknownProp"]).toBe("who knows");
});
