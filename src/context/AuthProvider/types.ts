export interface IContext {
    isAuth: boolean
    authenticate: (email: string, password: string) => Promise<void>
    logout: () => void
}

export interface IAuthChildren {
    children: JSX.Element
}