### Testing Record
## Validation Function (validateInput)
### Purpose
The goal of these tests was to verify the input validation logic used in script.js for adding bookmarks. The function ensures that:

1. Title and description are not empty.
2. URL is properly formatted (must be a valid URL).
```
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
```
### Test Cases

1. Ensures function detects malformed URLs.
```
test('validation fails with invalid URL', () => {
    const result = validateInput('not-a-url', 'My Title', 'My Desc');
    expect(result).toBe('Invalid URL');
});
```

2. Ensures function catches missing required fields.
```
test('validation fails with empty fields', () => {
    const result = validateInput('https://google.com', '', '  ');
    expect(result).toBe('Empty fields');
});
```

3. Confirms function allows correctly formatted input.
```
test('validation passes with correct data', () => {
    const result = validateInput('https://google.com', 'Google', 'Search engine');
    expect(result).toBe(null);
});
```