import React, { useLocation, useNavigate, useParams } from 'react-router-dom';

export const withRouter = (Component) => {
  function ComponentWithRouterProp(props) {
    // to-do: replace let with const
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    const router = {
      location,
      navigate,
      params,
    };

    return <Component {...props} router={router} />;
  }

  return ComponentWithRouterProp;
};
