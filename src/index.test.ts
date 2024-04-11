import { expect, test } from "vitest";
import { PackageJson } from "./index";

test("PackageJson export is defined", () => {
	expect(PackageJson).toBeDefined();
});
