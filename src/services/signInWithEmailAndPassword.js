
const signInWithEmailAndPassword = async (email, password) => {
  let raw = {
    "nxsApp": "1",
    "publicKey": "53fe22c842b5cd516d9f9840f3edb27cf539e0db",
    "user": "NEXUS",
    "pass": "e10adc3949ba59abbe56e057f20f883e"
   };

  let options =   {
    method: "POST",
    body: JSON.stringify(raw)
  }

  await fetch("http://api.genomax.co/NXSAPI/v1.0/auth/logIn/",options)
  .then(response => response.json())
  .then(data =>console.log(data));


};

export default signInWithEmailAndPassword
