import { sidebarContent } from "src/redux/slices/user-template"

export const url = {
    home: '/',
    transaction: '/transaction',
    login: '/login',
    forgotPassword: '/forgot-password',
    signUp: '/sign-up'
}

export const apiStatus = {
    pending: 'pending',
    fetching: 'fetching',
    fulfilled: 'fulfilled',
    rejected: 'rejected'
}

export const actionType = {
    buy: "Mua",
    sell: "Bán"
}

export const sidebarDefault = {
    [sidebarContent.posts]: false,
    [sidebarContent.history]: true,
    [sidebarContent.chains]: true
}

export const regular = {
    email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
  } 