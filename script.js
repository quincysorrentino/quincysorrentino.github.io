

document.getElementById("sendButton").addEventListener("click", function() {
    let name = document.getElementById("nameEntry").value;
    let message = document.getElementById("messageEntry").value;

    if (!name){
        alert("Please enter a name");
        return;
    }

    if (!message){
        alert("Please enter a message");
        return;
    }

    let subject = `Message from ${encodeURIComponent(name)}`;
    let body = encodeURIComponent(message.replace(/\n/g, "%0A")); // Handle newlines

    window.location.href = `mailto:qsorrentino@wisc.edu?subject=${subject}&body=${body}`;
});
