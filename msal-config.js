const msalConfig = {
    auth: {
        clientId: "078e3278-8e1c-472e-88d7-633d52b56a2e
",
        authority: "https://login.microsoftonline.com/common",
        redirectUri: window.location.origin
    }
};

const msalInstance = new msal.PublicClientApplication(msalConfig);
