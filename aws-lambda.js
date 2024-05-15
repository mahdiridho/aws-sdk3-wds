import { AwsLambda } from "./src/AwsLambda";
export { AwsLambda };

if(!window.customElements.get('aws-lambda')) { window.customElements.define('aws-lambda', AwsLambda) }
