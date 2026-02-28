// A simple validation function (which we use in script.js)
function validateInput(url, title, description) {
    if (!title.trim() || !description.trim()) {
        return "Empty fields";
    }
    try {
        new URL(url);
        return null; // no errors
    } catch (_) {
        return "Invalid URL";
    }
}

// test
test('validation fails with invalid URL', () => {
    const result = validateInput('not-a-url', 'My Title', 'My Desc');
    expect(result).toBe('Invalid URL');
});

test('validation fails with empty fields', () => {
    const result = validateInput('https://google.com', '', '  ');
    expect(result).toBe('Empty fields');
});

test('validation passes with correct data', () => {
    const result = validateInput('https://google.com', 'Google', 'Search engine');
    expect(result).toBe(null);
});