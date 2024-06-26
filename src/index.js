import {AmplipiGroupCard} from "./group-card";
import {AmplipiGroupCardEditor} from "./group-card-editor";
import {AmplipiZoneCard} from "./zone-card";
import {AmplipiZoneCardEditor} from "./zone-card-editor";
import {AmplipiSourceCard} from "./source-card";
import {AmplipiSourceCardEditor} from "./source-card-editor";


customElements.define('amplipi-group-card', AmplipiGroupCard);
customElements.define('amplipi-group-card-editor', AmplipiGroupCardEditor);

window.customCards = window.customCards || [];
window.customCards.push({
    type: "amplipi-group-card",
    name: "Amplipi Group",
    description: "Represents an AmpliPi group of zones."
});

customElements.define('amplipi-zone-card', AmplipiZoneCard);
customElements.define('amplipi-zone-card-editor', AmplipiZoneCardEditor);

window.customCards = window.customCards || [];
window.customCards.push({
    type: "amplipi-zone-card",
    name: "Amplipi Zone",
    description: "Represents an AmpliPi zone."
});

customElements.define('amplipi-source-card', AmplipiSourceCard);
customElements.define('amplipi-source-card-editor', AmplipiSourceCardEditor);
window.customCards = window.customCards || [];
window.customCards.push({
    type: "amplipi-source-card",
    name: "Amplipi Source",
    description: "Represents an AmpliPi source."
});