import { CardsView } from "./cardsView.js";
import { Controller } from "./controller.js";
import { ModalView } from "./modalView.js";
import { Model } from "./model.js";
import { StatsView } from "./statsView.js";

const EventMediator = {
  events: {},
  on: function (eventName, callbackfn) {
    this.events[eventName] = this.events[eventName]
      ? this.events[eventName]
      : [];
    this.events[eventName].push(callbackfn);
  },
  emit: function (eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(function (callBackfn) {
        callBackfn(data);
      });
    }
  },
};
window.EventMediator = EventMediator;
function main() {
  const model = new Model();
  const controller = new Controller(model);
  new StatsView(controller);
  new CardsView(controller);
  new ModalView(controller);
}
main();
