// Add your code here
function submitData(name, email) {
    const formData = {
        name: name,
        email: email,
      };

    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    fetch("http://localhost:3000/users", configObj)
        .then(resp => {
            return resp.json();
        })
        .then(json => {
            console.log(json.id)
            document.body.innerHTML += `${json.id}`
        })
        .catch(function(error) {
            alert("serious!")
            console.log(error.message)
            document.body.innerHTML += `${error.message}`
        });

}


  
