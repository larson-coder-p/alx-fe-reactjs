import React from 'react';

function UserProfile(props) {
  return (
    <div style={{ border: '1px solid gray', borderRadius: '8px', padding: '16px', margin: '16px auto', maxWidth: '400px', background: '#f8f9fa', boxShadow: '0 2px 6px rgba(0,0,0,0.08)' }}>
      <h2 style={{ color: 'blue', fontSize: '2rem', marginBottom: '8px' }}>{props.name}</h2>
      <p style={{ fontSize: '1.1rem', margin: '6px 0' }}>
        Age: <span style={{ fontWeight: 'bold', color: 'darkgreen' }}>{props.age}</span>
      </p>
      <p style={{ color: '#333', fontStyle: 'italic', margin: '6px 0' }}>
        Bio: {props.bio}
      </p>
    </div>
  );
}

export default UserProfile;

