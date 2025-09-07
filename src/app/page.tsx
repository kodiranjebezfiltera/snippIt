'use client';

import { createUser } from '@/features/user';

export default function Home() {
  const handleSave = async () => {
    try {
      await createUser();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handleSave}>Create user</button>
    </div>
  );
}
