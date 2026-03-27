document.getElementById("loginBtn").onclick = async () => {
    try {
        const loginRequest = {
            scopes: ["User.Read"]
        };

        // 1) Sign in with MSAL
        const loginResponse = await msalInstance.loginPopup(loginRequest);
        const account = loginResponse.account;

        document.getElementById("output").innerHTML = `
            <p><strong>Signed in as:</strong> ${account.username}</p>
            <p>Retrieving your profile from Microsoft Graph...</p>
        `;

        // 2) Acquire token silently
        const tokenResponse = await msalInstance.acquireTokenSilent({
            account: account,
            scopes: ["User.Read"]
        });

        const accessToken = tokenResponse.accessToken;

        // 3) Call Microsoft Graph /me endpoint
        const graphResponse = await fetch("https://graph.microsoft.com/v1.0/me", {
            headers: { "Authorization": `Bearer ${accessToken}` }
        });

        const profile = await graphResponse.json();

        // 4) Display result
        document.getElementById("output").innerHTML = `
            <h3>Microsoft Graph Profile</h3>
            <pre>${JSON.stringify(profile, null, 2)}</pre>
        `;
    }
    catch (error) {
        console.error("Error during login or Graph call:", error);
        alert("Login or Graph request failed. Check console for details.");
    }
};
``
