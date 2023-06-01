import { Model } from "./model.js";
import { Controller } from "./controller.js";
import { mainView } from "./mainView.js";
import { cardView } from "./cardView.js";

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
  new mainView(controller);
  new cardView(controller);
}
main();
