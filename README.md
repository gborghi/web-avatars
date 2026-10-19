# web-avatars

Avatar 3D da importare in un'altra pagina. Il repo è pubblico: un sito non può leggere un repo privato senza un token, e un token nel JavaScript del browser è visibile a chiunque.

## Da un'altra app

```javascript
import { avatar, play } from "https://cdn.jsdelivr.net/gh/gborghi/web-avatars@v2/avatars.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const spec = await avatar("druido-cappuccio");
const gltf = await new GLTFLoader().loadAsync(spec.url);
const mixer = new THREE.AnimationMixer(gltf.scene);
play(mixer, gltf.animations, "wave");
```

`spec.clips` elenca i nomi. Nel loop: `mixer.update(delta)`.

Le mosse vengono da clip Kimodo già pronte, licenza NVIDIA Open Model License. Il modello è generato in locale.

Il file da solo, senza il modulo:

`https://cdn.jsdelivr.net/gh/gborghi/web-avatars@v2/avatars/druido-cappuccio/druido-cappuccio.glb`

## Aggiungerne uno

Copiare il `.glb` in `avatars/<id>/` e aggiungere una riga in `catalog.json`. Poi un tag nuovo (`v2`, `v3`): jsDelivr tiene in cache il tag, non si aggiorna da solo.
