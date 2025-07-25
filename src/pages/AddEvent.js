import React, { useState } from 'react';
import { db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export default function AddEvent() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const submitEvent = async () => {
    try {
      await addDoc(collection(db, 'events'), {
        title,
        description,
        date
      });
      navigate('/dashboard');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow w-96">
        <h2 className="text-xl font-bold mb-4">Add New Event</h2>
        <input type="text" placeholder="Title" className="w-full mb-2 p-2 border rounded"
               value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder="Description" className="w-full mb-2 p-2 border rounded"
                  value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="date" className="w-full mb-4 p-2 border rounded"
               value={date} onChange={(e) => setDate(e.target.value)} />
        <button onClick={submitEvent} className="w-full bg-blue-500 text-white p-2 rounded">Submit</button>
      </div>
    </div>
  );
}
