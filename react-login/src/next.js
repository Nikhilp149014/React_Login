import React from 'react';
import { LinkedInCallback } from 'react-linkedin-login-oauth2';
import { BrowserRouter, Route } from 'react-router-dom';

function Demo() {
  return (
    <BrowserRouter>
      <Route exact path="/linkedin" component={LinkedInCallback} />
    </BrowserRouter>
  );
}