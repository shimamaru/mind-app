import React, { useState, useEffect } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [widgets, setWidgets] = useState([]);

  const fetchMiroData = async () => {
    setLoading(true);

    const apiKey = process.env.REACT_APP_MIRO_API_KEY;
    const boardId = "your_board_id"; // MiroボードのIDを設定します
    const url = `https://api.miro.com/v1/boards/${boardId}/widgets`;

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    setWidgets(data.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchMiroData();
  }, []);

  return (
    <div>
      <h1>Miro Widgets</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {widgets.map((widget) => (
            <li key={widget.id}>{widget.type}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
