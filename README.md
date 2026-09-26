# Signup Landing

Landing page that lists users from the assignment's REST API and lets a visitor register through a validated sign-up form with a photo upload. Built in January 2022 as a take-home assignment.

**Live demo:** [test-task-layout.vercel.app](https://test-task-layout.vercel.app)

## Features

- The header buttons and the hero button scroll smoothly to the users list and the sign-up form, and the logo scrolls back to the top.
- The users list loads six users at a time. Show more appends the next page and disappears after the last one.
- User cards show the photo (with a fallback image if it fails to load), name, position, an email link and a phone link, with `+380` numbers formatted as `+38 (0XX) XXX XX XX`. Long names, positions and emails are cut with an ellipsis and shown in full in a tooltip.
- The sign-up form asks for a name, email, phone, a position from radio buttons loaded from the API and a photo. Formik and Yup check a name of 2 to 60 characters, a valid email, a phone of `+380` and nine digits, and a JPEG photo of at least 70x70 px and at most 5 MB.
- The Sign up button stays disabled until the form is valid. During the request the fields are locked and a preloader replaces the button.
- Registration first requests a token from the API, then posts the form as `multipart/form-data`. Server validation errors are listed under the form.
- After a successful sign-up a confirmation modal opens, the form resets and the users list reloads from the first page.

## Tech stack

- **Framework:** React 17, TypeScript 4
- **State:** Redux Toolkit 1, React Redux 7
- **Data:** Axios 0.26
- **UI:** Material UI 5 with Emotion 11, react-image 4, react-scroll 1
- **Styling:** SCSS (Dart Sass 1), classnames, Nunito from Google Fonts
- **Forms:** Formik 2, Yup 0.32
- **Tooling:** Create React App 5 with react-app-rewired, ESLint 8 (Airbnb config, typescript-eslint, simple-import-sort), Stylelint 14, Prettier 2, circular-dependency-plugin 5
- **Hosting:** Vercel

## Getting started

Requires Node.js 16 or 18 and Yarn 1; the assignment's REST API is public and needs no key.

```bash
git clone https://github.com/androfficial/react-signup-landing.git
cd react-signup-landing
yarn install
yarn start
```

## Scripts

| Command | Description |
| --- | --- |
| `yarn start` | Starts the development server |
| `yarn build` | Builds the production bundle into `build/` |
| `yarn eslint` | Lints the `.ts` and `.tsx` files |
| `yarn eslint:fix` | Lints the `.ts` and `.tsx` files and fixes what it can |
| `yarn stylelint` | Lints the SCSS files in `src/styles/` |
| `yarn stylelint:fix` | Lints the SCSS files and fixes what it can |
| `yarn format` | Checks formatting with Prettier |
| `yarn format:fix` | Formats the files with Prettier |

## Project structure

```text
src/
  api/          Axios instance and requests: users, positions, token, registration
  assets/       logo, hero images, preloader and the fallback user photo
  components/   Header, User card, tooltip, modal, server error list, preloader
  helpers/      phone formatting and the email and phone regular expressions
  hooks/        typed useAppDispatch and useAppSelector
  schemes/      Yup schema of the sign-up form
  sections/     Intro, Users and Register sections of the page
  store/        Redux Toolkit store and the users slice
  styles/       SCSS: variables, reset, blocks and sections
  types/        API and component types
```

## Notes

- All requests live in `src/api/api.ts`. The users slice wraps them in `createAsyncThunk` and keeps the list, pagination links, submit state and server errors in the Redux store.
- In development, `config-overrides.js` adds Stylelint and `circular-dependency-plugin`, which fails the build on an import cycle.
