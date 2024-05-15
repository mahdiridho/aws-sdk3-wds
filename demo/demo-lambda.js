import { LitElement, html } from 'lit';
import '../aws-lambda';

/** Example demo element for testing element loading
*/
class DemoLambda extends LitElement {
  render() {
    return html`
      <aws-lambda></aws-lambda>
    `;
  }

  get lambda() {
    return this.shadowRoot.querySelector("aws-lambda")
  }

  /**
   * Lifecycle called after DOM updated on the first time
   * Pulling the app config and waiting for the sts state
   */
  firstUpdated() {
    this.lambda.setLocalConfig("test-project", "us-east-1")
  }
}
customElements.define('demo-lambda', DemoLambda);
