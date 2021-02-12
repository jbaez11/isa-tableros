

























const url2 = "https://api.coincap.io/v2";

function getAssets() {
  return fetch(`${url2}/assets?limit=20`)
    .then(res => res.json())
    .then(res => res.data);
}

function getAsset(coin) {
  return fetch(`${url2}/assets/${coin}`)
    .then(res => res.json())
    .then(res => res.data);
}

function getAssetHistory(coin) {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);
  const start = now.getTime();
  return fetch(
    `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  )
    .then(res => res.json())
    .then(res => res.data);
}

function getMarkets(coin) {
  return fetch(`${url2}/assets/${coin}/markets?limit=5`)
    .then(res => res.json())
    .then(res => res.data);
}

function getExchange(id) {
  return fetch(`${url2}/exchanges/${id}`)
    .then(res => res.json())
    .then(res => res.data);
}

export default {
  getModules,
  getAssets,
  getAsset,
  getAssetHistory,
  getMarkets,
  getExchange
};
