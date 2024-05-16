import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <main className="flex flex-col items-center justify-center h-screen">
        < SignIn path="/sign-in" />;
        </main>
    )
}