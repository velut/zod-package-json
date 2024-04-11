import { z } from "zod";

export const Browser = z.union([z.string(), z.record(z.string())]);

/**
`Browser` describes the main entry point used in a browser environment.
@see {@link https://docs.npmjs.com/cli/v10/configuring-npm/package-json#browser}
@see {@link https://gist.github.com/defunctzombie/4339901/49493836fb873ddaa4b8a7aa0ef2352119f69211}
*/
export type Browser = z.infer<typeof Browser>;
