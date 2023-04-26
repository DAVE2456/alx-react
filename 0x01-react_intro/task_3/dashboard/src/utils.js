function getFullYear() {
    const a = new Date();
    return a.getFullYear();
}

function getFooterCopy(isIndex) {
    if (isIndex) return "Holberton School";
    return "Holberton School main dashboard"
}

function getLatestNotification() {
    return <span><strong>Urgent requirement</strong> - complete by EOD</span>
}

export { getFullYear, getFooterCopy, getLatestNotification }