const API_URL = 'https://script.google.com/macros/s/AKfycby-e9hZEHLRHvuRdv8qR_OrmtlSkvk3BvnK6Ci_x5W7s_orJakl4LQAX-yGHpdAR7T3bw/exec';

async function apiGet(table) {
  const res = await fetch(`${API_URL}?table=${encodeURIComponent(table)}`);
  const json = await res.json();
  if (json.error) throw new Error(json.error);
  return json;
}

async function apiPost(payload) {
  const res = await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(payload)
  });
  const json = await res.json();
  if (json.error) throw new Error(json.error);
  return json;
}