const nom = document.getelemntbyid("BookForm")

const title = document.getelemntbyid("Book title")
const author = document.getelemntbyid("Author")
const pubyear = document.getelemntbyid("Publication Year")
const Genre = document.getelemntbyid("Letteraly Genre")


let books = JSON.parse(localStorage.getItem("books")) || [];
