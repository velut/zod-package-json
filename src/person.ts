import { z } from "zod";

export const Person = z.union([
	z.string(),
	z.object({
		name: z.string(),
		email: z.string().optional(),
		url: z.string().optional(),
	}),
]);

/**
`Person` describes a person involved with a package (e.g., a package's author).
@see {@link https://docs.npmjs.com/cli/v10/configuring-npm/package-json#people-fields-author-contributors}
*/
export type Person = z.infer<typeof Person>;
