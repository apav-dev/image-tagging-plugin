# image-tagging-plugin

This repository includes a Deno function that can be uploaded to the Yext Platform in order to generate image tags using the [Google Cloud Vision API](https://cloud.google.com/vision) for image URLs saved for entities in the Knowledge Graph. The new tags are then applied to a new field on the entity.

### Prerequisites

1. Have the Yext CLI installed: https://hitchhikers.yext.com/guides/cli-getting-started-resources/01-install-cli/
2. Have Deno installed, version 1.21.0 or later: https://deno.land/manual/getting_started/installation
3. Have a Yext account.
4. Have a Google Cloud Vision API key

### Uploading this function plugin to your Yext account

To upload this function to your account, run `yext resources apply .` where you will then be prompted to enter your Google Cloud Vision API key.
