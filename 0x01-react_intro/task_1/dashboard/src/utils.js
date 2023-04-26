function getFullYear() {
    const a = new Date();
    return a.getFullYear();
}

function getFooterCopy(isIndex) {
    if (isIndex) return "Holberton School";
    return "Holberton School main dashboard"
}

export { getFullYear, getFooterCopy }