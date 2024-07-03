import { Ui } from "./ui.module.js";

export class details {
  constructor(id) {
    document.getElementById('close').addEventListener('click',()=>
    {
      document.getElementById('details').classList.add('d-none');
          document.getElementById('home').classList.remove('d-none');
    })
    this.getDetails(id);
  }
  async getDetails(id) {
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '03f594d8a5msh10cf9e4d65537f1p13236cjsned57c81d4758',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    const gameCategoryApi = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      options
    );
    const detailsResponse = await gameCategoryApi.json();
    new Ui().DisplayDetalies(detailsResponse);
    console.log(detailsResponse);
}}
