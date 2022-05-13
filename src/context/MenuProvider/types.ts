export interface IContext {
    isOpen: boolean
    setIsOpen: (newState: boolean) => void
}

export interface IChildren {
    children: JSX.Element
}