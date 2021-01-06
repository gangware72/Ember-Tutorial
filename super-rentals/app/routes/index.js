import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  // async model() {
  //   let response = await fetch('/api/rentals.json');
  //   let {data} = await response.json();
    
  //   return data.map(model => {
  //       let {attributes, id} = model;
  //       let type;

  //       if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
  //           type = 'Community';
  //         } else {
  //           type = 'Standalone';
  //         }

  //         return { type, id,  ...attributes };
  //   });
  // }

  @service store;

  async model() {
    debugger
    return this.store.findAll('rental');
  }

}