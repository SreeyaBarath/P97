var firebaseConfig = {
    apiKey: "AIzaSyAAxl2gL1MWQYS3L_i9_lLj-09QjOzGkEM",
    authDomain: "kwitter-app-a6105.firebaseapp.com",
    databaseURL: "https://kwitter-app-a6105-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-a6105",
    storageBucket: "kwitter-app-a6105.appspot.com",
    messagingSenderId: "716628336475",
    appId: "1:716628336475:web:da4c84a260bb707a7c847e"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room_Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div></hr>" 
    document.getElementById("output").innerHTML += row; 
    //End code
    });});}
getData();
function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);
    window.location="Chat-Me-App_Page.html";
}
function redirectToRoomName(name)
{
    console.log(name)
    localStorage.setItem("room_name",name)
    window.location="Chat-Me-App.html"
}
