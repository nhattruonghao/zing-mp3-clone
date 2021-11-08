import React from 'react'
import { Route } from 'react-router';
import Content from '../../components/Content';

function ContentLayoutRoute(props) {
    const { component: YourComponent, ...remainProps } = props;
    return (
        <Route
        {...remainProps}
        render={(routeProps) => {
          return (
            <Content {...remainProps}>
              <YourComponent {...routeProps} />
            </Content>
          );
        }}
      />
    )
}

export default ContentLayoutRoute
