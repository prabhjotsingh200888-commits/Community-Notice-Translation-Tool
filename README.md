# Community Notice Translation Tool

A simple, responsive web project that helps community members view notices in English, Punjabi, Hindi, or Urdu.

## Features

- View notices in English, Punjabi, Hindi, or Urdu
- Search notices and filter them by category
- Health, Education, Safety, and Events categories
- Admin mode for creating and publishing notices
- Built-in English dictionary translation for Punjabi, Hindi, and Urdu
- Pending translation fallback to the English notice
- Publish, scheduled, live, and expired notice states
- Responsive layout and keyboard-accessible navigation
- Urdu right-to-left text support

## Pages

- `index.html` - Main notice board and admin notice form
- `about.html` - Project purpose and project information
- `style.css` - Page layout, responsive design, and notice styling
- `script.js` - Search, filtering, language selection, translation, and notice creation
- `image.png` - Background image used by the stylesheet

## Run the Project

This project does not require a build step or any external packages.

1. Open `index.html` directly in a web browser.
2. For local development, start a server from the project folder:

   ```powershell
   python -m http.server 8000
   ```

3. Visit `http://localhost:8000` in a browser.

## Using the Application

### Visitor

1. Select a language from **Read notices in**.
2. Use the search box to find a notice.
3. Use the category filter to narrow the results.
4. Live notices are shown to visitors.

### Admin

1. Select **Admin** under **Role**.
2. Enter an English title and message.
3. Click **Translate to Punjabi, Hindi and Urdu** to use the built-in dictionary.
4. Review or edit the generated translations.
5. Set the category, publish date, and expiry date.
6. Click **Save notice** to add the notice to the board.

If a translation title or message is left empty, the notice is marked as pending and English is shown as the fallback.

## Translation Notes

The translator uses a small JavaScript dictionary for common terms, days, and phrases. It is intended as a demonstration rather than a complete translation service. Words that are not in the dictionary remain in English.

## Data and Persistence

Notices added during a browser session are stored in the page as HTML and are cleared when the page is refreshed. The project does not use a database, account system, or server-side API.

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
