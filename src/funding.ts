import { z } from "zod";

export const Funding = z.union([
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

/**
`Funding` describes the options for funding a package.
@see {@link https://docs.npmjs.com/cli/v10/configuring-npm/package-json#funding}
*/
export type Funding = z.infer<typeof Funding>;
