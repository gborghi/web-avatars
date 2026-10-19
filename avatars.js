const root = new URL(".", import.meta.url);

export async function list() {
  const data = await fetch(new URL("catalog.json", root)).then((r) => {
    if (!r.ok) throw new Error("catalogo non trovato");
    return r.json();
  });
  return data.avatars.map((item) => ({
    ...item,
    url: new URL(item.file, root).href,
    previewUrl: new URL(item.preview, root).href,
  }));
}

export async function avatar(id) {
  const all = await list();
  const item = all.find((a) => a.id === id);
  if (!item) throw new Error("avatar sconosciuto: " + id);
  return item;
}

export function play(mixer, animations, name) {
  const clip = animations.find((c) => c.name === name);
  if (!clip) return null;
  mixer.stopAllAction();
  return mixer.clipAction(clip).reset().play();
}
