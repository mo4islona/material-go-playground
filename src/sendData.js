export default function sendData(data) {
  const urlEncodedDataPairs = [];

  for (const name in data) {
    urlEncodedDataPairs.push(`${encodeURIComponent(name)}=${encodeURIComponent(data[name])}`);
  }

  return urlEncodedDataPairs.join('&').replace(/%20/g, '+');
}
