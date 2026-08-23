import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 bg-graphite-950 text-slate-100">
      <Container size="sm" className="text-center space-y-6">
        <div className="inline-block text-6xl font-extrabold font-mono text-brand-500">404</div>
        <h1 className="text-3xl font-bold text-slate-100">Page Not Found</h1>
        <p className="text-slate-400 text-sm max-w-md mx-auto">
          The page or case study route you requested does not exist or has been moved.
        </p>
        <div className="pt-4 flex items-center justify-center gap-4">
          <Button href="/" variant="primary" icon={<Home className="w-4 h-4" />}>
            Return Home
          </Button>
          <Button href="/work" variant="secondary" icon={<ArrowLeft className="w-4 h-4" />}>
            View Selected Work
          </Button>
        </div>
      </Container>
    </div>
  );
};
