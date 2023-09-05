import AuthLayout from '@/components/layout/AuthLayout';
import Seo from '@/components/Seo';
export default function login() {
  return (
    <AuthLayout>
      <Seo title='Login' />
      <h1>Login</h1>
    </AuthLayout>
  );
}
