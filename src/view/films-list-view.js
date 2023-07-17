import AbstractView from '../framework/view/abstract-view.js';

const createFilmsListViewTemplate = () =>
  `
    <section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
    </div>
`;

export default class FilmsListView extends AbstractView {
  get template() {
    return createFilmsListViewTemplate();
  }
}
