
import { useState } from 'react';
export default function UploadLock() {
  const [unlocked, setUnlocked] = useState(false);
  return (
    <div>
      <input type="password" onChange={(e) => {
        if (e.target.value === 'Devil') setUnlocked(true);
        if (e.target.value === 'Angel') setUnlocked(false);
      }} />
      {unlocked ? <p>Upload Access Granted</p> : <p>View-Only Mode</p>}
    </div>
  );
}
