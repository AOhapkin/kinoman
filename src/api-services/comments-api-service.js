import ApiServices from '../framework/api-service.js';

export default class CommentsApiService extends ApiServices {
  get = (film) => this._load({ url: `comments/${film.id}` })
    .then(ApiServices.parseResponse)
    .catch(() => null);
}
