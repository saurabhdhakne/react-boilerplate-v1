import React, { useState } from 'react';
import useSubmit from '../../hooks/useSubmit';

const Form: React.FC = () => {
  const [input, setInput] = useState('');
  const { data, loading, error, handleSubmit } = useSubmit<any>();
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleSubmit('https://myapiurl/submit', { query: input });
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your query"
      />
      <button type="submit" disabled={loading}>Submit</button>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && <div>Response: {JSON.stringify(data)}</div>}
    </form>
  );
};

export default Form;