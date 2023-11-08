

//// adding item to top post
 const catogeryInput = document.querySelector(".post-content input")
const postContent = document.querySelector(".post-content textarea")
const displayContent = document.querySelector(".top-post ul ")

let storeblog = localStorage.getItem("blogContent")
if (storeblog) {
	displayContent.innerHTML = storeblog
};


document.querySelector(".post-content button").addEventListener("click", ()=>{
	userText = postContent.value
	userInput = catogeryInput.value
	if (userText.trim() != "" || userInput.trim() != "") {

		displayContent.innerHTML += `<li> <p>${userText}</p>
		<small>${userInput}</small> </li>`

		localStorage.setItem("blogContent", displayContent.innerHTML)

		postContent.value =""
		catogeryInput.value =""
	};
}) 


const smallText = document.querySelectorAll(".right-content .contents")
const messageSearch = document.querySelector(".search-box input")

const searchMessage = () =>{
	const values = messageSearch.value.toLowerCase()
	smallText.forEach(chat =>{
		let name = chat.querySelector("small").textContent.toLowerCase()
		if (name.indexOf(values) != -1) {
			chat.style.display = 'block'
		}
		else{
			chat.style.display = 'none'
		}
	})
}
messageSearch.addEventListener("keyup", searchMessage)

// //navbars
let closeBtn = document.querySelector("header .close-btn")
let openBtn = document.querySelector("header .open-btn")
openBtn.addEventListener("click", ()=>{
	document.querySelector("header nav").style.left = "0"
})
closeBtn.addEventListener("click", ()=>{
	document.querySelector("header nav").style.left = "100%"
})


////inbox-message
const inbox = document.querySelector("header .inbox-message")
inbox.addEventListener("click", ()=>{
	document.querySelector(".alert").style.top = "5%"
})
const closingInbox = () => {
	document.querySelector(".alert").style.top = "-10%"
	document.querySelector(".alert").style.transition = ".5s"
}
setInterval(closingInbox, 5000) ////settimeout will run once, interval will run continues



////login - open
const loginOpenBtn = document.querySelectorAll(".login-open-btn")
loginOpenBtn.forEach((e)=>{
	e.addEventListener("click", ()=>{
		document.querySelector(".modal-dialog").style.top = "0%"
		document.querySelector(".modal-dialog").style.transition = ".5s"
	})
})


////login - close
const loginCloseBtn = document.querySelector("header .login-close-btn")
loginCloseBtn.addEventListener('click', ()=>{
	document.querySelector(".modal-dialog").style.top = "-80%"
	document.querySelector(".modal-dialog").style.transition = ".5s"
})

//// forms
const loginBtn = document.querySelector(".Login-btn")
loginBtn.addEventListener('click', ()=>{
	let username = document.querySelector("form input[type='text']").value
	let password = document.querySelector("form input[type='password']").value

	localStorage.setItem("username", username)
	localStorage.setItem("password", password)

	
	document.querySelector("form input[type='text']").value = ""
	document.querySelector("form input[type='password']").value = ""

	document.querySelector(".modal-dialog").style.top = "-80%"
})


// //email
let emailClose = document.querySelector(".email-close")
let emailOpen = document.querySelector(".email-open")
emailClose.addEventListener("click", ()=>{
	document.querySelector("#email-sender").style.display = 'none'
})
emailOpen.addEventListener("click", ()=>{
	document.querySelector("#email-sender").style.display = 'grid'
})

