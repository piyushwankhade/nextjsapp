// pages/index.js (Sender App)
"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import CryptoJS from 'crypto-js';

const secretKey = 'VDvl9V1Cu8K7OeoV6wDNjxucmSfDcY7r'; // Must be 32 bytes long

const encryptData = (data:any) => {
  const iv = CryptoJS.lib.WordArray.random(16);
  const encrypted = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(secretKey), {
    iv: iv,
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC
  });
  return iv.toString() + ':' + encrypted.toString();
};

export default function Dashboard() {
  const [data, setData] = useState('');
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleEncryptAndSend = () => {
    if (!mounted) return; // Ensure router is only used after component is mounted
    const encryptedData = encryptData(data);
    router.push(`/receiver?data=${encodeURIComponent(encryptedData)}`);
  };

  return (
    <div>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={handleEncryptAndSend} disabled={!mounted}>Send Encrypted Data</button>
    </div>
  );
}
