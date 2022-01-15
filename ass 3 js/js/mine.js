var allBookmarks;
if (localStorage.getItem("BookMarks") == null) {
  var allBookmarks = [];
} else {
  allBookmarks = JSON.parse(localStorage.getItem("BookMarks"));
  renderBookmarks();
}
var bmarkInput = document.getElementById("bmarkInput");
var urlInput = document.getElementById("urlInput");
var searchInput = document.querySelector("#searchInput");
function addBookmark() {
  var oneBookmark = {
    bkName: bmarkInput.value,
    bkUrl: urlInput.value,
  };
  allBookmarks.push(oneBookmark);
  localStorage.setItem("BookMarks", JSON.stringify(allBookmarks));
  clearInputs();
  renderBookmarks();
}

function clearInputs() {
  bmarkInput.value = "";
  urlInput.value = "";
}
function deleteBkMark(productIndex) {
  allBookmarks.splice(productIndex, 1);
  renderBookmarks();
  localStorage.setItem("BookMarks", JSON.stringify(allBookmarks));
}
function searchIn(searchTerm) {
  var searchContainer = ``;
  for (var i = 0; i < allBookmarks.length; i++) {
    if (
      allBookmarks[i].bkName.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      searchContainer += `<tr class="d-flex px-3 py-5 trbkMark">
    <td class="col-4">
    <h3>
    ${allBookmarks[i].bkName}
    </h3>
    </td>
    <td class="col-1">
    <a class="btn btn-primary" href="${allBookmarks[i].bkUrl}">
    Visit
    </a>
    </td>
    <td class="col-1">
        <button onclick="deleteBkMark()" class=" btn btn-danger">
        delete
        </button> 
</td>

    </tr>`;
    }
  }
  document.querySelector("#tbody").innerHTML = searchContainer;
}

function renderBookmarks() {
  var tContainer = ``;
  for (var i = 0; i < allBookmarks.length; i++) {
    tContainer += `<tr class="d-flex px-3 py-5 trbkMark">
    <td class="col-4">
    <h3>
    ${allBookmarks[i].bkName}
    </h3>
    </td>
    <td class="col-1">
    <a class="btn btn-primary" href="${allBookmarks[i].bkUrl}">
    Visit
    </a>
    </td>
    <td class="col-1">
        <button onclick="deleteBkMark()" class=" btn btn-danger">
        delete
        </button> 
</td>

    </tr>`;
  }
  document.querySelector("#tbody").innerHTML = tContainer;
}
