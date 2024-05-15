/*!
 * Copyright 2017-2018 Flatmax Pty Ltd
 * You may not retain, use nor modify this file without written consent from
 * Flatmax Pty Ltd.
 */

import { LitElement } from 'lit';

/** Common code for objects
*/
export class Core2Common extends LitElement {
  static get properties() {
    return {
      project: { type: String }, // the resource prefix name
      region: { type: String }
    };
  }

  setLocalConfig(project, region) {
    if (!project)
      return console.log("Required project name")
    if (!region)
      return console.log("Required region")
    this.project = project;
    this.region = region;
  }

  /** Lifecycle updated */
  updated(updates) {
    if (updates.has('project'))
      this.projectChanged()
    if (updates.has('region'))
      this.regionChanged()
  }

  error(e) {
    console.log(e)
  }

  projectChanged() { }

  regionChanged() { }
}