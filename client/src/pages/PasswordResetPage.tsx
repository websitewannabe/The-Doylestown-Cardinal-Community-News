import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Lock, Mail } from "lucide-react";

interface RequestResetForm {
  username: string;
}

interface ResetPasswordForm {
  password: string;
  confirmPassword: string;
}

const PasswordResetPage = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const { register: registerRequest, handleSubmit: handleRequestSubmit } = useForm<RequestResetForm>();
  const { register: registerReset, handleSubmit: handleResetSubmit } = useForm<ResetPasswordForm>();

  const onRequestReset = async (data: RequestResetForm) => {
    try {
      const response = await fetch('/api/reset-password/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to request password reset');
      }

      setSuccess('Password reset instructions have been sent. Please check your email.');
      setError(null);
    } catch (err: any) {
      setError(err.message);
      setSuccess(null);
    }
  };

  const onResetPassword = async (data: ResetPasswordForm) => {
    if (data.password !== data.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('/api/reset-password/reset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token,
          newPassword: data.password,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to reset password');
      }

      setSuccess('Password has been reset successfully. You can now login with your new password.');
      setError(null);
      setTimeout(() => navigate('/login'), 3000);
    } catch (err: any) {
      setError(err.message);
      setSuccess(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#F2F0EF] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">
            {token ? 'Reset Password' : 'Forgot Password'}
          </h1>
          <p className="text-gray-600">
            {token
              ? 'Enter your new password'
              : 'Enter your username to receive password reset instructions'}
          </p>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
            {success}
          </div>
        )}

        {!token ? (
          <form onSubmit={handleRequestSubmit(onRequestReset)}>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  {...registerRequest("username", { required: "Username is required" })}
                  className="pl-10 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                  placeholder="Enter your username"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-cardinal-red hover:bg-cardinal-red/90 text-white py-2 px-4 rounded-lg"
            >
              Send Reset Instructions
            </button>
          </form>
        ) : (
          <form onSubmit={handleResetSubmit(onResetPassword)}>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                New Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  {...registerReset("password", { required: "Password is required" })}
                  className="pl-10 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                  placeholder="Enter new password"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm New Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  {...registerReset("confirmPassword", { required: "Please confirm your password" })}
                  className="pl-10 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                  placeholder="Confirm new password"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-cardinal-red hover:bg-cardinal-red/90 text-white py-2 px-4 rounded-lg"
            >
              Reset Password
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default PasswordResetPage;
