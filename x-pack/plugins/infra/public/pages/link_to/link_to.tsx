/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import React from 'react';
import { match as RouteMatch, Redirect, Route, Switch } from 'react-router-dom';

import { RedirectToNodeDetail } from './redirect_to_node_detail';
import { RedirectToNodeLogs } from './redirect_to_node_logs';

interface LinkToPageProps {
  match: RouteMatch<{}>;
}

export class LinkToPage extends React.Component<LinkToPageProps> {
  public render() {
    const { match } = this.props;

    return (
      <Switch>
        <Route
          path={`${match.url}/:nodeType(host|container|pod)-logs/:nodeName`}
          component={RedirectToNodeLogs}
        />
        <Route
          path={`${match.url}/:nodeType(host|container|pod)-detail/:nodeName`}
          component={RedirectToNodeDetail}
        />
        <Redirect to="/home" />
      </Switch>
    );
  }
}
