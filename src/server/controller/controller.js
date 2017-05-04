// @flow

export const homePage = () => null

export const helloPage = () => ({
  hello: { message: 'Server-side preloaded message' },
})

export const helloAsyncPage = () => ({
  hello: { messageAsync: 'Server-side preloaded message for async page' },
})

export const helloEndpoint = (num: number) => ({
  serverMessage: `Hello from the server! (received ${num})`,
})

export const feedPage = () => ({
  feed: {
    inputValue: '',
    placehold: 'input feed',
    feedList: [
      {
        postUser: 'Dummy ASD',
        message: 'Content',
        id: 1,
      },
      {
        postUser: 'Dummy ASD',
        message: 'Content',
        id: 2,
      },
    ],
  },
})
