const zoneList = {
    openWebSiteTwitter: {message: 'Twitter', website: 'https://twitter.com/ukginc?lang=en'},
    openWebSiteFacebook: {message: 'Facebook', website: 'https://www.facebook.com/UKGInc/'},
    openWebSiteLinkedin: {message: 'Linkedin', website: 'https://www.linkedin.com/company/ukg'},
    openWebSiteYouTube: {message: 'YouTube', website: ' https://www.youtube.com/c/UKGinc/featured'},
};

const zoneListArray = Object.keys(zoneList);
for(let i = 0; i < zoneListArray.length; i++) {
    const websiteIndex = zoneListArray[i];
    let popupPavillion = null;
    WA.onEnterZone(websiteIndex, () => {
        popupPavillion = WA.openPopup(`${websiteIndex}Rectangle`, zoneList[websiteIndex].message, [
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
                callback: () => {
                    WA.openTab(zoneList[websiteIndex].openWebUrl);
                }
            }
        ]);
    });

    WA.onLeaveZone(websiteIndex, () => {
        if(!popupPavillion){
            return;
        }
        popupPavillion.close();
    });
}
