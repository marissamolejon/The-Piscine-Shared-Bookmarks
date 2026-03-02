// This is a placeholder file which shows how you can access functions defined in other files.
// It can be loaded into index.html.
// You can delete the contents of the file once you have understood how it works.
// Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server
// You can't open the index.html file using a file:// URL.

import { getUserIds, getData, setData } from "./storage.js";

// --- DOM elements ---
const userSelect = document.getElementById("user-select");
const bookmarkList = document.getElementById("bookmark-list");
const emptyMessage = document.getElementById("empty-message");
const bookmarkForm = document.getElementById("bookmark-form");
const formError = document.getElementById("form-error");

// --- DISPLAY LOGIC ---
function renderBookmarks(userId) {
  bookmarkList.innerHTML = "";

  if (!userId) {
    emptyMessage.hidden = true;
    return;
  }

  const bookmarks = getData(userId);


  if (!bookmarks || bookmarks.length === 0) {
    emptyMessage.hidden = false;
    return;
  }

  emptyMessage.hidden = true;

  // sort: new to old
  const sorted = [...bookmarks].sort((a, b) => b.createdAt - a.createdAt);

  sorted.forEach((bookmark) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <article>
        <h3><a href="${bookmark.url}" target="_blank">${bookmark.title}</a></h3>
        <p>${bookmark.description}</p>
        <time datetime="${new Date(bookmark.createdAt).toISOString()}">
          Added on: ${new Date(bookmark.createdAt).toLocaleString()}
        </time>
        <div style="margin-top: 10px;">
          <button class="copy-btn" data-url="${bookmark.url}">Copy URL</button>
          <button class="like-btn" data-id="${bookmark.id}">
            Like (<span>${bookmark.likes || 0}</span>)
          </button>
        </div>
      </article>
      <hr>
    `;
    bookmarkList.appendChild(li);
  });
}

// --- VALIDATION ---
function validateInput(url, title, description) {
  if (!title.trim() || !description.trim()) return "Title and Description cannot be empty.";
  try { new URL(url); } catch (_) { return "Please provide a valid URL (e.g., https://google.com)."; }
  return null;
}

// --- EVENT HANDLERS ---


function init() {

  const users = getUserIds();
  users.forEach((id) => {
    const option = document.createElement("option");
    option.value = id;
    option.textContent = id;
    userSelect.appendChild(option);
  });
}

userSelect.addEventListener("change", (e) => renderBookmarks(e.target.value));


bookmarkForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const userId = userSelect.value;
  if (!userId) { alert("Select a user first!"); return; }

  const url = document.getElementById("url").value;
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;


  const error = validateInput(url, title, description);
  if (error) { formError.textContent = error; return; }
  formError.textContent = "";

  const newBookmark = {
    id: Date.now(),
    url, title, description,
    createdAt: Date.now(),
    likes: 0
  };


  const currentData = getData(userId);
  currentData.push(newBookmark);
  setData(userId, currentData);


  bookmarkForm.reset();
  renderBookmarks(userId);
});

// Copy & Like button delegation
bookmarkList.addEventListener("click", (e) => {
  const userId = userSelect.value;
  if (!userId) return;

  // Copy URL
  if (e.target.classList.contains("copy-btn")) {
    navigator.clipboard.writeText(e.target.dataset.url);
    const originalText = e.target.textContent;
    e.target.textContent = "Copied!";
    setTimeout(() => e.target.textContent = originalText, 1500);
  }
});


init();
