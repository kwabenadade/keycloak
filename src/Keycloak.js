import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "http://localhost:8081/auth",
 realm: "Iykcoby",
 clientId:'invoice'
//  clientId: "a210c561-a415-461a-a6a3-866d31777892",
});

export default keycloak;
