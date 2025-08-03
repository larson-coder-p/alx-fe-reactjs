import React from 'react';

const UserList = ({ users }) => {
  if (!users || users.length === 0) {
    return <p>No users to display.</p>;
  }

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {users.map((user) => (
        <li
          key={user.id}
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '15px',
            borderBottom: '1px solid #ddd',
            paddingBottom: '10px',
          }}
        >
          <img
            src={user.avatar_url}
            alt={`${user.login} avatar`}
            width={50}
            height={50}
            style={{ borderRadius: '50%', marginRight: '15px' }}
          />
          <div style={{ flexGrow: 1 }}>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontWeight: 'bold', textDecoration: 'none', color: '#0366d6' }}
            >
              {user.login}
            </a>
          </div>
          <div>
            {/* Optional: You can add a button or more info here */}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
