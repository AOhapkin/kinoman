import ApiServices from '../framework/api-service.js';
import { Method } from '../const.js';

export default class CommentsApiService extends ApiServices {
  get = (film) => this._load({ url: `comments/${film.id}` })
    .then(ApiServices.parseResponse)
    .catch(() => null);

  add = async (film, comment) => {
    const response = await this._load({
      url: `comments/${film.id}`,
      method: Method.POST,
      body: JSON.stringify(comment),
      headers: new Headers({ 'Content-Type': 'application/json' })
    });

    const parsedResponse = await ApiServices.parseResponse(response);

    return parsedResponse;
  };

  delete = async (comment) => {
    await this._load({
      url: `comments/${comment.id}`,
      method: Method.DELETE,
      headers: new Headers({ 'Content-Type': 'application/json' })
    });
  };
}
