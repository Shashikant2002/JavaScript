"use strict";
const searchForm = document.getElementById("searchForm");
const inputSearch = document.getElementById("inputSearch");
const allUsersRender = document.getElementById("allUsersRender");
async function dataFatcher(url, option) {
    const res = await fetch(url, option);
    if (!res.ok) {
        throw new Error(`Network is not ok. Status ${res.status}`);
    }
    const data = await res.json();
    //   console.log(data);
    return data;
}
function showResult(userInfo) {
    //   console.log(userInfo);
    allUsersRender.insertAdjacentHTML("beforeend", `<div class="col-3 p-2">
  <div class="card w-100 my-2 px-3 py-4">
    <img style="height: 300px;     object-fit: contain;" src="${userInfo.image}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${userInfo.title.slice(0, 20)}</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up
        the bulk of the card's content.
      </p>
      <!-- <a href="${userInfo.id}" class="btn btn-primary">Open Repo</a> -->
    </div>
  </div>
</div>`);
}
async function fetchUserData(url) {
    const data = await dataFatcher(url, {});
    for (let userInfo of data) {
        showResult(userInfo);
    }
}
fetchUserData("https://fakestoreapi.com/products");
searchForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    try {
        const data = await dataFatcher(`https://fakestoreapi.com/products`);
        const searchTearm = inputSearch.value.toLowerCase();
        const matching = data.filter((urers) => {
            return urers.title.toLowerCase().includes(searchTearm);
        });
        console.log(matching);
        allUsersRender.innerHTML = "";
        if (matching.length === 0) {
            allUsersRender.insertAdjacentHTML("beforeend", `<h4>Product Not Found</h4>`);
        }
        else {
            for (let userInfo of matching) {
                showResult(userInfo);
            }
        }
    }
    catch (error) {
        console.log(error);
    }
});
