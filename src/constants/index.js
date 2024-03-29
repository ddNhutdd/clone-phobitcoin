import { sidebarContent } from "src/redux/slices/user-template"

export const url = {
    home: '/',
    transaction: '/transaction',
    login: '/login',
    forgotPassword: '/forgot-password',
    signUp: '/sign-up',
    knowledge: '/knowledge',
    news: '/news',
    questionAnswer: '/questionAnswer',
    search: '/search',
    contact: '/contact',
    profile: '/profile',
    referral: '/referral',
    buyHistory: '/buy-history',
    sellHistory: '/sell-history',
    changePassword: '/change-password'
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

export const mediaBreakPoint = {
    width_576: 'width_576',
    width_768: "width_768",
    width_992: 'width_992',
    width_1200: 'width_1200',
    width_1400: "width_1400",
    unknown: 'unknown'
}

export const regular = {
    email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
  } 