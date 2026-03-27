const msalConfig = {
    auth: {
        clientId: "078e3278-8e1c-472e-88d7-633d52b56a2e",
        authority: "https://login.microsoftonline.com/common",
        redirectUri: "https://nipunpawar1.github.io/M365-report-app"
    }
};

const msalInstance = new msal.PublicClientApplication(msalConfig);
``
