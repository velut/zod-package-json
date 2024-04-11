import { z } from "zod";

export const Repository = z.union([
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

/**
`Repository` describes the repository containing a package's source code.
@see {@link https://docs.npmjs.com/cli/v10/configuring-npm/package-json#repository}
*/
export type Repository = z.infer<typeof Repository>;
