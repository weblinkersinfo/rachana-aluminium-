import React from 'react';
import { ConnectHero } from '../components/connect/ConnectHero';
import { GetInTouch } from '../components/connect/GetInTouch';
import { InquiryForm } from '../components/connect/InquiryForm';
import { VisitShowroom } from '../components/connect/VisitShowroom';
import { ConnectFinalCTA } from '../components/connect/ConnectFinalCTA';
import './Connect.css';

export const Connect = () => {
  return (
    <main className="connect-page">
      <ConnectHero />
      <GetInTouch />
      <InquiryForm />
      <VisitShowroom />
      <ConnectFinalCTA />
    </main>
  );
};
