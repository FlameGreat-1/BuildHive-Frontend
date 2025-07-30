import React, { useState } from 'react';

export default function EmailList() {
  const [emails, setEmails] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const addEmail = () => {
    const trimmed = input.trim();
    if (trimmed && !emails.includes(trimmed)) {
      setEmails([...emails, trimmed]);
      setInput('');
    }
  };

  const removeEmail = (emailToRemove: string) => {
    setEmails(emails.filter(email => email !== emailToRemove));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addEmail();
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="flex mb-4">
        <input
          type="email"
          className="flex-1 border border-gray-300 rounded-l px-3 py-2 focus:outline-none"
          placeholder="Enter email"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={addEmail}
          className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {emails.map((email) => (
          <li
            key={email}
            className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded"
          >
            <span>{email}</span>
            <button
              onClick={() => removeEmail(email)}
              className="text-red-500 hover:text-red-700"
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}