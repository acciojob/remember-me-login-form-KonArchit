let btn = document.querySelector('#submit')
        let checkbox = document.querySelector('#mycheck')
        let user = document.querySelector('#username')
        let pass = document.querySelector('#password')
        let username, password

        user.addEventListener('input', (e)=>{
	        username = e.target.value
            console.log(username)
        })

        pass.addEventListener('input', (e)=>{
	        password = e.target.value
            console.log(password)
        })

        checkbox.addEventListener('click', (e)=>{
            if(checkbox.checked){
            localStorage.setItem("username", username)
            localStorage.setItem("password", password)
            console.log("Data Saved")
        }
        else{
            localStorage.removeItem("username")
            localStorage.removeItem("password")
        }
        console.log(e)
        })
        
        btn.addEventListener('click', (e)=>{
            e.preventDefault()
	        alert(`Logged in as ${username}`)
        })