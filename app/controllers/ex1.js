import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Ex1Controller extends Controller {
  @tracked content = '';
  MAX = 100;
  @tracked info = '';
  get size() {
    return this.MAX - this.content.length;
  }

  get style() {
    if(this.size < 15){
        return 'danger';
    } else if(this.size < 50){
      return 'warning';
    } else{
      return 'info';
    }
  }

  @action update() {
    this.info = 'Note modifiée';
  }
  @action save() {
    this.info = 'Note sauvegardée';
  }

  @action clear() {
    this.content = '';
  }
}
