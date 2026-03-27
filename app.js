document.getElementById("loginBtn").onclick = async () => {
    try {
        const loginRequest = {
            scopes: ["User.Read"]
        };

        const loginResponse = await msalInstance.loginPopup(loginRequest);
        const account = loginResponse.account;

        document.getElementById("output").innerHTML = `
            <p><strong>Logged in as:</strong> ${account.username}</p>
            <p>Account ID: ${account.homeAccountId}</p>
        `;
    } catch (error) {
        console.error("Login failed:", error);
        alert("Login failed. Check console for details.");
    }
};
