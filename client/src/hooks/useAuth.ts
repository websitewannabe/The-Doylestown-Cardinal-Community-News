import { useQuery, useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

interface User {
  id: number;
  username: string;
}

interface LoginCredentials {
  username: string;
  password: string;
}

export function useAuth() {
  const navigate = useNavigate();

  const { data: user, isLoading } = useQuery<User>({
    queryKey: ['auth'],
    queryFn: async () => {
      const response = await fetch('/api/auth/check');
      if (!response.ok) {
        throw new Error('Not authenticated');
      }
      return response.json();
    },
    retry: false
  });

  const loginMutation = useMutation({
    mutationFn: async (credentials: LoginCredentials) => {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      
      if (!response.ok) {
        throw new Error('Invalid credentials');
      }
      
      return response.json();
    },
    onSuccess: () => {
      navigate('/admin');
    },
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch('/api/logout', {
        method: 'POST',
      });
      
      if (!response.ok) {
        throw new Error('Logout failed');
      }
    },
    onSuccess: () => {
      navigate('/login');
    },
  });

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    login: loginMutation.mutate,
    logout: logoutMutation.mutate,
    loginError: loginMutation.error,
    isLoggingIn: loginMutation.isPending
  };
}
