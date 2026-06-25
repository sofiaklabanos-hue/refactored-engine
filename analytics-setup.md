# Analytics Setup Documentation - PeakClick Agency

This document outlines the tracking implementation for the PeakClick Agency website.

## 1. Global Tracking Snippets

GA4 and GTM snippets have been injected into the `<head>` and `<body>` of all HTML pages.

- **GA4 Tag ID:** `G-TODO-GA4-ID` (Placeholder)
- **GTM Container ID:** `GTM-TODO-GTM-ID` (Placeholder)

The snippets were added automatically using a Python script (`inject_tracking.py`) to ensure consistency across all existing and blog pages.

### Files Modified:
- `index.html`
- `services.html`
- `case-studies.html`
- `about.html`
- `contact.html`
- `blog/index.html`
- `blog/get-more-website-traffic.html`
- `blog/small-business-seo-guide.html`
- `blog/b2b-lead-generation-strategies.html`

## 2. Event Tracking (via `js/script.js`)

Specific user interactions are tracked using custom JavaScript event listeners in `/home/team/shared/website/js/script.js`.

### Form Submission Tracking
- **Target:** The contact form on `contact.html`.
- **Event:** `generate_lead`
- **Data Sent:**
    - `event_category`: `engagement`
    - `event_label`: `Contact Form Submission`
    - `value`: `1.0`

### CTA Click Tracking
- **Target:** All anchor tags linking to `contact.html` (e.g., "Get Started", "Request Audit").
- **Event:** `cta_click`
- **Data Sent:**
    - `event_category`: `conversion`
    - `event_label`: The text content of the button/link clicked.
    - `destination`: The href URL.

## 3. Future Steps
- Replace `G-TODO-GA4-ID` and `GTM-TODO-GTM-ID` with actual account IDs once the client accounts are provisioned.
- Verify event flow in GA4 DebugView.
- Set up conversion goals in GA4 based on these events.
