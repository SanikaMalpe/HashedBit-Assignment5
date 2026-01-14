import { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Calculator</h2>

        <input
          type="number"
          placeholder="Enter Number 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          style={styles.input}
        />

        <input
          type="number"
          placeholder="Enter Number 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          style={styles.input}
        />

        <div style={styles.buttonContainer}>
          <button style={styles.button} onClick={() => setResult(Number(num1) + Number(num2))}>+</button>
          <button style={styles.button} onClick={() => setResult(Number(num1) - Number(num2))}>−</button>
          <button style={styles.button} onClick={() => setResult(Number(num1) * Number(num2))}>×</button>
          <button style={styles.button} onClick={() => setResult(Number(num1) / Number(num2))}>÷</button>
        </div>

        <h3 style={styles.result}>Result: {result}</h3>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#969696"
  },
  card: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "20px",
    width: "300px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center"
  },
  heading: {
    marginBottom: "20px",
    color: "#333"
  },
  input: {
    width: "90%",
    padding: "10px",
    marginBottom: "15px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px"
  },
  button: {
    width: "50px",
    height: "40px",
    fontSize: "18px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#4CAF50",
    color: "#fff",
    cursor: "pointer"
  },
  result: {
    color: "#222"
  }
};

export default App;
