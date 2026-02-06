const store = require('app-store-scraper');

const id = Number(process.argv[2]);
const country = process.argv[3] || 'cn';
const page = Number(process.argv[4] || 1);
const sortArg = (process.argv[5] || 'RECENT').toUpperCase();

const sort = sortArg === 'HELPFUL' ? store.sort.HELPFUL : store.sort.RECENT;

store
    .reviews({ id, country, page, sort })
    .then((reviews) => {
        process.stdout.write(JSON.stringify(reviews));
    })
    .catch((error) => {
        const message = error && error.message ? error.message : String(error);
        console.error(message);
        process.exit(1);
    });
