import { GetExamplesApiResult } from '../data-transfer/example/get-examples.api-result';
import ApiService from './api.service';

export default class ExampleService extends ApiService {
  public getExamples() {
    return this.apiGet<GetExamplesApiResult>('/examples', {}, false);
  }

  public getExample(exampleID: number) {
    return this.apiGet<GetExamplesApiResult>(
      `/examples/${exampleID}`,
      {},
      false,
    );
  }
}
