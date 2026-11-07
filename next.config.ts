import { execSync } from "node:child_process";
import type { NextConfig } from "next";

function git(args: string) {
  try {
    return execSync(`git ${args}`, { stdio: ["ignore", "pipe", "ignore"] }).toString().trim();
  } catch {
    return null;
  }
}

// The commit this build was shipped from, printed on the homepage seal tag.
// A local tree with uncommitted changes is not that commit, so it says so.
function commitSha() {
  const fromHost = process.env.VERCEL_GIT_COMMIT_SHA;
  if (fromHost) return { sha: fromHost.slice(0, 7), dirty: false };
  const sha = git("rev-parse --short=7 HEAD") ?? "";
  const dirty = sha !== "" && (git("status --porcelain") ?? "") !== "";
  return { sha, dirty };
}

const commit = commitSha();

const nextConfig: NextConfig = {
  env: {
    COMMIT_SHA: commit.sha,
    COMMIT_DIRTY: commit.dirty ? "1" : "",
  },
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        // CSS modules keep Next's own module handling
        condition: { not: { path: "*.module.css" } },
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
