import Route from '@ember/routing/route';
import Abstractroute from './AbstractRoute';
import { action } from '@ember/object';
import RSVP from 'rsvp';

export default class OrderRoute extends Abstractroute {
  model(params) {
    return this.store.findRecord('order', params.order_id, {
      include: 'orderdetails.product,user',
    });
  }

  @action logout() {
    this.userAuth.logout();
    this.refresh();
  }
}
