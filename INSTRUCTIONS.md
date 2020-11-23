# Front-End Coding Challenge

## Requirements

- The challenge is to build a simple login authentication app. There are two screens, the homepage at `/`, and the login page at `/login`.
- A logged out user should be taken to the login page. Upon successful authentication they should be redirected to the homepage with a personalized welcome message. Finally they should be able to log out and be redirected to the login page.
- A basic Auth service is provided to mock the api.
- Fork this project and share the link to your work when you're done. If you'd prefer to work on this locally, you can download the project from CodeSandbox by going to File > Export to Zip. You can submit your completed project as a new zip or github repo.

## Restrictions

- For your convenience, this example is built in React and Next using hooks and functional components. You're welcome to rewrite this exercise in Vue/Nuxt, however, as that is the preferred framework at Bambee.
- Styled JSX is available by default with Next (https://nextjs.org/blog/styling-next-with-styled-jsx) as a CSS-in-JS library. You are free to use it if you desire, or you can use any other CSS implementation method.
- You must NOT use any CSS frameworks or component libraries like Bootstrap, Foundation, or Bulma. However you may use low-level utilities like CSS resets or normalizers, as well as atomic/utility CSS libraries.

## What we're looking for

Beyond the thing actually working, we're interested in your architectural choices within the application code. The design and user acceptance criteria are left intentionally vague so that you're free to be expressive and go deep with your solution. That being said, remember that this is primarily a front-end assessment so be mindful of things like user experience, accessibility, semantics, browser compatibility, and performance. While you're not expected to be a designer, the result is expected to have some level of visual polish.

## Extra credit

You're encouraged to spend no more than 8 hours on this challenge, however if you end up with time to spare this is a chance to show off a bit more of your coding chops and design sensibilities. In /assets/task-manager.png there is a mockup for a Task Manager page. Please build out a new page in the app at /task-manager that is only accessible to logged in users and is a demo implementation of that mockup.
