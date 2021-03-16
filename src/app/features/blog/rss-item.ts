export class RssItem {
  categories: Array<string> = [];
  creator = '';
  isoDate = new Date(Date.now());
  link = '';
  pubDate = new Date(Date.now());
  title = '';

  constructor(values: Partial<RssItem> = {}) {
    Object.assign(this, values);
  }
}
