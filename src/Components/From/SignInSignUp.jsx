import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function SignInSignUp({ setAuth }) {
    const [isLogin, setIsLogin] = useState(false);

    // ✅ Validation Schema with Yup
    const schema = yup.object().shape({
        email: yup.string().email("Invalid email format").required("Email is required"),
        password: yup
            .string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        setAuth(true);
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-zinc-900 p-6">
            {/* ✅ Legitbook Logo - Centered Above the Form */}
            <div className="text-4xl md:text-6xl  font-semibold text-white mb-20">
                Legit<span className="text-blue-600">book</span>
            </div>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-gray-800 shadow-white shadow-sm p-6 rounded-lg shadow-lg w-full max-w-md"
            >
                <h2 className="text-2xl font-semibold text-white text-center mb-4">
                    {isLogin ? "Log In" : "Sign Up"}
                </h2>

                {/* Email Input */}
                <label className="block text-gray-400 text-sm font-medium mb-2">Email</label>
                <input
                    type="email"
                    placeholder="Enter your email"
                    {...register("email")}
                    className="w-full px-4 py-2 mb-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {errors.email && (
                    <span className="text-red-500 text-sm">{errors.email.message}</span>
                )}

                {/* Password Input */}
                <label className="block text-gray-400 text-sm font-medium mb-2">Password</label>
                <input
                    type="password"
                    placeholder="Enter your password"
                    {...register("password")}
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
                <p className="text-sm text-center mt-4 text-gray-400">
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
