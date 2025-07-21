import Link from 'next/link';
import { Button } from './components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8">
          <div className="text-6xl font-bold text-primary-orange mb-4">404</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or you might have entered the wrong URL.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link href="/">
            <Button variant="primary" size="lg" className="w-full">
              Go to Homepage
            </Button>
          </Link>
          
          <Link href="/contact">
            <Button variant="outline" size="lg" className="w-full">
              Contact Support
            </Button>
          </Link>
        </div>
        
        <div className="mt-8">
          <p className="text-sm text-gray-500">
            Need help? Email us at{' '}
            <a 
              href="mailto:Hello@metic.ai" 
              className="text-primary-orange hover:underline"
            >
              Hello@metic.ai
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
