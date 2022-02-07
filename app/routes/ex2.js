import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class Ex2Route extends Route {
  @service productServices;

  model() {
    return this.productServices;
  }

  @action
  toggleActive(service) {
    set(service, 'active', !service.active);
  }
}
