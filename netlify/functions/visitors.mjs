// Live visitor counter for the footer: who has pinged in the last 70s + total sessions.
// Stores only random per-session ids and timestamps (no IPs, no personal data).
import { getStore } from "@netlify/blobs";

const ONLINE_MS = 70_000, MAX_ONLINE = 5000;
const json = (data, status = 200) => new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });

export default async (req) => {
  if (req.method !== "POST" && req.method !== "GET") return json({ error: "method" }, 405);
  const store = getStore({ name: "visitors", consistency: "strong" });
  let body = {};
  if (req.method === "POST") { try { body = await req.json(); } catch {} }
  const id = typeof body.id === "string" && /^[a-z0-9]{8,32}$/i.test(body.id) ? body.id : null;

  const now = Date.now();
  const online = (await store.get("online", { type: "json" })) || {};
  for (const k of Object.keys(online)) if (!(now - online[k] < ONLINE_MS)) delete online[k];
  let total = Number(await store.get("total")) || 0;

  if (id) {
    if (online[id] || Object.keys(online).length < MAX_ONLINE) online[id] = now;
    await store.setJSON("online", online);
    if (body.isNew === true) { total += 1; await store.set("total", String(total)); }
  }
  return json({ online: Math.max(1, Object.keys(online).length), total });
};

export const config = { path: "/api/visitors" };
