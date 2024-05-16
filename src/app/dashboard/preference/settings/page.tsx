import { UserButton } from "@clerk/nextjs";
import { auth } from '@clerk/nextjs/server';

export default function Home() {
  const { userId } = auth();

  if (!userId) {
    return (
      <main>
        <p>You must be signed in to view this page.</p>
      </main>
    );
  }

  return (
    <main>
      <UserButton />
    </main>
  );
}
