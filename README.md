# api を作る

- https://console.cloud.google.com/apis/

# apis/youtube.js に記載

- セキュリティ上の問題で一旦 igunore

- 雛形こんな感じ
- axios もインポート

```
import axios from "axios";

const KEY = "xxxx";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});

```
