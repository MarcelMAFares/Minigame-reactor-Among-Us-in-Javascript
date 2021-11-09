Swal.fire({
    title: "Welcome to my minigame of Among Us. Let's find out if you are a impostor or crewmate",
    text: "Please, input your name:",
    input: 'text',
    showCancelButton: false        
  }).then((result) => {
  if (result.value) {
    $("#visit").html("HELLO, " + result.value.toUpperCase() + "!")
  }else
    $("#visit").html("HELLO, CREWMATE!")
});

function editVisitName() {
  document.getElementById("visit")
  Swal.fire({
    title: "Changing your name? Very suspicious...",
    text: "Input a new name:",
    input: 'text',
    showCancelButton: false        
  }).then((result) => {
  if (result.value) {
    $("#visit").html("Hello, " + result.value.toUpperCase() + "!")
  }else
    $("#visit").html("HELLO, CREWMATE!")
});

}