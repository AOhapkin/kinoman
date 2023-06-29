import { createElement } from '../render.js';
import { createFilmCardInfoTemplate } from './film-card-info-template.js';
import { createFilmCardControlsTemplate } from './film-card-controls-template.js';

const createFilmCardViewTemplate = () =>
  `
    <article class="film-card">
      ${createFilmCardInfoTemplate()}
      ${createFilmCardControlsTemplate()}
    </article>
`;

export default class FilmCardView {
  getTemplate() {
    return createFilmCardViewTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
