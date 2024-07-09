// pages/receiver.js (Receiver App)
"use client";
import { useEffect, useState } from 'react';
import { useRouter,useSearchParams  } from 'next/navigation';
import CryptoJS from 'crypto-js';

const secretKey = 'VDvl9V1Cu8K7OeoV6wDNjxucmSfDcY7r'; // Must be the same key and 32 bytes long

const decryptData = (data:any) => {
  const [iv, encrypted] = data.split(':');
  const decrypted = CryptoJS.AES.decrypt(encrypted, CryptoJS.enc.Utf8.parse(secretKey), {
    iv: CryptoJS.enc.Hex.parse(iv),
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC
  });
  return decrypted.toString(CryptoJS.enc.Utf8);
};

export default function Receiver() {
  const [decryptedData, setDecryptedData] = useState('');
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const searchParams = useSearchParams()

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    
    const data = searchParams.get('data')
    if (mounted && data) {
      const decodedData = decodeURIComponent(data);
      const decrypted = decryptData(decodedData);
      setDecryptedData(decrypted);
    }
  }, [mounted]);

  return (
    <div>
      <h1>Decrypted Data:</h1>
      <p>{decryptedData}</p>
    </div>
  );
}
