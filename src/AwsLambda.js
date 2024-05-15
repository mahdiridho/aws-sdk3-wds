import { Core2Common } from './Core2Common';
import { LambdaClient } from "@aws-sdk/client-lambda";

export function LambdaMixing(base) {
  let lambda = {};
  return class extends base {
    static get properties() {
      return {
        functionName: { type: String }, // Lambda function name
      };
    }

    regionChanged() {
      console.log("AAA")
      lambda[this.project] = new LambdaClient({
        region: this.region
      });
    }
  }
}

export class AwsLambda extends LambdaMixing(Core2Common) { }