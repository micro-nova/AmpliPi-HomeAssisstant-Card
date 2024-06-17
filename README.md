# How to Install

**This custom card requires Mini Media Player!** Before installing the AmpliPi custom cards, [download and install Mini Media Player](https://github.com/kalkih/mini-media-player). You also need to have the [main AmpliPi HomeAssistant plugin](https://github.com/micro-nova/hacs_amplipi/) in order for this card to function properly.

The rest of the guide assumes that Mini Media Player is fully installed.

1. Download `amplipi-cards-bundle.js` from the latest release on the GitHub repo.
1. Put `amplipi-cards-bundle.js` inside of the `www` directory on your HomeAssistant. This can be done using the File Editor from the Add-Ons store on HomeAssistant.
1. On HomeAssistant, navigate to **Settings** -> **Dashboards**. On the Dashboards screen, open the 3 dot hamburger menu and select **Resources**.
1. On the Resources screen, click **Add Resource**. Assuming the JavaScript bundle is located at `www/amplipi-cards-bundle.js`, set the URL of the new resource to `/local/amplipi-cards-bundle.js`. The resource type should be JavaScript module, and HomeAssistant should automatically select that option once it detects the URL was a JavaScript file.
1. **Delete the cache from** and restart your web browser. If all went well, you should be able to add the AmpliPi Zone Card and AmpliPi Group Card to your HomeAssistant Dashboard.