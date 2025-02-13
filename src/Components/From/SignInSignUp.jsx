import { useState } from "react";
import { useForm } from "react-hook-form";

export default function SignInSignUp() {
    const [isLogin, setIsLogin] = useState(false); // Toggle between Sign In and Sign Up
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        alert(`${isLogin ? "Logged In" : "Signed Up"} Successfully!`);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
            >
                <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">
                    {isLogin ? "Log In" : "Sign Up"}
                </h2>

                {/* Email Input */}
                <label className="block text-gray-600 text-sm font-medium mb-2">
                    Email
                </label>
                <input
                    type="email"
                    placeholder="Enter your email"
                    {...register("email", { required: "Email is required" })}
                    className="w-full px-4 py-2 mb-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {errors.email && (
                    <span className="text-red-500 text-sm">{errors.email.message}</span>
                )}

                {/* Password Input */}
                <label className="block text-gray-600 text-sm font-medium mb-2">
                    Password
                </label>
                <input
                    type="password"
                    placeholder="Enter your password"
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters long",
                        },
                    })}
                    className="w-full px-4 py-2 mb-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {errors.password && (
                    <span className="text-red-500 text-sm">{errors.password.message}</span>
                )}

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 mt-4"
                >
                    {isLogin ? "Log In" : "Sign Up"}
                </button>

                {/* Toggle between Sign Up and Log In */}
                <p className="text-sm text-center mt-4 text-gray-600">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                    <button
                        type="button"
                        className="text-blue-500 hover:underline"
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        {isLogin ? "Sign Up" : "Log In"}
                    </button>
                </p>
            </form>
        </div>
    );
}
