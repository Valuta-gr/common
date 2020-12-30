const envIsProvided = (arr: Array<string>) => {
    arr.forEach(key => {
        if (!process.env[key]) {
            throw new Error(`${key} must be defined`);
        }
    });
};

export { envIsProvided };