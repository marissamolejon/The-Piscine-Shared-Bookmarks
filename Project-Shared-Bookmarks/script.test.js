// A simple validation function (which we use in script.js)
// script.test.js
import { getUserIds, getData, setData, clearData } from './storage.js';

// --- Validation function from script.js ---
function validateInput(url, title, description) {
  if (!title.trim() || !description.trim())
    return "Title and Description cannot be empty.";
  try {
    new URL(url);
  } catch (_) {
    return "Please provide a valid URL (e.g., https://google.com).";
  }
  return null;
}

// --- Tests for validation ---
describe('validateInput', () => {
  test('fails with invalid URL', () => {
    expect(validateInput('not-a-url', 'Title', 'Desc')).toBe(
      'Please provide a valid URL (e.g., https://google.com).'
    );
  });

  test('fails with empty title or description', () => {
    expect(validateInput('https://google.com', '', 'Desc')).toBe(
      'Title and Description cannot be empty.'
    );
    expect(validateInput('https://google.com', 'Title', '   ')).toBe(
      'Title and Description cannot be empty.'
    );
  });

  test('passes with valid inputs', () => {
    expect(validateInput('https://google.com', 'Google', 'Search engine')).toBe(null);
  });
});

// --- Tests for storage.js ---
describe('storage.js functions', () => {
  const testUser = 'test-user';

  beforeAll(() => {
    // seed test user
    const users = getUserIds();
    if (!users.includes(testUser)) {
      localStorage.setItem('shared-bookmarks-users', JSON.stringify([...users, testUser]));
    }
  });

  afterEach(() => {
    clearData(testUser);
  });

  test('getUserIds includes default and test user', () => {
    const users = getUserIds();
    expect(users).toContain(testUser);
  });

  test('setData and getData work correctly', () => {
    const bookmarks = [
      { id: 1, url: 'https://example.com', title: 'Example', description: 'Desc', createdAt: Date.now(), likes: 0 }
    ];
    setData(testUser, bookmarks);
    const retrieved = getData(testUser);
    expect(retrieved).toEqual(bookmarks);
  });

  test('clearData removes stored bookmarks', () => {
    setData(testUser, [{ id: 1 }]);
    clearData(testUser);
    const retrieved = getData(testUser);
    expect(retrieved).toEqual([]);
  });
});