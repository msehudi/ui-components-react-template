
export const keycloakConfig = {
  url: "https://access-uat.alberta.ca/auth",
  realm: "1fcc03df-7e6b-4ae2-b439-d14f2c024f3c",
  clientId: "wildfire-demo-app",
};

export const keycloakInit = {
  flow: "standard",
  responseType: "code",
  pkceMethod: "S256",
  onLoad: "check-sso",
};

export const oidcConfig = {
  authority: "https://access-uat.alberta.ca/auth/realms/1fcc03df-7e6b-4ae2-b439-d14f2c024f3c/",
  client_id: "wildfire-demo-app",
  redirect_uri: "http://localhost:3000",
  loadUserInfo: true,
  disablePKCE: false,
};

const parseJwt = (token: string) => {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}

export const hasResourceRole = (resource: string, role: string, accessToken: string): boolean => {
  const roles = parseJwt(accessToken).resource_access[resource]?.roles || [];
  return roles.indexOf(role) !== -1;
}


