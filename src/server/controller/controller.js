// @flow

export const homePage = () => null

export const feedPage = () => ({
  feed: {
    inputValue: '',
    placehold: 'input feed',
    feedList: [],
  },
})

export const userPage = () => ({
  user: {
    userName: 'anonymous',
    inputName: '',
  },
})
