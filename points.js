import { NoEmitOnErrorsPlugin } from "webpack";

const APIURL = "https://weceweb.herokuapp.com/api/";

const POINTSDIV = document.getElementById("points");

async function getUser() {
  netId = document
    .getElementById("signinNetID")
    .value.trim()
    .toLowerCase();
  alert(netId);
  signIn(netId);
}

async function signIn(netId) {
  const res = await fetch(APIURL + "user/" + netId, { method: "GET" });
  console.log(url.toString());
  const jsonRes = await res.json();
  if ((data = jsonRes["data"])) {
    let name = data.firstName + " " + data.lastName;
    let email = data.email ? `<h6>Email: ${data.email}</h6>` : "";
    let major = data.major ? `<h6>Major: ${data.major}</h6>` : "";
    POINTSDIV.innerHTML += `
    <div class="section-body"> 
      <h4>${name}</h4>
      <h6>NetId: ${netId}</h6>
      ${email}
      ${major}
      <h6>Points: ${data.totalPoints}</h6>
    </div>`;
  }
}
