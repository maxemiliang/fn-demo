import { onRequest } from "@max-cloud/functions";

// Every exported function is deployed on its own. This one is a Knative
// service: private (cluster-local) until you pass { public: true }, and
// scaled to zero when idle. See onSchedule and onQueue for the other kinds.
export const hello = onRequest({ public: true }, async (req) => {
  return new Response(`Hello from ${new URL(req.url).pathname}\n`);
});
