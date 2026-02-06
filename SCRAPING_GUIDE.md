# Data Collection Guide

This project includes scripts for collecting user reviews from multiple sources:

## 1. App Store Reviews (`fetch_reviews.js`)

### Description
Node.js script that uses the `app-store-scraper` package to fetch reviews from the Chinese App Store.

### Usage
```bash
node fetch_reviews.js <app_id> <country> <page> <sort>
```

### Parameters
- `app_id`: Numeric App Store ID
- `country`: Country code (default: 'cn' for China)
- `page`: Page number (default: 1)
- `sort`: Sort order - 'RECENT' or 'HELPFUL' (default: 'RECENT')

### Example
```bash
node fetch_reviews.js 414603431 cn 1 RECENT
```

### Output
Returns JSON array of reviews to stdout.

### Setup
```bash
npm install app-store-scraper
```

---

## 2. Weibo Search (`weibo-search/`)

### Description
Scrapy-based web scraper for collecting Weibo posts mentioning specific keywords (e.g., "QQ音乐").

### Structure
```
weibo-search/
├── scrapy.cfg              # Scrapy configuration
├── requirements.txt        # Python dependencies
├── weibo/
│   ├── spiders/
│   │   └── search.py      # Main spider
│   ├── items.py           # Data models
│   ├── pipelines.py       # Data processing
│   ├── middlewares.py     # Request/response middleware
│   ├── settings.py        # Scraper settings
│   └── utils/             # Helper functions
└── 结果文件/               # Output directory
```

### Key Features
- Date-range filtering
- Region-specific search
- Keyword-based search
- Configurable result limits
- Multiple output formats (CSV, JSON, MongoDB, MySQL)

### Configuration (in `settings.py`)
- `KEYWORD_LIST`: Keywords to search (e.g., ['QQ音乐', '网易云音乐'])
- `START_DATE` / `END_DATE`: Date range
- `WEIBO_TYPE`: Content type filter
- `REGION`: Geographic filter
- `LIMIT_RESULT`: Maximum results

### Usage
```bash
cd weibo-search
pip install -r requirements.txt
scrapy crawl search
```

### Output
Results saved in `结果文件/` directory with filenames based on keywords.

---

## Data Processing

After collection, reviews are processed through:
1. Data cleaning and normalization
2. Gemini 2.0 Flash API for sentiment analysis and moat detection
3. Aggregation and statistical analysis
4. Visualization generation

See `Reviews and Gemini.ipynb` for the complete analysis pipeline.
