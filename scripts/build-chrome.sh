#!/usr/bin/env bash
# Package Katsu as a Google Chrome / Chrome Web Store zip.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

if [[ ! -f manifest.json ]]; then
  echo "error: manifest.json not found in $ROOT" >&2
  exit 1
fi

if ! command -v python3 >/dev/null 2>&1; then
  echo "error: python3 is required to read and strip the Chrome manifest" >&2
  exit 1
fi

if ! command -v zip >/dev/null 2>&1; then
  echo "error: zip is required to build the Chrome archive" >&2
  exit 1
fi

eval "$(
  python3 - <<'PY'
import json
from pathlib import Path

manifest = json.loads(Path("manifest.json").read_text(encoding="utf-8"))
name = str(manifest.get("name") or "extension").strip() or "extension"
version = str(manifest.get("version") or "0.0.0").strip() or "0.0.0"
slug = "".join(ch.lower() if ch.isalnum() else "-" for ch in name).strip("-") or "extension"
while "--" in slug:
    slug = slug.replace("--", "-")
print(f"EXT_NAME={json.dumps(name)}")
print(f"EXT_VERSION={json.dumps(version)}")
print(f"EXT_SLUG={json.dumps(slug)}")
print(f"MANIFEST_VERSION={json.dumps(manifest.get('manifest_version'))}")
PY
)"

if [[ "$MANIFEST_VERSION" != "3" ]]; then
  echo "error: expected Manifest V3, got ${MANIFEST_VERSION:-missing}" >&2
  exit 1
fi

REQUIRED=(
  manifest.json
  newtab.html
  newtab.css
  newtab.js
  sayings.js
  icons/icon16.png
  icons/icon48.png
  icons/icon128.png
)

missing=0
for path in "${REQUIRED[@]}"; do
  if [[ ! -f "$path" ]]; then
    echo "error: missing required file: $path" >&2
    missing=1
  fi
done
if [[ "$missing" -ne 0 ]]; then
  exit 1
fi

DIST="${ROOT}/dist"
mkdir -p "$DIST"

if [[ "${1:-}" != "" ]]; then
  if [[ "$1" = /* ]]; then
    ZIP="$1"
  else
    ZIP="${ROOT}/$1"
  fi
else
  ZIP="${DIST}/${EXT_SLUG}-chrome-${EXT_VERSION}.zip"
fi

mkdir -p "$(dirname "$ZIP")"
STAGE="$(mktemp -d "${TMPDIR:-/tmp}/katsu-chrome.XXXXXX")"
cleanup() {
  rm -rf "$STAGE"
}
trap cleanup EXIT

cp newtab.html newtab.css newtab.js sayings.js "$STAGE/"
mkdir -p "$STAGE/icons"
cp icons/icon16.png icons/icon48.png icons/icon128.png "$STAGE/icons/"

python3 - "$STAGE/manifest.json" <<'PY'
import json
import sys
from pathlib import Path

src = json.loads(Path("manifest.json").read_text(encoding="utf-8"))
src.pop("browser_specific_settings", None)
Path(sys.argv[1]).write_text(
    json.dumps(src, ensure_ascii=False, indent=2) + "\n",
    encoding="utf-8",
)
PY

rm -f "$ZIP"
(
  cd "$STAGE"
  # -X strips extra file attributes so the zip is closer to store-upload ready.
  zip -X -q -r "$ZIP" manifest.json newtab.html newtab.css newtab.js sayings.js icons
)

bytes="$(wc -c < "$ZIP" | tr -d ' ')"
echo "Built Chrome zip"
echo "  name:    $EXT_NAME"
echo "  version: $EXT_VERSION"
echo "  path:    $ZIP"
echo "  size:    ${bytes} bytes"
echo "Contents:"
unzip -l "$ZIP" | sed -n 's/^/  /p'
echo
echo "Load unpacked: chrome://extensions → Developer mode → Load unpacked → this repo"
echo "Upload zip:    Chrome Web Store dashboard → package → $ZIP"
