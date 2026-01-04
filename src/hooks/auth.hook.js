import { useNavigate } from "react-router";
import { useSearchParams } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "@/schemas/auth.schema";
import { axiosPublic } from "@/configs/axios.config";







//sign in
export const useSignIn = () => {
    const [params] = useSearchParams();
    const navigate = useNavigate();
    const redirectUrl = params.get("redirect");

    const form = useForm({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const { mutate, isPending } = useMutation({
        mutationFn: async (credentials) => {
            const res = await axiosPublic.post("/auth/login", credentials);
            return res.data;
        },
        onSuccess: (data) => {
            if (data?.status) {
                toast.success(data?.message || "Sign in successfully");
                const token = data?.token;
                localStorage.setItem("token", token);
                const user = data?.data;
                localStorage.setItem("user", JSON.stringify(user));

                if (redirectUrl) {
                    navigate(redirectUrl);
                } else {
                    navigate("/");
                }
            } else {
                toast.error(data?.message || "Failed to sign in");
            }
        },
        onError: (error) => {
            const message =
                error?.response?.data?.message ||
                error?.response?.data?.error || // fallback to `data.error`
                error.message ||
                "Failed to sign in";

            // Handle email-specific error
            if (
                typeof message === "string" &&
                message.toLowerCase().includes("email")
            ) {
                form.setError("email", { message });
            } else {
                toast.error(message);
            }
        },
    });

    return { form, mutate, isPending };
};