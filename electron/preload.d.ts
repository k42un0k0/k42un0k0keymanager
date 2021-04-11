declare interface Window {
    main: {
        debug: () => void,
        close: () => void,
        window: { auth: () => void }
    }
}