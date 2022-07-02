import React from 'react';
// eslint-disable-next-line import/no-named-as-default
import MainPage from './entities/MainPage';
import PageLayout from './layouts/PageLayout';

const App = () => {
  return (
    <PageLayout>
      <MainPage />
    </PageLayout>
  );
};

export default App;
