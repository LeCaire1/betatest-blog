// Configuration Auth0
const auth0 = new auth0.WebAuth({
  domain: 'dev-xyz.auth0.com',  // Remplace par ton domaine Auth0
  clientID: 'YOUR_CLIENT_ID',   // Remplace par ton Client ID
  redirectUri: window.location.href,  // URL où l'utilisateur sera redirigé après la connexion
  responseType: 'token id_token',
  scope: 'openid profile email'
});

// Fonction pour vérifier si l'utilisateur est connecté
function checkLogin() {
  auth0.parseHash(window.location.hash, (err, authResult) => {
    if (authResult && authResult.idToken) {
      // Si l'utilisateur est connecté, on affiche un message de bienvenue
      console.log('Utilisateur connecté:', authResult);
      document.getElementById('loginStatus').innerText = "Bienvenue " + authResult.idTokenPayload.name;
    } else if (err) {
      console.log('Erreur lors de la connexion', err);
    }
  });
}

// Fonction pour se connecter
function login() {
  auth0.authorize();
}

// Fonction pour se déconnecter
function logout() {
  auth0.logout({
    returnTo: window.location.href
  });
}

// Vérifier l'état de la connexion dès le chargement de la page
checkLogin();
