import React from 'react';
import MetaDataCustom from '../components/Common/MetaDataCustom/MetaDataCustom';
import Carousel from '../components/HomePage/Carousel/Carousel';
import Subscription from '../components/HomePage/Subscription/Subscription';
import SubscriptionsTable from '../components/HomePage/SubscriptionsTable/SubscriptionsTable';
import Footer from '../components/HomePage/HomePageFooter/HomePageFooter';

const HomePage = () => {
  return (
    <div>
      <MetaDataCustom
        title="GraphQL courses and articles - Javascript, React and Node.js"
        description="Learn how to build modern Javascript apps with GraphQL courses and articles, with a focus on technologies such as GraphQL, React, Apollo and Node.js."
      />
      <header>
        <Carousel />
      </header>
      <main>
        <SubscriptionsTable />
        <Subscription />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;