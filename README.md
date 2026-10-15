# Kashifa's Web Projects

This folder brings together two small, beginner-friendly web projects. One is a personal profile website; the other is a campus events website. Both are made from straightforward HTML and CSS, so you can open the pages in a browser and explore or edit them without installing a framework.

## The two projects

### `Doodleblue/` — Personal profile and HTML form practice

This folder contains two different exercises:

- **`kashifa.html`** is a simple welcome page introducing Kashifa and linking to the profile.
- **`about me.html`** is a personal portfolio-style page. It presents education, skills, internship experience, projects, semester results, a career goal, a profile photo, and a LinkedIn link.
- The profile page includes a contact form with name, email, message, and areas of interest. It points to `submit_form.php`; that server-side file is not included, so the form is a layout and will not successfully send a message as-is.
- **`test.html`** demonstrates common HTML form controls: text, email, password, phone, date, dropdown, textarea, file upload, checkboxes, radio buttons, submit, and reset. The form posts to `/preferences`, which also requires a server endpoint that is not included here.
- **`styles.css`** styles the profile pages with responsive layouts, panels, buttons, tables, and a profile-photo treatment.
- **`test.css`** styles the form-control exercise. The selector written as `=legend` appears to be a typo, so that particular rule will not style the fieldset legend.
- **`kashifa.jpg`** is the profile image used on the About Me page.
- **`.vscode/launch.json`** is an editor launch configuration. Its current file path refers to a different location, so it may need updating before it can be used on another computer.

To view the profile, open `Doodleblue/kashifa.html` and use its link to visit the profile page. To view the form exercise, open `Doodleblue/test.html`.

### `college events/` — Campus Events website

This folder contains a multi-page static site for exploring sample campus activities:

- **`index.html`** introduces the site, highlights four events, and links to the event list and About page.
- **`about.html`** describes the site's mission and the technical, cultural, sports, and workshop event categories.
- **`events.html`** shows eight sample event cards with categories, dates, descriptions, images, and detail links. The search control is visual only and does not filter events.
- **`schedule.html`** lists six events with dates, times, venues, categories, and links.
- **`event-details.html`** shows the sample Tech Fest 2026 details and registration links. Currently, the event cards and schedule links all lead to this one detail page.
- **`register.html`** displays a registration form for contact details, department, event choice, and an optional message. It has no server connection, so it does not save or confirm registrations. The form has no `action` or `method`; submitting it uses the browser's default GET behavior and can put entered values into the page URL. Do not enter real personal information.
- **`styles.css`** provides the shared visual design and responsive layout for the pages.
- **`hero banner.jpeg`** is an image asset included in this project; the current page imagery is set to remote Unsplash URLs in the HTML.
- **`test.js`** contains standalone JavaScript exercises for arrays and product data. It is not loaded by the website.
- **`README.md`** inside this folder has a more detailed guide to the Campus Events website, how to run it, and its current limitations.

To view the site, open `college events/index.html`. For a local web server, open a terminal in `college events/` and run:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>. Stop the server with `Ctrl+C`.

## Technology and current scope

The projects use HTML for content and form controls, and CSS for presentation. The Campus Events website has no JavaScript behavior; the JavaScript file in that folder is only an independent exercise. The forms shown in both folders require server-side endpoints that are not included. Event data, profile content, and displayed figures are examples written directly into the HTML rather than information loaded from a database.

## Editing the projects

- Change page text and links in the relevant HTML file.
- Update colors, spacing, layouts, and responsive rules in the corresponding CSS file.
- Keep event names, dates, times, and venues consistent across the Campus Events home, event list, schedule, and details pages.
- Replace sample images and profile information with content you have permission to use.
- To make either form functional, connect it to a working server endpoint and add appropriate validation and privacy protections.
