const button = document.querySelector("button");
const menu = document.querySelector(".nav_active");
function toggleMenu() {
  button.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
}
toggleMenu();
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    menu.classList.remove("open");
  }
});

function List() {
   let listItems = document.querySelectorAll("li");
    listItems.forEach(listItem=>{
      listItem.addEventListener("click",()=>{
        listItems.forEach(items=>{
          items.classList.remove("font-bold");
          items.classList.remove("text-[#589167]")
        })
        listItem.classList.add("font-bold")
        listItem.classList.add("text-[#589167]")
      })
    })
}
List()