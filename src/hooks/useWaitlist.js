import { useState } from 'react';

export const useWaitlist = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const submitToWaitlist = async (data) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            // Send email via API route
            const response = await fetch('/api/send-reservation-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userType: data.userType,
                    name: data.name,
                    email: data.email,
                    phone: data.phone || '',
                    location: data.location,
                    lookingFor: data.lookingFor,
                }),
            });


            console.log('[useWaitlist] Response status:', response.status);

            // Check if response is JSON before parsing
            const contentType = response.headers.get('content-type');
            let result;

            if (contentType && contentType.includes('application/json')) {
                result = await response.json();
            } else {
                // Non-JSON response (likely HTML error page)
                if (response.status === 404) {
                    throw new Error('API route not found. Please use "vercel dev" to test locally, or deploy to Vercel for production.');
                }
                const text = await response.text();
                throw new Error(`Server error: ${response.status}. ${text.substring(0, 100)}`);
            }

            if (!response.ok) {
                throw new Error(result.error || 'Failed to send reservation. Please try again.');
            }

            setSuccess(true);
            return { success: true };
        } catch (err) {
            const errorMessage = err.message || 'Failed to reserve your spot. Please try again.';
            setError(errorMessage);
            return { success: false, error: errorMessage };
        } finally {
            setLoading(false);
        }
    };

    const resetState = () => {
        setError(null);
        setSuccess(false);
        setLoading(false);
    };

    return {
        submitToWaitlist,
        loading,
        error,
        success,
        resetState,
    };
};
