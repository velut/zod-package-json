import { z } from "zod";

export const Bugs = z.union([
	z.string(),
	z.object({
		url: z.string().optional(),
		email: z.string().optional(),
	}),
]);

/**
`Bugs` describes the issue tracker for a package.
@see {@link https://docs.npmjs.com/cli/v10/configuring-npm/package-json#bugs}
*/
export type Bugs = z.infer<typeof Bugs>;
