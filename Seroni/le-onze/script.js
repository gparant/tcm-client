import { bootstrapExtra } from "@workadventure/scripting-api-extra";

// Calling bootstrapExtra will initiliaze all the "custom properties"  
bootstrapExtra();

WA.onInit().then(() => {
    console.log('Current player name: ', WA.player.name);
});