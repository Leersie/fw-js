import Service from '@ember/service';
import { dProducts, dPromos } from 'td1/data/datas';

export default class ProductServicesService extends Service {
  products = dProducts;
  promos = dPromos;

  get activeServices() {
    return dProducts.filterBy('active', true);
  }

  get countActive() {
    return this.activeServices.length;
  }

  get sumActive() {
    return this.activeServices.reduce(function (somme, current) {
      return somme + current.price;
    }, 0);
  }
}
