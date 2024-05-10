import { CardWrapper } from "@/components/auth/card-wrapper";

export const LoginForm = () => {
    return (
        <CardWrapper
            headerLabel="Welcome back"
            backButtonLabel="Don't have an account?"
            backButtonHreft="/auth/register"
            showSocial
        >
            Login Form
        </CardWrapper>
    );
}