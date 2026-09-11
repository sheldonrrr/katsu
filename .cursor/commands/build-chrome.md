# Build Chrome zip

Package this extension as a Google Chrome / Chrome Web Store zip.

1. From the repo root, run:

```bash
./scripts/build-chrome.sh
```

2. If the user passed an output path, run `./scripts/build-chrome.sh <path>` instead.
3. Do not invent a bundler, rewrite sources, or include `.git`, `.cursor`, `scripts`, or `dist`.
4. After a successful build, report the zip path, version, size, and file list from the script output.
5. Mention they can load this repo unpacked at `chrome://extensions`, or upload the zip to the Chrome Web Store.
