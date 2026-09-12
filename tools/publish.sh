#!/usr/bin/env bash
# Publish the React site to GitHub Pages (docs/ on main).
# Preserves hand-maintained entries that Vite would otherwise wipe:
#   docs/skills/  docs/CNAME  docs/.well-known  (404.html comes from public/)
set -euo pipefail
cd "$(dirname "$0")/.."

npm run build --silent
KEEP=$(mktemp -d)
for p in skills CNAME .well-known; do
  [ -e "docs/$p" ] && cp -r "docs/$p" "$KEEP/$p"
done
rm -rf docs
mkdir -p docs
cp -r dist/* docs/
for p in "$KEEP"/*; do
  [ -e "$p" ] && cp -r "$p" docs/
done
rm -rf "$KEEP"
echo "docs/ refreshed — review, then commit + push to publish."
