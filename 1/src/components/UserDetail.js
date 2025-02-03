// src/components/UserDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { user_id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://json-placeholder.mock.beeceptor.com/users/${user_id}`)
      .then(response => response.json())
      .then(data => setUser(data));
  }, [user_id]);

  if (!user) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      <h1>Подробности пользователя</h1>
      <img src={user.photo} alt={user.name} style={{ width: '150px' }} />
      <p><strong>Имя:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Город:</strong> {user.city}</p>
      <p><strong>Улица:</strong> {user.street}</p>
      {/* Дополнительная информация */}
    </div>
  );
};

export default UserDetail;
