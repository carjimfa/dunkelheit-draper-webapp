import {RssItem} from './rss-item';

export class RssResponse {
  items: Array<RssItem> = [];
  description = '';
  feedUrl = '';
  lastBuildDate: Date = new Date(Date.now());
  link = '';
  title = '';
  webmaster = '';

  constructor(values: Partial<RssResponse> = {}) {
    Object.assign(this, values);
  }
}
