import { details } from "./details.module.js";
import { Ui } from "./ui.module.js";

export class Home {
  constructor() {
    
    const navLinkEls = document.querySelectorAll(".nav-link");
    //!==calling function for refresh==//
    this.getGames("mmorpg");
    //!== chanching category==//
    navLinkEls.forEach((navLink) => {
      navLink.addEventListener("click", () => {
        document.querySelector(".active")?.classList.remove("active");
        navLink.classList.add("active");
        let category = navLink.getAttribute("category");
        this.getGames(category);
      });
    });
    this.ui = new Ui();
    this.details = new detailes();
  }
  //!=====get dynamic data from api====//
  async getGames(category = "mmorpg") {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "03f594d8a5msh10cf9e4d65537f1p13236cjsned57c81d4758",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const gameCategoryApi = await fetch(
      ` https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
      options
    );
    const response = await gameCategoryApi.json();
    console.log(response);
    this.ui.DisplayHomeGames(response);
     document.querySelectorAll('.card').forEach(card=>
      {
        card.addEventListener('click',()=>
        {
          document.getElementById('details').classList.remove('d-none');
          document.getElementById('home').classList.add('d-none');
          this.details=new details(card.getAttribute('gameId'));
          console.log('hello')
        })
      }
     )
    return response;
  }
}
