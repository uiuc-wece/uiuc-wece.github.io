document.signin.signinNetId;

async function getUser(netId) {
  const res = await fetch("https://weceweb.herokuapp.com/api/user/" + netId);
  const jsonRes = await res.json();
  return jsonRes["data"];
}
