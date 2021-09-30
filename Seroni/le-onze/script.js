console.log('Start scripting Seroni map');

import {bootstrapExtra} from '@workadventure/scripting-api-extra'
console.log('inport bootstrapExtra', bootstrapExtra);
bootstrapExtra();

WA.onInit().then(() => {
    console.log('Current player name: ', WA.player.name);
});