function path(root, sublink) {
  return `${root}/${sublink}`;
}

const ROOT = "/";

const ROOTS_ISLAM = "/islam";

const ROOTS_MOBILES = "/mobiles";

const ROOTS_EDUCATION = "/education";

const ROOTS_FINANCE = "/finance";
const ROOTS_PROFILE = "/profiles";

const ROOTS_BLOGS_AND_ARTICLES = "/blogs-&-articles";
const ROOTS_DIRECTORIES = "/directories";

const ROOTS_JOBS = "/jobs";

export const PATH_INFOKIDUNYA = {
  root: ROOT,

  // ISLAM HERE
  islam: ROOTS_ISLAM,
  quran: path(ROOTS_ISLAM, "al-quran"),
  hadith: path(ROOTS_ISLAM, "hadith"),
  specialIslamicDays: path(ROOTS_ISLAM, "special-islamic-days"),
  poetry: path(ROOTS_ISLAM, "islam-poetry"),
  islamicBooks: path(ROOTS_ISLAM, "islamic-book"),
  world: path(ROOTS_ISLAM, "world"),

  // MOBILES HERE
  mobiles: ROOTS_MOBILES,
  allBrands: path(ROOTS_MOBILES, "all-brands"),

  // EDUCATION HERE
  education: ROOTS_EDUCATION,
  results: path(ROOTS_EDUCATION, "results"),
  boards: path(ROOTS_EDUCATION, "results/board"),
  universities: path(ROOTS_EDUCATION, "results/universities-result"),
  entrytest: path(ROOTS_EDUCATION, "results/entry-test"),

  // FINANCE HERE
  finance: ROOTS_FINANCE,
  forex: path(ROOTS_FINANCE, "forex"),
  worldcurrencies: path(ROOTS_FINANCE, "forex/world-currencies"),
  moneychangerinpakistan: path(
    ROOTS_FINANCE,
    "forex/money-changer-in-pakistan"
  ),
  stockexchanges: path(ROOTS_FINANCE, "stock-exchanges"),
  companies: path(ROOTS_FINANCE, "stock-exchanges/companies"),
  registrars: path(ROOTS_FINANCE, "stock-exchanges/registrars"),
  sectors: path(ROOTS_FINANCE, "stock-exchanges/sectors"),
  goldrates: path(ROOTS_FINANCE, "gold-rates"),

  goldratesweight: path(ROOTS_FINANCE, "gold-rates/weight"),

  prizebonds: path(ROOTS_FINANCE, "prizebonds"),
  silverrate: path(ROOTS_FINANCE, "silver-rate"),
  cryptocurrencies: path(ROOTS_FINANCE, "crypto-currencies"),

  // PROFILE HERE
  profiles: ROOTS_PROFILE,

  // BLOGS&ARTICLES HERE
  blogsAndArticles: ROOTS_BLOGS_AND_ARTICLES,

  // DIRECTORIES HERE
  directories: ROOTS_DIRECTORIES,

  // DIRECTORIES HERE
  jobs: ROOTS_JOBS,
};
