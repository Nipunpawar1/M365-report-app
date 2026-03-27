document.getElementById("loginBtn").onclick = async () => {
    try {
        const loginRequest = {
            scopes: ["User.Read"]
        };

        // 1) Login via MSAL
        const loginResponse = await msalInstance.loginPopup(loginRequest);
        const account = loginResponse.account;

        document.getElementById("output").innerHTML = `
            <p><strong>Signed in as:</strong> ${account.username}</p>
            <p>Fetching profile...</p>
        `;

        // 2) Acquire token silently
        const tokenResponse = await msalInstance.acquireTokenSilent({
            account: account,
            scopes: ["User.Read"]
        });

        const accessToken = tokenResponse.accessToken;

        // 3) Call Microsoft Graph /me endpoint
        const graphResponse = await fetch("https://graph.microsoft.com/v1.0/me", {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        });

        const profile = await graphResponse.json();

        // 4) Display results
        document.getElementById("output").innerHTML = `
            <p><strong>Signed in as:</strong> ${account.username}</p>
            <h3>Profile Information</h3>
            <pre>${JSON.stringify(profile, null, 2)}</pre>
        `;

    } catch (error) {
        console.error("Login or Graph call failed:", error);
        alert("Login or API call failed — check console for details.");
    }
};
``
