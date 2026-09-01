// Copy content/assets -> public/assets so Next can serve the note images.
// content/ is the source of truth (relative paths there render on github.com);
// public/assets is generated and gitignored.
import { cp, rm } from 'node:fs/promises'

await rm('public/assets', { recursive: true, force: true })
await cp('content/assets', 'public/assets', { recursive: true })
console.log('synced content/assets -> public/assets')
