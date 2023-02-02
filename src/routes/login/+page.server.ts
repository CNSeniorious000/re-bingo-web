import type { Actions } from "./$types";
import { baseUrl } from "$lib/common";

export const actions = {
  default: async ({ fetch, cookies, request }) => {
    let response = await fetch(`${baseUrl}/login/form`, { method: "POST", body: await request.formData() });
    let text = await response.text();
    if (text) cookies.set("token", text, { httpOnly: false, encode: (str) => str });
    return { token: text };
  },
} satisfies Actions;
