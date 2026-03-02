// This is a scaffolding file we have provided for you which allows you to manage stored data for your application.
// It can be loaded into index.html.
// You should not need to modify it to complete the project.

const USERS_KEY = "shared-bookmarks-users";
const DATA_PREFIX = "shared-bookmarks-data-";

function initializeUsers() {
  const existing = localStorage.getItem(USERS_KEY);

  if (!existing) {
    const defaultUsers = [
      "user1",
      "user2",
      "user3",
      "user4",
      "user5",
    ];
    localStorage.setItem(USERS_KEY, JSON.stringify(defaultUsers));
  }
}

function seedDemoBookmarks() {
  const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  const now = Date.now();

  const demoData = {
    user1: [
      {
        id: now + 1,
        url: "https://git-scm.com/cheat-sheet",
        title: "Git Cheat Sheet",
        description: "Official Git command reference and quick help guide.",
        createdAt: now - 800000,
        likes: 0,
      },
      {
        id: now + 2,
        url: "https://luisdalmolin.dev/blog/ignoring-files-in-git-without-gitignore/",
        title: "Ignoring Files in Git Without .gitignore",
        description: "Learn how to ignore files locally without modifying .gitignore.",
        createdAt: now - 700000,
        likes: 0,
      },
    ],

    user2: [
      {
        id: now + 3,
        url: "https://chrome.dev/anchor-tool/",
        title: "Chrome Anchor Tool",
        description: "Tool for debugging and positioning CSS anchor elements.",
        createdAt: now - 600000,
        likes: 0,
      },
      {
        id: now + 4,
        url: "https://macarthur.me/posts/long-tasks/",
        title: "Understanding Long Tasks in JavaScript",
        description: "How long tasks block the main thread and affect performance.",
        createdAt: now - 500000,
        likes: 0,
      },
    ],

    user3: [
      {
        id: now + 5,
        url: "https://filemock.com/",
        title: "FileMock",
        description: "Generate mock files quickly for development and testing.",
        createdAt: now - 400000,
        likes: 0,
      },
      {
        id: now + 6,
        url: "https://developer.mozilla.org",
        title: "MDN Web Docs",
        description: "Comprehensive documentation for web technologies.",
        createdAt: now - 300000,
        likes: 0,
      },
    ],

    user4: [
      {
        id: now + 7,
        url: "https://stackoverflow.com",
        title: "Stack Overflow",
        description: "Community Q&A platform for developers.",
        createdAt: now - 200000,
        likes: 0,
      },
      {
        id: now + 8,
        url: "https://modernfontstacks.com/",
        title: "Modern Font Stacks",
        description: "System font stacks for modern web design.",
        createdAt: now - 100000,
        likes: 0,
      },
    ],

    user5: []
  };

  Object.entries(demoData).forEach(([userId, bookmarks]) => {
    const key = DATA_PREFIX + userId;

    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, JSON.stringify(bookmarks));
    }
  });
}

// Run initialization
initializeUsers();
seedDemoBookmarks();

// ------------------
// Required API
// ------------------

export function getUserIds() {
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
}

export function getData(userId) {
  if (!userId) return [];
  const data = localStorage.getItem(DATA_PREFIX + userId);
  return data ? JSON.parse(data) : [];
}

export function setData(userId, data) {
  if (!userId) return;
  localStorage.setItem(DATA_PREFIX + userId, JSON.stringify(data));
}

export function clearData(userId) {
  localStorage.removeItem(DATA_PREFIX + userId);
}

/**
 * Get a list of user ids
 *
 * @returns {string[]} List of user id strings
 */
export function getUserIds() {
  return ["1", "2", "3", "4", "5"];
}

/**
 * Get data associated with a specific user.
 *
 * @param {string} userId The user id to get data for
 * @returns {any | null} The data associated with the user
 */
export function getData(userId) {
  return JSON.parse(localStorage.getItem(`stored-data-user-${userId}`));
}

/**
 * Store data for a specific user.
 *
 * @param {string} userId The user id to store data for
 * @param {any} data The data to store
 */
export function setData(userId, data) {
  localStorage.setItem(`stored-data-user-${userId}`, JSON.stringify(data));
}

/**
 * Clears all data associated with a specific user. NOTE: This is provided to help with development, and is not required in the final code
 *
 * @param {string} userId The user id to clear associated data for
 */
export function clearData(userId) {
  localStorage.removeItem(`stored-data-user-${userId}`);
}
