const LitElement = Object.getPrototypeOf(
    customElements.get("ha-panel-lovelace")
);
const html = LitElement.prototype.html;

import {CommonAmplipiCard} from "./common-amplipi-card";

export class AmplipiZoneCard extends CommonAmplipiCard {

    static getConfigElement() {
        return document.createElement("amplipi-zone-card-editor");
    }

    setConfig(config) {
        this._config = config;
        this._zone = config.entity;
    }

    static getStubConfig() {
        return {name: "AmpliPi Zone", entity: ""};
    }

    set hass(hass) {
        this._hass = hass;
        if(this._media_player) {
            this._media_player.hass = hass;
        }

        if(this._stream_player) {
            this._stream_player.hass = hass;
        }


        if(this._source_player) {
            this._source_player.hass = hass;
        }

        if(this._helpers 
            && this.source != this._hass.states[this._zone].attributes.source) {
            this._stream_player = this._loadSourcePlayer(this._hass.states[this._zone].attributes.source);
            this._source_player = this._loadAmpliPiSourcePlayer(this._group);
            this._controls_player = this._loadControlsPlayer(this._hass.states[this._zone].attributes.source);
        }

        if(this._controls_player) {
            this._controls_player.hass = hass;
        }

        if(this._hassResolve) this._hassResolve();
    }

    render() {
        if(!this._hass || !this._config) {
            return html ``;
        }
        return html `
        <ha-card header="${this._config.name}" style="padding: 1.5rem;">
        <b>Now Playing:</b> ${this._hass.states[this._zone].attributes.media_album_artist} - ${this._hass.states[this._zone].attributes.media_track}
            ${this._media_player == undefined ? "" : this._media_player}
            <br><b>Source:</b>
            ${this._source_player == undefined ? "" : this._source_player}
            <b>Stream:</b>
            ${this._stream_player == undefined ? "" : this._stream_player}
            <hr>
            ${this._controls_player == undefined ? "" : this._controls_player}
        </ha-card>`;
    }

    async addMediaPlayer() {
        if(this._helpers === undefined) {
            await new Promise((resolve => (this._helpersResolve = resolve)));
        }
        if(this._hass === undefined) {
            await new Promise((resolve) => (this._hassResolve = resolve));
        }

        this._hassResolve = undefined;
        this._helpersResolve = undefined;

        if(this._zone) {
            let media_config = {
                "type": "custom:mini-media-player",
                "entity": this._zone,
                "group": "false",
                "info" : "scroll",
                "artwork": "cover",
                "source": "icon",
                "hide": {
                    "power": "true",
                    "controls": "true",
                    "source": "true",
                }
            };

            if(this._config.media_config instanceof Object) {
                media_config = {...media_config, ...this._config.media_config};
            }

            console.log("zone is " + this._zone)
            this._media_player = await this._helpers.createCardElement(media_config);
            this._media_player.hass = this._hass;
            this._stream_player = this._loadSourcePlayer(this._hass.states[this._zone].attributes.source);
            this._source_player = this._loadAmpliPiSourcePlayer(this._zone);
            this._controls_player = this._loadControlsPlayer(this._hass.states[this._zone].attributes.source);    
        }

       this.triggerRender();
    }
}
