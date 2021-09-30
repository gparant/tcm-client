/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />
import {bootstrapExtra} from '@workadventure/scripting-api-extra'

WA.onInit().then(() => {
    console.log('Current player name: ', WA.player.name);
});