import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getTodoApi } from 'services/todo';

import './detailPage.css';

function DetailPage() {
  const { todoId } = useParams('todoId');
  const [todo, setTodo] = useState();

  const getTodo = async () => {
    if (!todoId) return;

    const { data } = await getTodoApi(todoId);
    setTodo(data);
  };

  useEffect(() => {
    getTodo();
  }, [todoId]);

  return <div className="detailPageWrapper">{ JSON.stringify(todo) }</div>;
}

export default DetailPage;
