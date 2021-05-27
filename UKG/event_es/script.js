const zoneList = {
    openWebSiteTwitter: {message: 'Twitter', website: 'https://twitter.com/ukginc?lang=en'},
    openWebSiteFacebook: {message: 'Facebook', website: 'https://www.facebook.com/UKGInc/'},
    openWebSiteLinkedin: {message: 'Linkedin', website: 'https://www.linkedin.com/company/ukg'},
    openWebSiteYouTube: {message: 'YouTube', website: ' https://www.youtube.com/c/UKGinc/featured'},
};

const zoneListArray = Object.keys(zoneList);
for(let i = 0; i < zoneListArray.length; i++) {
    const websiteIndex = zoneListArray[i];
    let popupWebsite = null;
    WA.onEnterZone(websiteIndex, () => {
        popupWebsite = WA.openPopup(`${websiteIndex}Rectangle`, zoneList[websiteIndex].message, [
            {
                label: "Close",
                className: "popUpElement",
                callback: (popup) => {
                    popup.close();
                }
            },
            {
                label: "Open",
                className: "popUpElement",
                callback: (popup) => {
                    WA.openTab(zoneList[websiteIndex].website);
                }
            }
        ]);
    });

    WA.onLeaveZone(websiteIndex, () => {
        if(!popupWebsite){
            return;
        }
        popupWebsite.close();
    });
}

const zoneList2 = {
    openWebSiteZoom: {message: 'Auditorium 1', website: 'https://zoom.us/'},
};

const zoneListArray2 = Object.keys(zoneList2);
for(let i = 0; i < zoneListArray2.length; i++) {
    const websiteIndex = zoneListArray2[i];
    let popupWebsite = null;
    WA.onEnterZone(websiteIndex, () => {
        popupWebsite = WA.openPopup(`${websiteIndex}Rectangle`, `Open zoom conference of room ${message}`, [
            {
                label: "Close",
                className: "popUpElement",
                callback: (popup) => {
                    popup.close();
                }
            },
            {
                label: "Open Zoom",
                className: "popUpElement",
                callback: (popup) => {
                    WA.openTab(zoneList[websiteIndex].website);
                }
            }
        ]);
    });

    WA.onLeaveZone(websiteIndex, () => {
        if(!popupWebsite){
            return;
        }
        popupWebsite.close();
    });
}
