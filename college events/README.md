# Campus Events

Campus Events is a small website prototype for a college event program. It gives students a friendly place to discover campus activities, check dates and venues, read about an example event, and find a registration form.

The site is built with plain HTML and CSS, so it is easy to open, learn from, and adapt. The pages use sample event information and are intended as a front-end demonstration, not as a live event-management service.

## Start here

There is no build step or package installation. Open `index.html` in a browser to explore the site.

You can also serve the folder locally. In a terminal opened in this project directory, run:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>. Stop the server with `Ctrl+C` when you are finished.

## Explore the website

All the pages share a header navigation and footer, so you can move around the prototype from any screen.

### Home — `index.html`

The landing page introduces the site with a campus-life hero section and links to the Events and About pages. It highlights four sample events, followed by a set of event categories. The numbers in the hero panel are static display examples; they are not calculated from registrations or the events shown below.

### About — `about.html`

This page explains the project's goals: engaging students, building community, and creating opportunities. It also introduces four kinds of activities represented in the sample content: technical events, cultural events, sports, and workshops or seminars.

### Events — `events.html`

This page displays eight sample event cards. Each card includes a category, date, short description, image, and a **View Details** link. The links currently all open the same `event-details.html` page, which contains information about Tech Fest 2026.

The search-shaped control at the top is only a visual placeholder. It does not search or filter the event cards.

### Schedule — `schedule.html`

The schedule presents six sample events in a table, with their dates, times, venues, categories, and a **View** link. At the moment, every **View** link leads to the same Tech Fest 2026 details page rather than event-specific information.

### Event details — `event-details.html`

This is the detail page for the sample Tech Fest 2026 event. It shows its date, time, venue, category, an overview, and links to the registration page. Some navigation labels say “Contact,” but that link also opens this event-details page; a separate contact page or contact form is not included.

### Register — `register.html`

The registration screen lays out fields for a name, email, phone number, department, event choice, an optional message, and agreement to event rules. It is currently a form mock-up: there is no registration service, and no submission is saved or confirmed. Because the form has no `action` or `method`, a submit uses the browser's default GET behavior and reloads the page with entered values in the URL. Do not enter real personal information into this prototype. The fields are not marked as required, although browsers may still apply basic format checking to a populated email field.

## What works today

- Links in the navigation, page content, and footer move between the included HTML pages.
- The home page links to the event list and About page.
- Event cards and schedule rows link to the event-details page.
- Registration calls to action open the registration form.
- The layout uses a shared stylesheet and includes responsive CSS rules to adapt its grids, navigation, and footer for narrower screens.
- The registration inputs are standard HTML controls, including text, email, telephone, dropdown, checkbox, and message fields.

## What is still a prototype

This project has no JavaScript application logic, backend, database, or external form service. In particular:

- Event names, descriptions, dates, times, venues, categories, and homepage statistics are hard-coded into the HTML.
- The Events search control does not filter or search.
- Event links do not select different detail records; they all point to Tech Fest 2026.
- The registration form does not validate, submit to a server, store entries, or confirm a successful registration.
- The social-media links use `#` placeholders and do not lead to social profiles.
- The photographs used in the page backgrounds and event cards are loaded from Unsplash URLs, so those images require an internet connection. `hero banner.jpeg` is included in the folder but is not currently referenced by the HTML pages.

## Project files

```text
.
├── README.md             Project overview and usage guide
├── index.html            Home page and featured events
├── about.html            Project mission and event categories
├── events.html           Sample event-card listing
├── schedule.html         Sample event schedule table
├── event-details.html    Tech Fest 2026 sample details
├── register.html         Registration form layout
├── styles.css            Shared layout, colors, and responsive styling
├── hero banner.jpeg      Included image asset (not currently used in the pages)
└── test.js               Standalone JavaScript practice examples
```

`test.js` is separate from the website. It demonstrates JavaScript array and product-data operations—such as `push`, `pop`, `slice`, `splice`, `includes`, `filter`, `map`, `reduce`, `sort`, and `some`—and writes its results to the browser console or Node.js output. It is not loaded by any page. Some comments and example values in that practice file do not match the data directly above them, so treat it as an exercise rather than website functionality.

## Built with

- **HTML** for the page structure, content, links, schedule, and form controls.
- **CSS** in `styles.css` for shared colors, typography, cards, layout, and responsive behavior.
- **JavaScript** in `test.js` for standalone learning exercises only; the website itself does not currently use JavaScript.

## Making it your own

For a campus-specific version, start by editing the sample content in the HTML pages:

1. Update the event cards in `index.html` and `events.html`.
2. Keep the names, dates, times, venues, and categories consistent with the table in `schedule.html`.
3. Replace the sample Tech Fest content in `event-details.html` or create a separate details page for each event and update the corresponding links.
4. Update the department and event options in `register.html` to match the events you offer.
5. Replace the placeholder social links with the correct destinations.
6. Adjust the colors, spacing, cards, and responsive layouts in `styles.css`.
7. Replace the sample hero and event images. The current remote images are set as CSS background images in the HTML.

To make this a working event service, the search control needs filtering behavior, and the form needs validation plus a destination for registration data, such as an API or form provider. Event details and schedule entries would also need to come from a shared data source or be kept in sync manually.
