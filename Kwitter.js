function addUser(){
    window.location = "Kwitter_room.html";
    username = document.getElementById("user_name").value;
    localStorage.setItem("user_name", username);
}