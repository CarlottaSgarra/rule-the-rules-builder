import posthog from "posthog-js";

const API_KEY = import.meta.env.VITE_PUBLIC_POSTHOG_KEY as string | undefined;
const API_HOST =
  (import.meta.env.VITE_PUBLIC_POSTHOG_HOST as string | undefined) ?? "https://eu.i.posthog.com";

let initialized = false;

// Client-only: PostHog has no server-side rendering support and must never
// run during SSR. We manage pageviews manually so SPA navigations (which
// don't trigger a full page load) are tracked as real pageviews too.
export function initPosthog() {
  if (initialized || typeof window === "undefined" || !API_KEY) return;
  posthog.init(API_KEY, {
    api_host: API_HOST,
    person_profiles: "identified_only",
    capture_pageview: false,
  });
  initialized = true;
}

export function capturePageview(url: string) {
  if (!initialized) return;
  posthog.capture("$pageview", { $current_url: url });
}
