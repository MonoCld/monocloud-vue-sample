import { UserManager, WebStorageStateStore } from "oidc-client-ts";

const userManager = new UserManager({
    authority: 'https://<your-domain>',
    client_id: '<your-client-id>',
    redirect_uri: 'http://localhost:3000/oidc-callback',
    post_logout_redirect_uri: 'http://localhost:3000',
    scope: 'openid profile email',
    response_type: 'code',
    loadUserInfo: true,
    userStore: new WebStorageStateStore({ store: sessionStorage }),
});

export default userManager;