// import { type SchemaTypeDefinition } from 'sanity'

// export const schema: { types: SchemaTypeDefinition[] } = {
//   types: [],
// }


import resource from './resource.schema';
import resourcePlaylist from './resource-playlist.schema';

const schemas = [resource, resourcePlaylist]

export default schemas;