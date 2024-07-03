export class Ui {
  constructor() {}
  DisplayHomeGames(apiRes) {
    let BlackBox = ``;
    for (let i = 0; i < apiRes.length; i++) {
      BlackBox += `
               <div class="col-xl-3 col-lg-6  ">
               <div   class="card h-100 bg-transparent" gameId="${
                 apiRes[i].id
               }">
                  <div  class="card-body">
                     <figure class="position-relative">
                        <img class="card-img-top img-fluid h-100" src="${
                          apiRes[i].thumbnail
                        }" />
                     </figure>
         
                     <caption>
         
                        <div class="justify-content-between d-flex">
                           <h6 class=" small text-white col-6">${
                             apiRes[i].title
                           }</h6>
                           <span class="btn text-bg-primary py-1 col-3">Free</span>
                        </div>
         
                        <p class="card-text small text-center opacity-50 text-light my-2">
                           ${apiRes[i].short_description.split(" ", 7)}
                        </p>
         
                     </caption>
                  </div>
         
                  <footer class="card-footer small  justify-content-between d-flex">
                      <small class="text-white fw-medium col-4 ">${
                        apiRes[i].genre
                      }</small>
                     <small class="text-white fw-medium  col-4 ">${
                       apiRes[i].platform
                     }</small>
                  </footer>
               </div>
            </div>
               `;
    }

    document.getElementById("DisplayGames").innerHTML = BlackBox;
  }
  DisplayDetalies(data)
  {
let DetailsBOx=` <div class="col-md-4">
            <img src="${data.thumbnail}" class="w-100" alt="${data.title}" />
         </div>
         <div class="col-md-8">
            <h3 class="text-white">Title: ${data.title}</h3>
            <p class="text-white">Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
            <p class="text-white">Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
            <p class="text-white">Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
            <p class="text-white h6 fw-lighter" >${data.description}</p>
            <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
         </div>`;
document.getElementById('displayDetails').innerHTML=DetailsBOx;
  }
}
