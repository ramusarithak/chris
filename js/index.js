
document.getElementById("formAct").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  // var name = getInputVal("name");
  // console.log('123',name )
}

$(function () {
  console.log("inside rem");
  $("input").on("input", function () {
    console.log("inside index");
  });
});

$(".btn").click(function () {
  // $(".form-control").val("");
  console.log("form  r r r", $("#name").val());
  // $(".form-control").val("");
  writeData($("#name").val());
});


const config = {
  apiKey: "AIzaSyDiGRu-hVq6zbpfAcq-h9crr4hiZWgMtJ4",
  authDomain: "chris-f0418.firebaseapp.com",
  databaseURL: "https://chris-f0418-default-rtdb.firebaseio.com",
  projectId: "chris-f0418",
  storageBucket: "chris-f0418.appspot.com",
  messagingSenderId: "710689742563",
  appId: "1:710689742563:web:44e8c487adfe7a4facefd6",
  measurementId: "${config.measurementId}",
};
firebase.initializeApp(config);

console.log("456", firebase);
let database = firebase.database().ref()
// removeuser(database);

database.on("value", function (snapshot) {
  renderUi(snapshot.val());
});


function writeData(name) {
  console.log("dadadadadad",name)
  localStorage.setItem('yourName', name); 
  database.push().set({
    name: name,
  });
  window.location.href = "/chris.html";
}
function getValue() {
	return localStorage.getItem('yourName');  
}
function renderUi(obj) {
  console.log("ght", database,obj);
  var html = "";
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    let deleted = {
      keyDelete: keys[i],
      db: database,
    };
    var Initial = obj[keys[i]].userName;

    console.log(deleted, keys);
    // html+=`<div class="chat"><li class='list-group-item'><span class="f-letter">${Initial.charAt(0)}</span>Name:<b><i>&nbsp;${obj[keys[i]].userName}&nbsp;</i></b><br />says:&nbsp;&nbsp;&nbsp;<b>${obj[keys[i]].message}</b>&nbsp;&nbsp;&nbsp;<button class='btnRemove' data-id='${keys[i]}' >close</button></div>`;
    html += `
    <div class="chat">
    <li class='list-group-item'><span class="f-letter"></span><b><i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${
      obj[keys[i]].name
    }&nbsp;</i></b><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>
    // ${keys[i]}
    </b>&nbsp;&nbsp;&nbsp;
    </div>`;
  }
  $(".comment").html(html);
  // $(".btnRemove").click(function () {
  //   var deleteID = $(this).attr("data-id");
  //   console.log("clicked", deleteID, database);
  //   database.child(deleteID).remove();
  // });
}
