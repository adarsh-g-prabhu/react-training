'use server'

export async function registerUser(formData: FormData) {
    const email = formData.get('email') as string;
    const name = formData.get('name') as string;
    const password = formData.get('password') as string;

    try {
        
        const response = await fetch('http://localhost:3002/register', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ email, password , name}),
        });

        if (!response.ok) {
            return {
                success: false,
                errors: await response.json()
            };
        }

        const data = await response.json();
        return {
            success: true,
            data
        };

    } catch (error) {
        return {
            success: false,
            errors: { message: 'Registration failed' }
        };
    }
}