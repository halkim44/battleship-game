import '../styles.css';
import View from './view';
import Model from './model';
import Controller from './controller';

const model = Model();
let controller = Controller(model);
View(controller, model.events);