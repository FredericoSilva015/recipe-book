export function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        /* Eslint is set in a way not to allow bit wise operator, but htese are very useful if used correctly*/
        /* eslint-disable-next-line no-mixed-operators*/
        let random = Math.random() * 16 | 0, value = c === 'x' ? random : (random & 0x3 | 0x8);
        return value.toString(16);
    });
}
