export default function Home() {
return (
<main
style={{
minHeight: "100vh",
background: "black",
color: "white",
display: "flex",
justifyContent: "center",
alignItems: "center",
flexDirection: "column",
textAlign: "center",
padding: "20px",
fontFamily: "sans-serif",
}}
>
<p
style={{
color: "#666",
letterSpacing: "6px",
textTransform: "uppercase",
fontSize: "12px",
}}
>
private story archive </p>

```
  <h1
    style={{
      fontSize: "56px",
      fontWeight: "300",
      lineHeight: "1.2",
      marginTop: "20px",
    }}
  >
    Некоторые истории
    <br />
    начинаются слишком
    <br />
    незаметно.
  </h1>

  <p
    style={{
      color: "#999",
      marginTop: "30px",
      fontSize: "20px",
    }}
  >
    Например, с обычного разговора ночью.
  </p>

  <button
    style={{
      marginTop: "40px",
      padding: "16px 32px",
      background: "transparent",
      color: "white",
      border: "1px solid #444",
      borderRadius: "16px",
      cursor: "pointer",
      fontSize: "18px",
    }}
  >
    начать
  </button>

  <p
    style={{
      marginTop: "60px",
      color: "#555",
      letterSpacing: "4px",
      fontSize: "12px",
    }}
  >
    for elina
  </p>
</main>
```

);
}
