// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyCM2i5ruzLckOefcGuAy3r_h3_xetlkFo4",
    authDomain: "cblanc-web.firebaseapp.com",
    databaseURL: "https://cblanc-web.firebaseio.com",
    projectId: "cblanc-web",
    storageBucket: "cblanc-web.appspot.com",
    messagingSenderId: "365644403979"
  }
};
