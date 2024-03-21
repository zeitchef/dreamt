# dreamit

This is a coding challenge solution submitted by Scott Voyles in application for the role of Frontend Developer at dreamIT GmbH. For more information, please see [Technical Notes](./README.md#technical-notes).

## The Task

Create a website for a lottery supplier using a fictive brand of your choice. The website has to contain a welcome page greeting the visitor as well as a lottery page for eurojackpot only.

The lottery page has to contain the drawing results which have to be fetched from the existing GraphQL endpoint http://www.lottohelden.de/graphql. (You might need to install the https://github.com/garmeeh/local-cors-proxy ‑ package to reach the endpoint from your local environment.)

KEEP IT SIMPLE - remember: we're not looking for a full-blown business application, but a basis for discussion and further development. A simple text output for the result will do.

Please be sure to take care of the following things:

- Vuejs, Typescript and GraphQL have to be used. You may use a component library of your choice.
- The implementation should contain one or more components (i.e. be component based).
- The website should be responsive - by using CSS preprocessing.
- The application has to be tested (you can skip browser-tests).

You should follow clean code best practices, keep your solution simple and keep in mind that your implementation will be the base for discussions, refactoring and extension.

## Project Setup

Install dependencies and start development server:

```sh
pnpm install && pnpm dev
```

Start proxy-server:

```sh
pnpm proxy
```

## Technical Notes

- This project uses Vue 3, TypeScript and GraphQL.
- I've taken the words "KEEP IT SIMPLE" very much to heart. This project won't win any design awards, and I did not focus too much on it. Rather, I wanted to present the fundamentals of what every good web project needs, in my opinion: component-based, responsive, tested, focused on usability (error states, empty states, 404, etc), well-documented, and clean code.
- I honestly did struggle a bit with setting up the cors-proxy initially, and trace these struggles back to using a different proxy server than the one that was suggested.
