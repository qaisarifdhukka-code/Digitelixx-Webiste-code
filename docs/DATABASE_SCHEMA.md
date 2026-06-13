# 5. Database Design

## Overview
This application is a **Static Site** (Frontend only). There is no active database connected to this project. 

The website's content (Case Studies, Testimonials, Services) is currently **hardcoded** into the respective React components inside the `src/components/` directory.

### Future Considerations (CMS Integration)
If a Headless CMS (like Sanity, Strapi, or Contentful) is integrated in the future to manage content dynamically during build time, the conceptual database architecture would look like this:

#### Conceptual Tables (No actual DB currently exists):
1. **Case_Studies**
   - `id` (UUID, Primary Key)
   - `client_name` (String)
   - `title` (String)
   - `description` (Text)
   - `roi_metric` (String)
   - `features` (Array of Strings)

2. **Testimonials**
   - `id` (UUID, Primary Key)
   - `author_name` (String)
   - `company` (String)
   - `quote` (Text)

#### ER Diagram (Conceptual)
```text
[ Case_Studies ]
  |-- id (PK)
  |-- client_name
  |-- title
  |-- description

[ Testimonials ]
  |-- id (PK)
  |-- author_name
  |-- quote
```
