// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCv3JTQT_hiWVQKmJZ3xQU-JxXJf9_zjdE",
    authDomain: "kwitter-project-94-4fbfd.firebaseapp.com",
    databaseURL: "https://kwitter-project-94-4fbfd-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-94-4fbfd",
    storageBucket: "kwitter-project-94-4fbfd.appspot.com",
    messagingSenderId: "905405936124",
    appId: "1:905405936124:web:dc4f275b10c4f6a0960279"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("username").innerHTML = "Welcome " + user_name + "!";

function addRoom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
//End code
});});}
getData();

function rediectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}