
var firebaseConfig = {
      apiKey: "AIzaSyDXyJih_QJamc7KFfU6bVYiz633dlsnD1Q",
      authDomain: "kwitter-app-96c6a.firebaseapp.com",
      databaseURL: "https://kwitter-app-96c6a-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-96c6a",
      storageBucket: "kwitter-app-96c6a.appspot.com",
      messagingSenderId: "644020362086",
      appId: "1:644020362086:web:92cec17759fa73504006a7"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  


    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addRoom()
    {
          room_name = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });

          localStorage.setItem("room_name", room_name);

          window.location = "kwitter_page.html";
    }


    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - "  + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row 
      });
});


}

getData();


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

